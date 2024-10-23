import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/format-bytes";

const meta: Meta = {
  title: "Components/FormatBytes",
  component: "ug-format-bytes",
};

export default meta;

type Story = StoryObj;

export const FormatBytes: Story = {
  render: (args) => {
    return html`The file is <ug-format-bytes value="1000"></ug-format-bytes> in
      size`;
  },
};
