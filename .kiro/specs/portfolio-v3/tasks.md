

# Implementation Plan: Portfolio V3

## Overview

Build Ollie's developer portfolio as a static Astro site with Tailwind CSS, content collections for blog and projects, dark/light theming, and Netlify Forms for contact. Tasks are ordered so each step builds on the last, with no orphaned code.

## Tasks

- [x] 1. Scaffold Astro project and install dependencies
  - Run `npm create astro@latest` in the CodingPortfolioV3 directory (empty template, TypeScript)
  - Install Tailwind CSS integration: `npx astro add tailwind`
  - Install Vitest and fast-check: `npm install -D vitest fast-check`
  - Create `src/styles/global.css` with Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)
  - Configure `tailwind.config.mjs` with `darkMode: 'class'`
  - Verify the project builds and runs with `npm run build`
  - _Requirements: 11.1, 11.2, 11.4_

- [x] 2. Create BaseLayout, Navigation, and ThemeToggle
  - [x] 2.1 Create BaseLayout component
    - Create `src/layouts/BaseLayout.astro` with HTML shell, `<head>` (title, meta description, global.css import), inline theme-init script (reads localStorage, applies `dark` class before paint), `<Navigation />`, `<main>` slot, and `<footer>`
    - Props: `title: string`, `description?: string`
    - _Requirements: 8.1, 9.1, 11.2_

  - [x] 2.2 Create Navigation component
    - Create `src/components/Navigation.astro` with site name linking to `/`, links to Home, About, Blog, Projects, Contact, and `<ThemeToggle />`
    - Implement responsive mobile layout (hamburger menu or simplified nav) using Tailwind
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 10.2_

  - [x] 2.3 Create ThemeToggle component
    - Create `src/components/ThemeToggle.astro` with a button that toggles `dark` class on `<html>` and saves preference to localStorage
    - Wrap localStorage calls in try/catch for private browsing fallback
    - _Requirements: 9.1, 9.2, 9.3_

  - [x] 2.4 Write property test for Navigation links (Property 10)
    - **Property 10: Navigation present with correct links on every page**
    - Verify nav output contains links to `/`, `/about`, `/blog`, `/projects`, `/contact`
    - **Validates: Requirements 8.1, 8.4**

  - [x] 2.5 Write property test for ThemeToggle round-trip (Property 11)
    - **Property 11: Theme toggle round-trip**
    - For any initial state (dark/light), toggling switches to opposite and persists to localStorage
    - **Validates: Requirements 9.2, 9.3**

- [x] 3. Set up content collections and blog data
  - [x] 3.1 Define content collection schemas
    - Create `src/content.config.ts` with blog collection schema (title: string, date: date, description: string, tags: string[])
    - _Requirements: 3.1_

  - [x] 3.2 Create project data file
    - Create `src/content/projects/projects.json` with entries for Maxwell Mysteries, Director's Portfolio, Actor's Portfolio, and Task Glitch (title, description, techTags, repoUrl, liveUrl, image)
    - _Requirements: 6.4, 12.1, 12.2_

  - [x] 3.3 Migrate blog articles
    - Create `src/content/blog/i-love-vibe-coding.md` with frontmatter (title, date, description, tags) and migrated content from Dev.to
    - Create `src/content/blog/google-kill-laptop.md` with frontmatter and migrated content from Dev.to
    - _Requirements: 3.2, 3.3, 3.4_

- [x] 4. Checkpoint — Verify content collections
  - Ensure the project builds successfully with content collections defined and blog/project data in place. Ask the user if questions arise.

