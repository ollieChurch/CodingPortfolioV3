// Feature: portfolio-v3, Property 2: Post card links match slugs
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { getPostUrl } from '../src/data/posts';

/**
 * **Validates: Requirements 1.4, 4.3**
 *
 * Property 2: Post card links match slugs
 * For any valid slug string, getPostUrl returns `/blog/{slug}`.
 */

// Generate random alphanumeric slug strings (lowercase letters, digits, hyphens)
const slugChars = 'abcdefghijklmnopqrstuvwxyz0123456789-';
const slugArb = fc
    .array(fc.constantFrom(...slugChars.split('')), { minLength: 1, maxLength: 80 })
    .map((chars) => chars.join(''));

describe('PostCard links (Property 2)', () => {
    it('getPostUrl returns /blog/{slug} for any valid slug', () => {
        fc.assert(
            fc.property(slugArb, (slug) => {
                const url = getPostUrl(slug);
                expect(url).toBe(`/blog/${slug}`);
            }),
            { numRuns: 100 },
        );
    });

    it('getPostUrl always starts with /blog/', () => {
        fc.assert(
            fc.property(slugArb, (slug) => {
                const url = getPostUrl(slug);
                expect(url.startsWith('/blog/')).toBe(true);
            }),
            { numRuns: 100 },
        );
    });

    it('getPostUrl preserves the slug in the URL', () => {
        fc.assert(
            fc.property(slugArb, (slug) => {
                const url = getPostUrl(slug);
                expect(url.endsWith(slug)).toBe(true);
            }),
            { numRuns: 100 },
        );
    });
});
