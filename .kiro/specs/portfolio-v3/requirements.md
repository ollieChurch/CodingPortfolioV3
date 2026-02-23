# Requirements Document

## Introduction

Portfolio V3 is Ollie's personal developer portfolio and blog site. It replaces an outdated Vue 2 portfolio with a modern, content-driven static site built with Astro and Tailwind CSS, deployed to Netlify. The site serves as an ongoing career companion — a living front door that evolves as new content is added — rather than a one-off job-hunt page. The design is clean, minimal, and dark-themed, inspired by infoxicator.com.

## Glossary

- **Site**: The Astro-based static portfolio and blog website
- **Home_Page**: The landing page displaying an intro, latest blog posts, and a brief summary
- **About_Page**: The personality-driven page with career narrative, timeline, and current interests
- **Blog_Index**: The page listing all blog posts
- **Blog_Post**: An individual blog article rendered from a markdown file with frontmatter
- **Projects_Page**: The page showcasing side projects and notable work
- **Contact_Page**: The page with a contact form and LinkedIn link
- **Navigation**: The site-wide header containing site name, page links, and theme toggle
- **Theme_Toggle**: The control that switches between dark mode and light mode
- **Content_Collection**: Astro's built-in mechanism for managing typed markdown content
- **Contact_Form**: The Netlify Forms-powered form on the Contact page
- **Project_Entry**: A single project record with title, description, optional image, tech tags, and links
- **Career_Timeline**: A simple chronological display of career milestones on the About page
- **Currently_Into_Section**: A small editable blurb on the About page showing what Ollie is currently learning or exploring
- **Frontmatter**: YAML metadata at the top of a markdown file (title, date, description, tags)

## Requirements

### Requirement 1: Home Page

**User Story:** As a visitor, I want to see a welcoming landing page with Ollie's intro and latest blog posts, so that I get an immediate sense of who Ollie is and what he writes about.

#### Acceptance Criteria

1. THE Home_Page SHALL display Ollie's name, role, and a one-liner introduction.
2. THE Home_Page SHALL display a grid or list of the latest blog posts sourced from the Content_Collection.
3. THE Home_Page SHALL display a brief "what I do" summary section.
4. WHEN a visitor clicks a blog post entry on the Home_Page, THE Site SHALL navigate to the corresponding Blog_Post page.

### Requirement 2: About Page

**User Story:** As a visitor, I want to read about Ollie's background and current interests, so that I understand his career journey and personality.

#### Acceptance Criteria

1. THE About_Page SHALL display a brief career narrative covering the transition from acting to software development in 2022 and the current Lead Developer role at Ontime Payments.
2. THE About_Page SHALL display a Career_Timeline showing the two software roles and context about the career transition.
3. THE About_Page SHALL mention soft skills from the acting background (communication, collaboration, presenting) without overemphasising the actor angle.
4. THE About_Page SHALL display a Currently_Into_Section containing a changeable blurb about what Ollie is currently learning or exploring.
5. THE About_Page SHALL display a link to the Scrimba podcast appearance.
6. THE About_Page SHALL display a link to Ollie's LinkedIn profile.
7. THE About_Page SHALL display a link to the Contact_Page.

### Requirement 3: Blog Content Collection

**User Story:** As Ollie, I want blog posts managed as markdown files with frontmatter, so that adding a new post is as simple as creating a new .md file.

#### Acceptance Criteria

1. THE Content_Collection SHALL define a blog collection that reads markdown files with frontmatter fields: title, date, description, and tags.
2. WHEN a new markdown file with valid frontmatter is added to the blog content folder, THE Content_Collection SHALL include the new file as a Blog_Post without code changes.
3. THE Content_Collection SHALL contain the migrated article "I love vibe coding. I don't trust it." with its original content.
4. THE Content_Collection SHALL contain the migrated article "Google Is About to Kill the Laptop" with its original content.

### Requirement 4: Blog Index Page

**User Story:** As a visitor, I want to browse all blog posts in one place, so that I can find articles that interest me.

#### Acceptance Criteria

1. THE Blog_Index SHALL display a list of all Blog_Post entries from the Content_Collection.
2. THE Blog_Index SHALL display each post's title, date, description, and tags.
3. WHEN a visitor clicks a post entry on the Blog_Index, THE Site SHALL navigate to the corresponding Blog_Post page.

