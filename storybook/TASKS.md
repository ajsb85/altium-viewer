# Storybook Guide

Whether you're just getting started or looking for ways to level up, this checklist will help you make the most of your Storybook.

-----

## Storybook Basics

- [ ] **Render your first component**
    Storybook renders your components in isolation, using stories. That allows you to work on the bit of UI you need, without worrying about the rest of the app.

    Stories are written in CSF. Here's an example:

    ```typescript
    // Button.stories.ts
    // Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
    import type { Meta, StoryObj } from '@storybook/your-framework';
    import { Button } from './Button';
     
    const meta = {
      // 👇 The component you're working on
      component: Button,
    } satisfies Meta<typeof Button>;
     
    export default meta;
    // 👇 Type helper to reduce boilerplate 
    type Story = StoryObj<typeof meta>;

    // 👇 A story named Primary that renders `<Button primary label="Button" />`
    export const Primary: Story = {
      args: {
        primary: true,
        label: 'Button',
      },
    };
    ```

    [Learn more about stories](https://www.google.com/search?q=https://storybook.js.org/docs/writing-stories/%3Frenderer%3Dvue%26ref%3Dguide)

- [ ] **Add 5 components**
    Storybook gets better as you add more components. Start with the easy ones, like Button or Avatar, and work your way up to more complex components, like Select, Autocomplete, or even full pages.

- [ ] **Add 20 stories**
    More stories for your components means better documentation and more test coverage.

- [ ] **See what's new**

-----

## Development

- [ ] **Change a story with Controls**
    When you change the value of one of the inputs in the Controls table, the story automatically updates to reflect that change.

  - [Controls documentation](https://www.google.com/search?q=https://storybook.js.org/docs/essentials/controls/%3Frenderer%3Dvue%26ref%3Dguide)

- [ ] **Check responsiveness with Viewports**
    Storybook has built-in support for previewing stories in various device sizes.

  - [Viewports documentation](https://www.google.com/search?q=https://storybook.js.org/docs/essentials/viewport/%3Frenderer%3Dvue%26ref%3Dguide)

- [ ] **Group your components**
    Organize your sidebar into groups (e.g., Atomic Design or by domain).

    ```typescript
    // Button.stories.js
    export default {
      component: Button,
      // title: 'Button', // You may not have this
      title: 'Atoms/Button', // 👈 Change to this
    }
    ```

-----

## Testing

- [ ] **Test your components**
    Stories make great test cases. You can quickly test all of your stories directly from the test widget at the bottom of the sidebar.

- [ ] **Test functionality with interactions**
    When you need to test non-visual or particularly complex behavior of a component, add a `play` function.

    ```typescript
    // Button.stories.ts
    import type { Meta, StoryObj } from '@storybook/your-framework';
    import { expect, fn } from 'storybook/test';
    import { Button } from './Button';
     
    const meta = {
      component: Button,
      args: {
        // 👇 Provide a mock function to spy on
        onClick: fn(),
      },
    } satisfies Meta<typeof Button>;
     
    export default meta;
    type Story = StoryObj<typeof meta>;

    export const Disabled: Story = {
      args: {
        disabled: true,
        label: 'Button',
      },
      play: async function({ args, canvas, userEvent }) {
        const button = canvas.getByRole('button', { name: /button/i });
        
        // 👇 Simulate behavior
        await userEvent.click(button);
        
        // 👇 Make assertions
        await expect(button).toBeDisabled();
        await expect(args.onClick).not.toHaveBeenCalled();
      }
    };
    ```

- [ ] **Install Accessibility addon**
    Run this command to install and set it up:

    ```bash
    npx storybook add @storybook/addon-a11y
    ```

    *(Restart your Storybook after installing)*

- [ ] **Run accessibility tests**
    Expand the test widget, check the Accessibility checkbox, and click the "Run component tests" button.

- [ ] **Install Visual Tests addon**
    Run this command to install and set it up (requires a free Chromatic account):

    ```bash
    npx storybook add @chromatic-com/storybook
    ```

- [ ] **Run visual tests**
    Expand the test widget and click the "Run visual tests" button.

- [ ] **Generate a coverage report**
    Expand the test widget in the sidebar and check the Coverage checkbox to see which code is (and isn't) executed.

- [ ] **Automate tests in CI**
    Automate tests by using Chromatic or by running `vitest --project storybook` in your CI scripts.

-----

## Document

- [ ] **Automatically document your components**
    Add the `autodocs` tag to a component's meta to generate documentation.

    ```typescript
    // Button.stories.js
    const meta = {
      component: Button,
      tags: ['autodocs'], // 👈 Add this tag
    }
      
    export default meta;
    ```

- [ ] **Custom content with MDX**
    Create an `introduction.mdx` file to provide an intro or documentation using markdown and Storybook's doc blocks.

    ````jsx
    { /* introduction.mdx */ }
    import { Meta, Title, Subtitle, Description } from '@storybook/addon-docs/blocks';

    <Meta title="Get started" />
     
    <Title>Get started with My Awesome Project</Title>

    <Subtitle>It's really awesome</Subtitle>

    <Description>
      My Awesome Project is designed to work with Your Awesome Project seamlessly.
      Follow this guide and you'll be ready in no time.
    </Description>

    ## Install

    ```sh
    npm install @my/awesome-project
    ````

- [ ] **Publish your Storybook to share**
    Run `npx storybook build` in CI and deploy it using services like Chromatic, Vercel, or Netlify.
