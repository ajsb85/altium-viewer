import type { TestRunnerConfig } from '@storybook/test-runner';

/**
 * Storybook Test Runner Configuration
 * 
 * Uses Playwright to run interaction tests on stories.
 * Runs play functions and validates assertions.
 * 
 * @see https://storybook.js.org/docs/writing-tests/test-runner
 */
const config: TestRunnerConfig = {
  // Run tests with custom timeout
  testTimeout: 15000,
};

export default config;
