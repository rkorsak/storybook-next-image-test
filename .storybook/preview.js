import * as NextImage from "next/image";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

function deoptimizeNextImage() {
  console.log("Patching Next.js Image component...");
  const OriginalNextImage = NextImage.default;

  Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => {
      console.log(
        "Rendering a custom Image component with the unoptimized prop..."
      );
      return <OriginalNextImage {...props} unoptimized />;
    },
  });
}

deoptimizeNextImage();
