// Feature: portfolio-v3, Property 4: Blog Index displays all posts
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { sortPostsByDateDesc } from '../src/data/posts';

/**
 * **Validates: Requirements 4.1**
 *
 * Property 4: Blog Index displays all posts
 * For any set of blog posts, the Blog Index displays exactly as many
 * entries as exist in the collection — no posts omitted, no extras.
 *
 * Since we can't render the Astro page in Vitest, we test the underlying
 * logic: sortPostsByDateDesc (used by the Blog Index) preserves the full
 * array length for any random-length input.
 */

const postArb = fc.record({
    data: fc.record({
        date: fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31'), noInvalidDate: true }),
    }),
    slug: fc.string({ minLength: 1, maxLength: 30 }),
});

describe('Blog Index completeness (Property 4)', () => {
    it('sortPostsByDateDesc returns exactly the same number of posts as the input', () => {
        fc.assert(
            fc.property(
                fc.array(postArb, { minLength: 0, maxLength: 50 }),
                (posts) => {
                    const result = sortPostsByDateDesc(posts);
                    expect(result).toHaveLength(posts.length);
                },
            ),
            { numRuns: 100 },
        );
    });

    it('sortPostsByDateDesc does not omit or duplicate any post', () => {
        fc.assert(
            fc.property(
                fc.array(postArb, { minLength: 0, maxLength: 50 }),
                (posts) => {
                    const result = sortPostsByDateDesc(posts);
                    // Every input post must appear exactly once in the output
                    for (const post of posts) {
                        expect(result).toContain(post);
                    }
                },
            ),
            { numRuns: 100 },
        );
    });
});
