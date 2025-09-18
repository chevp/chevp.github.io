import './style.css'

// Project data
const projectData = {
    "Projects": [
        { name: "ECS Configurator", desc: "Visual configuration & structured asset management for ECS systems.", url: "https://chevp.github.io/ecs-configurator-site/", text: "ECS Configurator →" },
        { name: "Vulkan Playground", desc: "Experimentation with Vulkan rendering pipelines and custom shaders.", url: "https://github.com/chevp/vulkan-playground", text: "GitHub Repo →" },
        { name: "Programming Tutorials", desc: "Curated code examples and guides on graphics, tools, and performance topics.", url: "https://chevp.github.io/tutorials/", text: "Tutorials →" },
        { name: "Prompt Guide", desc: "A guide for AI prompt engineering in programming and game development.", url: "https://chevp.github.io/prompt-guide/", text: "Prompt Guide →" },
        { name: "chevp-dev", desc: "List of all tools, configs, and setup steps for a Win11 dev environment.", url: "https://chevp.github.io/chevp-dev/", text: "DevEnv List →" }
    ],
    "Assets": [
        { name: "blender-assets-library", desc: "Organisation: projects" },
        { name: "scene-assets-library", desc: "Organisation: projects" },
        { name: "scoe-assets-library", desc: "Organisation: projects" },
        { name: "lunara-assets-lib", desc: "Organisation: projects" },
        { name: "image-assets-library", desc: "Organisation: projects" },
        { name: "pbr-materials-library", desc: "Organisation: projects" }
    ],
    "Data": [
        { name: "data-morph", desc: "Organisation: projects" },
        { name: "nexus-data", desc: "Organisation: projects" },
        { name: "nexus-json-server", desc: "Organisation: projects" },
        { name: "rust-genomics", desc: "Organisation: projects" },
        { name: "biomedical", desc: "Organisation: projects" }
    ],
    "Development": [
        { name: "scoe-sdk-dev", desc: "Organisation: projects" },
        { name: "quantum-rift-electron-client", desc: "Organisation: quantum-rift" },
        { name: "nebulon-sdk-dev", desc: "Organisation: projects" },
        { name: "elyrion-studio-sdk-dev", desc: "Organisation: projects" },
        { name: "silvarin-sdk-dev", desc: "Organisation: projects" },
        { name: "lunara-sdk-dev", desc: "Organisation: projects" },
        { name: "coregfx-sdk-dev", desc: "Organisation: projects" },
        { name: "kalyra-dev", desc: "Organisation: projects" },
        { name: "ad-flow-sdk", desc: "Organisation: projects" },
        { name: "che-sdk-dev", desc: "Organisation: projects" },
        { name: "lunara-cli", desc: "Organisation: projects" },
        { name: "lunara-quickstarts", desc: "Organisation: projects" },
        { name: "coreflux", desc: "Organisation: projects" },
        { name: "direct-dispatch", desc: "Organisation: projects" },
        { name: "logic-hub", desc: "Organisation: projects" },
        { name: "scoe-dashboard", desc: "Organisation: projects" },
        { name: "nexus-data", desc: "Organisation: projects" },
        { name: "shop-front-angular-webapp", desc: "Organisation: projects" },
        { name: "shop-front-native-script", desc: "Organisation: projects" },
        { name: "cross-platform-angular", desc: "Organisation: projects" },
        { name: "nexus-json-server", desc: "Organisation: echo" },
        { name: "mapping-hub", desc: "Organisation: projects" },
        { name: "nexus-control", desc: "Organisation: projects" },
        { name: "nexus-editor-frame", desc: "Organisation: projects" },
        { name: "nexus-frame", desc: "Organisation: projects" },
        { name: "nexus-map-frame", desc: "Organisation: projects" }
    ],
    "Engine": [
        { name: "scoe-cpp-engine", desc: "Organisation: projects" },
        { name: "scoe-node", desc: "Organisation: projects" },
        { name: "orion-framework", desc: "Organisation: projects" },
        { name: "creative-node", desc: "Organisation: projects" },
        { name: "lunara-nexus", desc: "Organisation: projects" },
        { name: "fire-mesh", desc: "Organisation: projects" }
    ],
    "Frameworks": [
        { name: "logic-hub", desc: "Organisation: projects" },
        { name: "ecs-hub", desc: "Organisation: projects" },
        { name: "nimbus", desc: "Organisation: projects" },
        { name: "hecaris", desc: "Organisation: projects" },
        { name: "nyx-broker", desc: "Organisation: projects" }
    ],
    "Gaming": [
        { name: "arcane-horizon", desc: "Organisation: projects" },
        { name: "arcane-horizon-nodejs", desc: "Organisation: projects" },
        { name: "scape-sphere", desc: "Organisation: projects" },
        { name: "scapestation", desc: "Organisation: projects" },
        { name: "scapestation-admin", desc: "Organisation: projects" },
        { name: "sprite-control", desc: "Organisation: projects" },
        { name: "axon-node", desc: "Organisation: projects" }
    ],
    "Graphics": [
        { name: "angular-three-render", desc: "Organisation: projects" },
        { name: "next-three-render", desc: "Organisation: projects" },
        { name: "ngx-three-scene", desc: "Organisation: projects" },
        { name: "angular-threejs-websocket-quick-start", desc: "Organisation: projects" },
        { name: "cross-platform-angular-vulkan", desc: "Organisation: projects" },
        { name: "vulkan-grpc-renderer", desc: "Organisation: projects" },
        { name: "coregfx", desc: "Organisation: projects" },
        { name: "render-forge", desc: "Organisation: projects" },
        { name: "scoe-cpp-renderer", desc: "Organisation: projects" },
        { name: "csharp-opengl-grpc-node", desc: "Organisation: projects" },
        { name: "pbr-material-dump-tool", desc: "Organisation: projects" },
        { name: "vulkan-playground", desc: "Organisation: projects" },
        { name: "snow-pipe", desc: "Organisation: projects" },
        { name: "ice-hub", desc: "Organisation: projects" },
        { name: "quantum-rift-csharp-mongodb", desc: "Organisation: quantum-rift" }
    ],
    "Platform": [
        { name: "playvibes", desc: "Organisation: projects" },
        { name: "quon-cli", desc: "Organisation: projects" },
        { name: "ice-box", desc: "Organisation: projects" }
    ],
    "Tools": [
        { name: "verto", desc: "Organisation: projects" },
        { name: "direct-dispatch", desc: "Organisation: projects" },
        { name: "scoe-dashboard", desc: "Organisation: projects" },
        { name: "mapping-hub", desc: "Organisation: projects" },
        { name: "nexus-control", desc: "Organisation: projects" },
        { name: "nexus-editor-frame", desc: "Organisation: projects" },
        { name: "nexus-frame", desc: "Organisation: projects" },
        { name: "nexus-map-frame", desc: "Organisation: projects" },
        { name: "quantum-rift-scene-converter", desc: "Organisation: quantum-rift" }
    ],
    "Web": [
        { name: "lunara-studio-site", desc: "Organisation: projects" },
        { name: "chevp.github.io", desc: "Organisation: projects" },
        { name: "atelier-art-gold.io", desc: "Organisation: projects" },
        { name: "daily-display", desc: "Organisation: projects" },
        { name: "shop-front-angular-webapp", desc: "Organisation: projects" },
        { name: "cross-platform-angular", desc: "Organisation: projects" },
        { name: "spring-native-app", desc: "Organisation: projects" },
        { name: "spring-board", desc: "Organisation: projects" },
        { name: "commerce-sphere", desc: "Organisation: projects" },
        { name: "shop-front-native-script", desc: "Organisation: projects" },
        { name: "public-playground-site", desc: "Organisation: projects" },
        { name: "ecs-studio-site", desc: "Organisation: projects" },
        { name: "axon-node-site", desc: "Organisation: projects" },
        { name: "coreflux-hub", desc: "Organisation: projects" }
    ]
};

