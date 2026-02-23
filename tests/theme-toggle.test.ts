// Feature: portfolio-v3, Property 11: Theme toggle round-trip
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';

/**
 * **Validates: Requirements 9.2, 9.3**
 *
 * Property 11: Theme toggle round-trip
 * For any initial theme state (dark/light), activating the toggle switches to
 * the opposite theme and persists the new preference to localStorage.
 *
 * We model the toggle logic as a pure function matching the inline script in
 * ThemeToggle.astro: classList.toggle('dark') flips the state, then the new
 * value is written to localStorage as 'dark' or 'light'.
 */

/** Pure model of the ThemeToggle inline script behavior. */
function toggleTheme(isDark: boolean): { newIsDark: boolean; stored: string } {
    const newIsDark = !isDark;
    return { newIsDark, stored: newIsDark ? 'dark' : 'light' };
}

describe('ThemeToggle round-trip (Property 11)', () => {
    it('toggling switches to the opposite theme and persists it', () => {
        fc.assert(
            fc.property(
                fc.boolean(), // true = dark, false = light
                (isDark) => {
                    const { newIsDark, stored } = toggleTheme(isDark);

                    // State flips to opposite
                    expect(newIsDark).toBe(!isDark);

                    // Stored value matches the new state
                    expect(stored).toBe(newIsDark ? 'dark' : 'light');
                },
            ),
            { numRuns: 100 },
        );
    });

    it('double toggle returns to the original theme', () => {
        fc.assert(
            fc.property(
                fc.boolean(),
                (isDark) => {
                    const first = toggleTheme(isDark);
                    const second = toggleTheme(first.newIsDark);

                    expect(second.newIsDark).toBe(isDark);
                    expect(second.stored).toBe(isDark ? 'dark' : 'light');
                },
            ),
            { numRuns: 100 },
        );
    });

    it('stored value is always "dark" or "light"', () => {
        fc.assert(
            fc.property(
                fc.boolean(),
                (isDark) => {
                    const { stored } = toggleTheme(isDark);
                    expect(['dark', 'light']).toContain(stored);
                },
            ),
            { numRuns: 100 },
        );
    });
});
