import { ComponentMeta, ComponentStory } from "@storybook/react";
import Image from "next/image";
import React from "react";

export const ImageTest = (): JSX.Element => (
  <Image
    src="http://placekitten.com/g/100/100"
    alt="A sample Next image pointing to the CDN"
    layout="fixed"
    width={100}
    height={100}
  />
);

export default {
  title: "Example/Image",
  component: ImageTest,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ImageTest>;

const Template: ComponentStory<typeof ImageTest> = () => <ImageTest />;

export const Primary = Template.bind({});