// Snowflake animation
function createSnowflakes() {
    for (let i = 0; i < 40; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.animationDuration = (Math.random() * 20 + 10) + 's';
        snowflake.style.animationDelay = (Math.random() * 10) + 's';
        document.body.appendChild(snowflake);
    }
}

// Create project element
function createProject(project) {
    const div = document.createElement('div');
    div.className = 'project';

    const h3 = document.createElement('h3');
    h3.textContent = project.name;

    const p = document.createElement('p');
    p.textContent = project.desc;

    div.appendChild(h3);
    div.appendChild(p);

    if (project.url) {
        const a = document.createElement('a');
        a.href = project.url;
        a.target = '_blank';
        a.textContent = project.text;
        div.appendChild(a);
    }

    return div;
}

// Create section
function createSection(title, projects) {
    const section = document.querySelector('.section');

    if (title === 'Projects') {
        const h2 = document.createElement('h2');
        h2.textContent = title;
        section.appendChild(h2);
    } else {
        const h3 = document.createElement('h3');
        h3.className = 'section-title';
        h3.textContent = title;
        section.appendChild(h3);
    }

    const projectsDiv = document.createElement('div');
    projectsDiv.className = 'projects';

    projects.forEach(project => {
        projectsDiv.appendChild(createProject(project));
    });

    section.appendChild(projectsDiv);
}

// Initialize page
function init() {
    createSnowflakes();

    Object.keys(projectData).forEach(category => {
        createSection(category, projectData[category]);
    });
}

// Scroll effect - make background darker when scrolling down
function handleScroll() {
    const scrolled = window.pageYOffset;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min(scrolled / maxScroll, 1);

    // Make colors darker by reducing RGB values as we scroll
    const startColor1 = { r: 10, g: 15, b: 28 };
    const startColor2 = { r: 30, g: 41, b: 59 };

    const darkness = scrollProgress * 0.7; // 0 to 0.7

    const color1 = {
        r: Math.max(0, startColor1.r - (startColor1.r * darkness)),
        g: Math.max(0, startColor1.g - (startColor1.g * darkness)),
        b: Math.max(0, startColor1.b - (startColor1.b * darkness))
    };

    const color2 = {
        r: Math.max(0, startColor2.r - (startColor2.r * darkness)),
        g: Math.max(0, startColor2.g - (startColor2.g * darkness)),
        b: Math.max(0, startColor2.b - (startColor2.b * darkness))
    };

    document.body.style.background = `linear-gradient(to bottom,
        rgb(${color1.r}, ${color1.g}, ${color1.b}),
        rgb(${color2.r}, ${color2.g}, ${color2.b}))`;
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('scroll', handleScroll);