- [x] 5. Build blog pages and PostCard component
  - [x] 5.1 Create PostCard component
    - Create `src/components/PostCard.astro` with props: title, date, description, tags, slug
    - Render a clickable card linking to `/blog/{slug}`
    - _Requirements: 1.4, 4.3_

  - [x] 5.2 Create Blog Index page
    - Create `src/pages/blog/index.astro` using BaseLayout
    - Fetch all blog posts from content collection, sort by date descending, render each with PostCard showing title, date, description, tags
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 5.3 Create Blog Post dynamic page
    - Create `src/pages/blog/[...slug].astro` with `getStaticPaths` from blog collection
    - Render post title, date, description, tags, markdown content, and "Human written, AI assisted." at the end
    - Conditionally render a references section if the post content includes references
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [x] 5.4 Write property test for latest posts ordering (Property 1)
    - **Property 1: Latest posts are sorted by date descending**
    - Generate random arrays of post objects with dates, verify sorting logic produces descending order and respects the display limit
    - **Validates: Requirements 1.2**

  - [x] 5.5 Write property test for PostCard links (Property 2)
    - **Property 2: Post card links match slugs**
    - Generate random slug strings, verify href equals `/blog/{slug}`
    - **Validates: Requirements 1.4, 4.3**

  - [x] 5.6 Write property test for frontmatter display (Property 3)
    - **Property 3: Blog frontmatter fields are displayed**
    - Generate random valid frontmatter, verify all four fields appear in rendered output
    - **Validates: Requirements 3.1, 4.2, 5.2**

  - [x] 5.7 Write property test for Blog Index completeness (Property 4)
    - **Property 4: Blog Index displays all posts**
    - Generate random-length arrays of posts, verify the index renders exactly that many entries
    - **Validates: Requirements 4.1**

  - [x] 5.8 Write property test for AI attribution (Property 5)
    - **Property 5: AI attribution on every post**
    - Verify rendered blog post output contains "Human written, AI assisted."
    - **Validates: Requirements 5.3**

  - [x] 5.9 Write property test for references section (Property 6)
    - **Property 6: References section when references exist**
    - Generate posts with and without references, verify section appears/disappears accordingly
    - **Validates: Requirements 5.4**

- [x] 6. Build Home page
  - Create `src/pages/index.astro` using BaseLayout
  - Display Ollie's name, role, and one-liner intro
  - Display a "what I do" summary section
  - Fetch latest blog posts (sorted by date descending, limited), render with PostCard
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 7. Build Projects page and ProjectCard component
  - [x] 7.1 Create ProjectCard component
    - Create `src/components/ProjectCard.astro` with props: title, description, techTags, repoUrl?, liveUrl?, image?
    - External links use `target="_blank" rel="noopener noreferrer"`
    - Conditionally render image when provided
    - _Requirements: 6.2, 6.3, 6.5_

  - [x] 7.2 Create Projects page
    - Create `src/pages/projects.astro` using BaseLayout
    - Load project data from `projects.json`, render each entry with ProjectCard
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 12.1_

  - [x] 7.3 Write property test for project field display (Property 7)
    - **Property 7: Project entries display all required fields**
    - Generate random project entries with/without optional fields, verify required fields render and image appears only when provided
    - **Validates: Requirements 6.1, 6.2, 6.3**

  - [x] 7.4 Write property test for project links (Property 8)
    - **Property 8: Project links open in new tab**
    - Generate random URLs, verify anchor elements have `target="_blank"` and `rel="noopener noreferrer"`
    - **Validates: Requirements 6.5**

- [x] 8. Build About page
  - Create `src/pages/about.astro` using BaseLayout
  - [x] 8.1 Create Timeline component and About page content
    - Create `src/components/Timeline.astro` accepting an array of `{ year, title, description }` entries
    - Write About page with career narrative (acting to dev in 2022, Lead Developer at Ontime Payments), Career_Timeline, soft skills mention, Currently_Into_Section, and links to Scrimba podcast, LinkedIn, and Contact page
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [x] 9. Build Contact page
  - [x] 9.1 Create ContactForm component and Contact page
    - Create `src/components/ContactForm.astro` with name, email, message fields, `data-netlify="true"` attribute
    - Add client-side fetch POST with success/error message toggling
    - Create `src/pages/contact.astro` using BaseLayout with ContactForm and LinkedIn link
    - No email address displayed anywhere on the page
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [x] 9.2 Write property test for no email on contact page (Property 9)
    - **Property 9: No email address on contact page**
    - Verify rendered Contact page output does not match an email address pattern
    - **Validates: Requirements 7.6**

- [x] 10. Responsive design pass
  - Review and adjust all pages and components for viewport widths 320px–1920px
  - Ensure Navigation adapts for mobile (hamburger/simplified layout)
  - Verify Tailwind responsive utilities are applied consistently
  - _Requirements: 10.1, 10.2_

- [x] 11. Final checkpoint — Full build and test verification
  - Run `npm run build` to verify static output with no errors
  - Run `npx vitest --run` to verify all tests pass
  - Verify Netlify deployment config (netlify.toml or build settings) is in place
  - Ask the user if questions arise.
  - _Requirements: 11.1, 11.3, 11.4_

## Notes

- Each task references specific requirements for traceability
- Property tests use fast-check with Vitest, minimum 100 iterations per property
- Checkpoints ensure incremental validation
- Blog content will need to be copied from Dev.to — the user should have the original articles ready
