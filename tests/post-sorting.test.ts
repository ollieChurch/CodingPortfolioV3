// Feature: portfolio-v3, Property 1: Latest posts are sorted by date descending
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { sortPostsByDateDesc, getLatestPosts } from '../src/data/posts';

/**
 * **Validates: Requirements 1.2**
 *
 * Property 1: Latest posts are sorted by date descending
 * For any set of blog posts, sorting produces descending date order
 * and slicing respects the display limit.
 */

const postArb = fc.record({
    data: fc.record({
        date: fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31'), noInvalidDate: true }),
    }),
});

describe('Post sorting (Property 1)', () => {
    it('sortPostsByDateDesc returns posts in descending date order', () => {
        fc.assert(
            fc.property(fc.array(postArb), (posts) => {
                const sorted = sortPostsByDateDesc(posts);
                for (let i = 1; i < sorted.length; i++) {
                    expect(new Date(sorted[i - 1].data.date).getTime())
                        .toBeGreaterThanOrEqual(new Date(sorted[i].data.date).getTime());
                }
            }),
            { numRuns: 100 },
        );
    });

    it('sortPostsByDateDesc preserves all posts', () => {
        fc.assert(
            fc.property(fc.array(postArb), (posts) => {
                const sorted = sortPostsByDateDesc(posts);
                expect(sorted).toHaveLength(posts.length);
            }),
            { numRuns: 100 },
        );
    });

    it('getLatestPosts returns at most limit posts', () => {
        fc.assert(
            fc.property(
                fc.array(postArb),
                fc.integer({ min: 0, max: 20 }),
                (posts, limit) => {
                    const latest = getLatestPosts(posts, limit);
                    expect(latest.length).toBeLessThanOrEqual(limit);
                    expect(latest.length).toBeLessThanOrEqual(posts.length);
                },
            ),
            { numRuns: 100 },
        );
    });

    it('getLatestPosts returns posts sorted descending', () => {
        fc.assert(
            fc.property(
                fc.array(postArb, { minLength: 2 }),
                fc.integer({ min: 1, max: 20 }),
                (posts, limit) => {
                    const latest = getLatestPosts(posts, limit);
                    for (let i = 1; i < latest.length; i++) {
                        expect(new Date(latest[i - 1].data.date).getTime())
                            .toBeGreaterThanOrEqual(new Date(latest[i].data.date).getTime());
                    }
                },
            ),
            { numRuns: 100 },
        );
    });
});
