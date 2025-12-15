import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import CommentPanel from './CommentPanel.vue';

/**
 * CommentPanel - Side Panel Component
 * 
 * Slide-out panel with header, content placeholder, and feedback link.
 * Production HTML from panel.html
 */
const meta: Meta<typeof CommentPanel> = {
  title: 'Views/CommentPanel',
  component: CommentPanel,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Panel title',
      control: 'text',
    },
    width: {
      description: 'Panel width in pixels',
      control: { type: 'range', min: 200, max: 400, step: 10 },
    },
    showPlaceholder: {
      description: 'Show empty state placeholder',
      control: 'boolean',
    },
    placeholderText: {
      description: 'Placeholder description text',
      control: 'text',
    },
    actionText: {
      description: 'Action button text',
      control: 'text',
    },
    feedbackUrl: {
      description: 'Feedback link URL',
      control: 'text',
    },
  },
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Side panel component used for comments, matching the production Altium viewer.',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="position: relative; height: 500px; background: #2c2c2e; display: flex; justify-content: flex-end;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default empty comment panel
 */
export const Default: Story = {
  args: {
    title: 'Comments',
    width: 240,
    showPlaceholder: true,
    placeholderText: 'Ask a question, leave a note, assign a task to a teammate, or just draw.',
    actionText: 'Place a Comment',
    feedbackUrl: 'https://surveys.hotjar.com/56ae1381-3d9d-4461-8247-805f7849930a',
  },
};

/**
 * Wide panel
 */
export const WidePanel: Story = {
  args: {
    ...Default.args,
    width: 320,
  },
};

/**
 * Custom title
 */
export const CustomTitle: Story = {
  args: {
    ...Default.args,
    title: 'Design Review',
    placeholderText: 'No review comments yet. Start the conversation by adding a comment.',
    actionText: 'Add Review Comment',
  },
};

/**
 * Without feedback link
 */
export const NoFeedback: Story = {
  args: {
    ...Default.args,
    feedbackUrl: '',
  },
};

/**
 * Notes panel variant
 */
export const NotesPanel: Story = {
  args: {
    title: 'Notes',
    width: 280,
    showPlaceholder: true,
    placeholderText: 'Add notes and annotations to document your design decisions.',
    actionText: 'Add Note',
    feedbackUrl: '',
  },
};

/**
 * Tasks panel variant
 */
export const TasksPanel: Story = {
  args: {
    title: 'Tasks',
    width: 260,
    showPlaceholder: true,
    placeholderText: 'No tasks assigned. Create a task to track work items.',
    actionText: 'Create Task',
    feedbackUrl: '',
  },
};

/**
 * Interactive close demo
 */
export const InteractiveClose: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Hover over close button', async () => {
      const closeBtn = canvasElement.querySelector('.lib-modal__close') as HTMLElement;
      if (closeBtn) {
        await userEvent.hover(closeBtn);
        await new Promise(r => setTimeout(r, 300));
      }
    });

    await step('Hover over action button', async () => {
      const actionBtn = canvas.getByText('Place a Comment');
      await userEvent.hover(actionBtn);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Hover over feedback link', async () => {
      const feedbackLink = canvas.getByText('Leave Feedback');
      await userEvent.hover(feedbackLink);
      await new Promise(r => setTimeout(r, 300));
    });
  },
};

/**
 * With content (custom slot)
 */
export const WithContent: Story = {
  args: {
    title: 'Comments',
    width: 280,
    showPlaceholder: false,
    feedbackUrl: 'https://example.com',
  },
  render: (args) => ({
    components: { CommentPanel },
    setup() { return { args }; },
    template: `
      <CommentPanel v-bind="args">
        <div style="padding: 16px; display: flex; flex-direction: column; gap: 12px;">
          <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px;">
            <div style="font-size: 12px; font-weight: 500; margin-bottom: 4px;">John Doe</div>
            <div style="font-size: 11px; color: rgba(255,255,255,0.6);">Can we review the silkscreen placement here?</div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 8px;">2 hours ago</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px;">
            <div style="font-size: 12px; font-weight: 500; margin-bottom: 4px;">Jane Smith</div>
            <div style="font-size: 11px; color: rgba(255,255,255,0.6);">Looks good! Approved.</div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 8px;">1 hour ago</div>
          </div>
        </div>
      </CommentPanel>
    `,
  }),
};

/**
 * Multiple panels context
 */
export const MultiplePanels: Story = {
  decorators: [
    () => ({
      template: `
        <div style="position: relative; height: 500px; background: #2c2c2e; display: flex; justify-content: flex-end; gap: 0;">
          <story />
        </div>
      `,
    }),
  ],
  render: () => ({
    components: { CommentPanel },
    template: `
      <div style="display: flex; height: 100%;">
        <CommentPanel 
          title="Layers" 
          :width="200" 
          placeholder-text="No layers visible"
          action-text="Show Layers"
          feedback-url=""
        />
      </div>
    `,
  }),
};
