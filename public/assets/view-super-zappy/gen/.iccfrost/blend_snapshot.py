"""Schreibt den semantischen Snapshot einer .blend als JSON.

    blender -b --factory-startup --python blend_snapshot.py -- --blend x.blend --out x.json

Erfasst wird, was Bedeutung hat (Objekte, Materialien, Meshes, Collections mit
ihren Eigenschaften), nicht der Binärinhalt der Datei. Die stabile Identität
ist die Custom Property `iccfrost_id`; `name` ist nur der sichtbare Name.
"""

import json
import os
import sys

import bpy


def arg(name, default=None):
    argv = sys.argv[sys.argv.index("--") + 1:]
    if f"--{name}" not in argv:
        return default
    return argv[argv.index(f"--{name}") + 1]


def jsonable(value):
    if isinstance(value, (int, float, str, bool)) or value is None:
        return value
    try:
        return [jsonable(v) for v in value]
    except TypeError:
        return str(value)


def round_all(value, digits=6):
    if isinstance(value, float):
        return round(value, digits)
    if isinstance(value, list):
        return [round_all(v, digits) for v in value]
    return value


def custom_properties(datablock):
    out = {}
    for key in datablock.keys():
        if key.startswith("_") or key == "iccfrost_id":
            continue
        out[key] = round_all(jsonable(datablock[key]))
    return out


def entity(datablock, properties):
    properties = dict(properties)
    properties.update(custom_properties(datablock))
    return {
        "iccfrost_id": datablock.get("iccfrost_id"),
        "name": datablock.name,
        "properties": {k: properties[k] for k in sorted(properties)},
    }


def material_properties(material):
    properties = {"use_nodes": material.use_nodes}
    node = None
    if material.use_nodes and material.node_tree:
        node = next((n for n in material.node_tree.nodes if n.type == "BSDF_PRINCIPLED"), None)
    if node is None:
        return properties
    for input_name, key in (
        ("Base Color", "base_color"),
        ("Metallic", "metallic"),
        ("Roughness", "roughness"),
        ("IOR", "ior"),
        ("Alpha", "alpha"),
    ):
        socket = node.inputs.get(input_name)
        if socket is None or socket.is_linked:
            continue
        properties[key] = round_all(jsonable(socket.default_value))
    return properties


def main():
    blend = os.path.abspath(arg("blend"))
    out = os.path.abspath(arg("out"))
    bpy.ops.wm.open_mainfile(filepath=blend)
    bpy.context.view_layer.update()

    snapshot = {
        "schema": "iccfrost.blend.snapshot/1",
        "extractor": "blender-python/1",
        # Wird vom Rust-Reader durch den echten Datei-Hash ersetzt.
        "binary_hash": "sha256:" + "0" * 64,
        "objects": [
            entity(obj, {
                "type": obj.type,
                "location": round_all([*obj.location]),
                "rotation_euler": round_all([*obj.rotation_euler]),
                "scale": round_all([*obj.scale]),
                "parent": obj.parent.name if obj.parent else None,
                "data": obj.data.name if obj.data else None,
                "materials": [slot.material.name for slot in obj.material_slots if slot.material],
            })
            for obj in sorted(bpy.data.objects, key=lambda o: o.name)
        ],
        "materials": [
            entity(mat, material_properties(mat))
            for mat in sorted(bpy.data.materials, key=lambda m: m.name)
        ],
        "meshes": [
            entity(mesh, {
                "vertices": len(mesh.vertices),
                "polygons": len(mesh.polygons),
                "materials": [m.name for m in mesh.materials if m],
            })
            for mesh in sorted(bpy.data.meshes, key=lambda m: m.name)
        ],
        "collections": [
            entity(coll, {
                "objects": sorted(o.name for o in coll.objects),
                "children": sorted(c.name for c in coll.children),
            })
            for coll in sorted(bpy.data.collections, key=lambda c: c.name)
        ],
    }

    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        json.dump(snapshot, f, indent=2, ensure_ascii=False, sort_keys=True)
    print(f"BLEND_SNAPSHOT {len(snapshot['objects'])} objects, {len(snapshot['materials'])} materials")


main()
