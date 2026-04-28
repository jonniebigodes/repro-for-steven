import type { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)"],
  // Required for Chromatic
  //addons: [],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
  // To follow up with the team about this feature
  /* features: {
    ondeviceBackgrounds: true,
  }, */
};

export default main;
