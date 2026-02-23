// Feature: portfolio-v3, Property 3: Blog frontmatter fields are displayed
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { getFrontmatterDisplayFields } from '../src/data/posts';

/**
 * **Validates: Requirements 3.1, 4.2, 5.2**
 *
 * Property 3: Blog frontmatter fields are displayed
 * For any valid frontmatter, all four fields appear in the display output.
 */

const frontmatterArb = fc.record({
    title: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
    date: fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31'), noInvalidDate: true }),
    description: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
    tags: fc.array(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        { minLength: 1, maxLength: 5 },
    ),
});

describe('Frontmatter display (Property 3)', () => {
    it('all four frontmatter fields appear in display output', () => {
        fc.assert(
            fc.property(frontmatterArb, (fm) => {
                const fields = getFrontmatterDisplayFields(fm);
                const output = fields.join(' ');

                expect(output).toContain(fm.title);
                expect(output).toContain(fm.date.toLocaleDateString());
                expect(output).toContain(fm.description);
                for (const tag of fm.tags) {
                    expect(output).toContain(tag);
                }
            }),
            { numRuns: 100 },
        );
    });

    it('display fields include at least 3 + number of tags entries', () => {
        fc.assert(
            fc.property(frontmatterArb, (fm) => {
                const fields = getFrontmatterDisplayFields(fm);
                // title + date + description + each tag
                expect(fields.length).toBe(3 + fm.tags.length);
            }),
            { numRuns: 100 },
        );
    });
});
