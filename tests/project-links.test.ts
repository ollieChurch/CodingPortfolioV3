// Feature: portfolio-v3, Property 8: Project links open in new tab
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { getProjectLinkAttrs } from '../src/data/projects';

/**
 * **Validates: Requirements 6.5**
 *
 * Property 8: Project links open in new tab
 * For any project link URL, the anchor attributes must include
 * target="_blank" and rel="noopener noreferrer".
 */

describe('Project links open in new tab (Property 8)', () => {
    it('all project links have target="_blank" and rel="noopener noreferrer"', () => {
        fc.assert(
            fc.property(fc.webUrl(), (url) => {
                const attrs = getProjectLinkAttrs(url);

                expect(attrs.href).toBe(url);
                expect(attrs.target).toBe('_blank');
                expect(attrs.rel).toBe('noopener noreferrer');
            }),
            { numRuns: 100 },
        );
    });
});
