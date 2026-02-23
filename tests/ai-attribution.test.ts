// Feature: portfolio-v3, Property 5: AI attribution on every post
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { AI_ATTRIBUTION, appendAttribution } from '../src/data/posts';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * **Validates: Requirements 5.3**
 *
 * Property 5: AI attribution on every post
 * For any blog post, the rendered output contains "Human written, AI assisted."
 *
 * Since we can't render Astro pages in Vitest, we test two things:
 * 1. The appendAttribution helper always includes the attribution for any content.
 * 2. Every actual blog markdown file contains the attribution text.
 */

describe('AI attribution on every post (Property 5)', () => {
    it('appendAttribution always includes the attribution string for any content', () => {
        fc.assert(
            fc.property(fc.string({ minLength: 0, maxLength: 500 }), (content) => {
                const result = appendAttribution(content);
                expect(result).toContain(AI_ATTRIBUTION);
            }),
            { numRuns: 100 },
        );
    });

    it('every blog markdown file contains the AI attribution text', () => {
        const blogDir = join(__dirname, '..', 'src', 'content', 'blog');
        const files = readdirSync(blogDir).filter((f) => f.endsWith('.md'));

        expect(files.length).toBeGreaterThan(0);

        for (const file of files) {
            const content = readFileSync(join(blogDir, file), 'utf-8');
            expect(content).toContain(AI_ATTRIBUTION);
        }
    });
});
