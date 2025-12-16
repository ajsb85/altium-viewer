import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AfsButton from './AfsButton.vue';
import AfsInput from './AfsInput.vue';
import AfsText from './AfsText.vue';

const meta: Meta = {
  title: 'Verification/ThemeTest',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const SideBySide: Story = {
  render: () => ({
    components: { AfsButton, AfsInput, AfsText },
    template: `
      <div style="display: flex; height: 100vh;">
        <!-- Dark Theme (Default) -->
        <div class="storybook-wrapper is-dark-theme" style="flex: 1; padding: 20px; background: #1c1c1e; display: flex; flex-direction: column; gap: 16px;">
          <h2 style="color: #fff; margin-bottom: 20px;">Dark Theme</h2>
          <AfsText type="large title">Large Title</AfsText>
          <div style="display: flex; gap: 8px;">
            <AfsButton variant="primary">Primary</AfsButton>
            <AfsButton variant="secondary">Secondary</AfsButton>
            <AfsButton variant="danger">Danger</AfsButton>
          </div>
          <AfsInput label="Input Label" placeholder="Placeholder text" />
          <div style="padding: 16px; background: var(--afs-panel); border-radius: 8px;">
            <AfsText type="paragraph">Panel content background test</AfsText>
          </div>
        </div>

        <!-- Light Theme (Simulated) -->
        <div class="storybook-wrapper is-light-theme" style="flex: 1; padding: 20px; background: #f5f5f5; display: flex; flex-direction: column; gap: 16px;">
          <h2 style="color: #333; margin-bottom: 20px;">Light Theme</h2>
          <AfsText type="large title">Large Title</AfsText>
          <div style="display: flex; gap: 8px;">
            <AfsButton variant="primary">Primary</AfsButton>
            <AfsButton variant="secondary">Secondary</AfsButton>
            <AfsButton variant="danger">Danger</AfsButton>
          </div>
          <AfsInput label="Input Label" placeholder="Placeholder text" />
          <div style="padding: 16px; background: var(--afs-panel); border-radius: 8px;">
            <AfsText type="paragraph">Panel content background test</AfsText>
          </div>
        </div>
      </div>
    `,
  }),
};
