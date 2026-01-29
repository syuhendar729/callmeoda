// src/utils/getPosts.js
const blog = import.meta.glob("../data/blog/*.md", {
    eager: true,
    as: "raw",
});


const projects = import.meta.glob("../data/projects/*.md", {
    eager: true,
    as: "raw",
});

function parseFrontmatter(raw) {
    const match = raw.match(/^-{3}([\s\S]*?)-{3}/);
    if (!match) return { data: {}, content: raw };

    const fm = match[1].trim();
    const content = raw.replace(match[0], "").trim();

    const data = {};
    fm.split("\n").forEach((line) => {
        const [key, ...rest] = line.split(":");
        data[key.trim()] = rest.join(":").trim();
    });

    return { data, content };
}

export function getAllBlog() {
    return Object.entries(blog).map(([path, raw]) => {
        const { data, content } = parseFrontmatter(raw);

        return {
            ...data,
            content,
            slug: data.slug || path.split("/").pop().replace(".md", ""),
        };
    });
}

export function getAllProjects() {
    return Object.entries(projects).map(([path, raw]) => {
        const { data, content } = parseFrontmatter(raw);

        return {
            ...data,
            content,
            slug: data.slug || path.split("/").pop().replace(".md", ""),
        };
    });
}


