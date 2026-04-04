---
name: Reference stub — Projects Hub for antarctica.io
description: This repo is affected by a workspace plan owned by sites/antarctica.io
type: reference-stub
owner-plan: sites/antarctica.io/context/plans/2026-04-04-projects-hub.md
status: proposed
date: 2026-04-04
---

# Reference — Projects Hub for antarctica.io

This repo (`sites/chevp.github.io`) participates in a workspace plan whose primary owner is:

**`sites/antarctica.io`** → `../../../antarctica.io/context/plans/2026-04-04-projects-hub.md`

## What changes in this repo

- `index.html`
  - Prepend a "Projects Hub" entry to `projectData.Projects` pointing at `https://chevp.github.io/antarctica.io/#/projects`
  - For every entry in other categories that currently has **no** `url`, set `url: "https://chevp.github.io/antarctica.io/#/projects/<slug>"`

## What NOT to do

- Do not duplicate the workspace plan here.
- Do not expand scope within this repo without going back to `sites/antarctica.io`.
- Do not add or remove projects from `projectData` as part of this change — only add the hub entry and the URLs.

## Commit back-reference

All commits in this repo related to this workspace plan carry:

```
Refs workspace-plan: sites/antarctica.io#2026-04-04-projects-hub
```

## Sequence

This repo is **#2** in the workspace plan's commit sequence.
Push only after `sites/antarctica.io` has been pushed and deployed so the links resolve.
