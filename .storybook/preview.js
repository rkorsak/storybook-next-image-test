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

function unoptimizeNextImage() {
  console.log(
    "Patching Next.js Image component...",
    Object.getOwnPropertyDescriptor(NextImage, "default")
  );

  const OriginalNextImage = NextImage.default;
  const UnoptimizedNextImage = (props) => {
    console.log(
      "Rendering a custom Image component with the unoptimized prop..."
    );

    return <OriginalNextImage {...props} unoptimized />;
  };

  Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: () => UnoptimizedNextImage,
  });

  console.log(
    "Image module descriptor after patching",
    Object.getOwnPropertyDescriptor(NextImage, "default")
  );

  console.log("Image module default after patching", {
    Image: NextImage.default,
  });
}

unoptimizeNextImage();
