// Feature: portfolio-v3, Property 6: References section when references exist
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { hasReferencesSection } from '../src/data/posts';

/**
 * **Validates: Requirements 5.4**
 *
 * Property 6: References section when references exist
 * For any blog post body containing "## References", hasReferencesSection returns true.
 * For any blog post body without "## References", hasReferencesSection returns false.
 */

describe('References section when references exist (Property 6)', () => {
    it('returns true when body contains "## References"', () => {
        fc.assert(
            fc.property(
                fc.string({ minLength: 0, maxLength: 300 }),
                fc.string({ minLength: 0, maxLength: 300 }),
                (before, after) => {
                    const body = `${before}## References${after}`;
                    expect(hasReferencesSection(body)).toBe(true);
                },
            ),
            { numRuns: 100 },
        );
    });

    it('returns false when body does not contain "## References"', () => {
        fc.assert(
            fc.property(
                fc.string({ minLength: 0, maxLength: 500 }),
                (body) => {
                    fc.pre(!body.includes('## References'));
                    expect(hasReferencesSection(body)).toBe(false);
                },
            ),
            { numRuns: 100 },
        );
    });

    it('returns false for undefined or null body', () => {
        expect(hasReferencesSection(undefined)).toBe(false);
        expect(hasReferencesSection(null)).toBe(false);
    });
});
