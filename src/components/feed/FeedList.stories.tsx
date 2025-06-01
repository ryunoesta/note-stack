import type { Meta, StoryObj } from "@storybook/react";
import { FeedList } from "./FeedList";

const meta: Meta<typeof FeedList> = {
  title: "Feed/FeedList",
  component: FeedList,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FeedList />,
};
