import type { Meta, StoryObj } from '@storybook/vue3';
import AppMainTabs from './AppMainTabs.vue';

const meta = {
  title: 'Components/AppMainTabs',
  component: AppMainTabs,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
} satisfies Meta<typeof AppMainTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  { id: 'tab1', text: 'Dashboard', icon: 'file-upload-32', isActive: true },
  { id: 'tab2', text: 'Settings', icon: 'settings', isActive: false },
  { id: 'tab3', text: 'Beta Feature', beta: true, isActive: false },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};

export const WithDropdowns: Story = {
    args: {
        items: [
            { id: 'tab1', text: 'Home', isActive: true },
            { 
                id: 'tab2', 
                text: 'Menu', 
                icon: 'menu', 
                displayItems: [
                   { text: 'Sub Item 1', icon: 'check' },
                   { text: 'Sub Item 2' } 
                ]
            }
        ]
    }
}
