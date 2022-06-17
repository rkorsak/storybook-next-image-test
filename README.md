This is an attempt to get the Next.js `Image` component using the latest versions of Next, Storybook, and React.

As of right now, the [usual approach](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/) to patching the `Image` component in Storybook isn't actually working.

To see this in action:

1. Install dependencies with `yarn`:
    ```bash
    $ yarn
    ```
2. Run Storybook:
    ```bash
    $ yarn storybook
    ```
3. This should open a browser tab with Storybook. Navigate to `http://localhost:6006/?path=/story/example-image--primary` and see that we get an error with the Image. If the override in `.storybook/preview.js` worked, we wouldn't expect to see an error.