### Requirement 5: Blog Post Page

**User Story:** As a visitor, I want to read individual blog posts with clean typography, so that the reading experience is comfortable.

#### Acceptance Criteria

1. THE Blog_Post page SHALL render the markdown content with clean, readable typography.
2. THE Blog_Post page SHALL display the post title, date, description, and tags from the Frontmatter.
3. THE Blog_Post page SHALL display "Human written, AI assisted." at the end of each article.
4. WHERE a Blog_Post includes references, THE Blog_Post page SHALL display a references section at the end of the article.

### Requirement 6: Projects Page

**User Story:** As a visitor, I want to see Ollie's side projects and notable work, so that I can understand his technical range.

#### Acceptance Criteria

1. THE Projects_Page SHALL display a list of Project_Entry items.
2. THE Projects_Page SHALL display each Project_Entry's title, description, tech tags, and links (code repo, live demo where applicable).
3. WHERE a Project_Entry includes an image, THE Projects_Page SHALL display the image alongside the project details.
4. THE Projects_Page SHALL include Project_Entry items for: Maxwell Mysteries, Director's Portfolio, Actor's Portfolio, and Task Glitch.
5. WHEN a visitor clicks a project link, THE Site SHALL open the linked resource in a new browser tab.

### Requirement 7: Contact Page

**User Story:** As a visitor, I want a way to contact Ollie directly from the site, so that I can reach out without needing to find an email address.

#### Acceptance Criteria

1. THE Contact_Page SHALL display a Contact_Form with fields for name, email, and message.
2. THE Contact_Form SHALL submit data via Netlify Forms.
3. WHEN the Contact_Form is submitted successfully, THE Contact_Page SHALL display a confirmation message to the visitor.
4. IF the Contact_Form submission fails, THEN THE Contact_Page SHALL display an error message to the visitor.
5. THE Contact_Page SHALL display a link to Ollie's LinkedIn profile.
6. THE Contact_Page SHALL NOT display Ollie's email address directly.

### Requirement 8: Navigation

**User Story:** As a visitor, I want consistent site-wide navigation, so that I can move between pages easily.

#### Acceptance Criteria

1. THE Navigation SHALL be displayed on every page of the Site.
2. THE Navigation SHALL contain the site name or logo, links to all pages (Home, About, Blog, Projects, Contact), and the Theme_Toggle.
3. THE Navigation SHALL be responsive and usable on mobile devices.
4. WHEN a visitor clicks a Navigation link, THE Site SHALL navigate to the corresponding page.

### Requirement 9: Dark and Light Theme

**User Story:** As a visitor, I want to toggle between dark and light mode, so that I can read comfortably in different lighting conditions.

#### Acceptance Criteria

1. THE Site SHALL default to dark mode on first visit.
2. WHEN a visitor activates the Theme_Toggle, THE Site SHALL switch between dark mode and light mode.
3. THE Site SHALL persist the visitor's theme preference across page navigations within the same session.

### Requirement 10: Responsive Design

**User Story:** As a visitor, I want the site to work well on any device, so that I can browse on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Site SHALL be fully usable and readable on viewport widths from 320px to 1920px.
2. THE Navigation SHALL adapt its layout for mobile viewports (e.g., a collapsed menu or simplified layout).

### Requirement 11: Static Site Generation and Deployment

**User Story:** As Ollie, I want the site built as a static site deployed to Netlify, so that hosting is simple and free.

#### Acceptance Criteria

1. THE Site SHALL be built using Astro as a static site generator.
2. THE Site SHALL use Tailwind CSS for all styling.
3. THE Site SHALL be deployable to Netlify via a GitHub repository connection.
4. THE Site SHALL produce static HTML, CSS, and JavaScript output with no server-side runtime required.

### Requirement 12: Project Data Management

**User Story:** As Ollie, I want project data stored in a simple data file or content collection, so that adding or editing projects is straightforward.

#### Acceptance Criteria

1. THE Site SHALL store Project_Entry data in a simple data file or as a Content_Collection.
2. WHEN a Project_Entry is added or modified in the data source, THE Projects_Page SHALL reflect the change after a site rebuild without code changes.
