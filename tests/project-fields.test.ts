// Feature: portfolio-v3, Property 7: Project entries display all required fields
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { getProjectDisplayFields } from '../src/data/projects';

/**
 * **Validates: Requirements 6.1, 6.2, 6.3**
 *
 * Property 7: Project entries display all required fields
 * For any project entry, required fields (title, description, techTags) are always present,
 * and image appears only when provided and non-empty.
 */

const nonEmptyString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0);

const projectArb = fc.record({
    title: nonEmptyString,
    description: nonEmptyString,
    techTags: fc.array(nonEmptyString, { minLength: 1, maxLength: 8 }),
    repoUrl: fc.option(fc.webUrl(), { nil: undefined }),
    liveUrl: fc.option(fc.webUrl(), { nil: undefined }),
    image: fc.oneof(
        fc.constant(undefined),
        fc.constant(''),
        fc.constant('   '),
        nonEmptyString,
    ),
});

describe('Project field display (Property 7)', () => {
    it('required fields are always present in display output', () => {
        fc.assert(
            fc.property(projectArb, (project) => {
                const fields = getProjectDisplayFields(project);

                expect(fields.title).toBe(project.title);
                expect(fields.description).toBe(project.description);
                expect(fields.techTags).toEqual(project.techTags);
            }),
            { numRuns: 100 },
        );
    });

    it('image appears only when provided and non-empty', () => {
        fc.assert(
            fc.property(projectArb, (project) => {
                const fields = getProjectDisplayFields(project);
                const hasImage = project.image !== undefined
                    && project.image.trim().length > 0;

                if (hasImage) {
                    expect(fields.image).toBe(project.image);
                } else {
                    expect(fields.image).toBeNull();
                }
            }),
            { numRuns: 100 },
        );
    });
});
