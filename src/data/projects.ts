/**
 * Utility functions for project entries.
 */

export interface ProjectEntry {
    title: string;
    description: string;
    techTags: string[];
    repoUrl?: string;
    liveUrl?: string;
    image?: string;
}

/**
 * Returns the display fields for a project entry.
 * Required fields (title, description, techTags) are always included.
 * Image is included only when provided and non-empty.
 */
export function getProjectDisplayFields(project: ProjectEntry): {
    title: string;
    description: string;
    techTags: string[];
    image: string | null;
} {
    return {
        title: project.title,
        description: project.description,
        techTags: project.techTags,
        image: project.image && project.image.trim().length > 0 ? project.image : null,
    };
}

/**
 * Returns the HTML attributes for an external project link.
 * All project links open in a new tab with noopener noreferrer.
 */
export function getProjectLinkAttrs(url: string): {
    href: string;
    target: string;
    rel: string;
} {
    return {
        href: url,
        target: '_blank',
        rel: 'noopener noreferrer',
    };
}
