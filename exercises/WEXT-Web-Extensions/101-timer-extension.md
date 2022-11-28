# Timer Extension

In this exercise, you will build an extension that display the current time in
an extension popup.

The extension will also offer the possibility to change the text color in an
options page.

## Step 1: Create the extension

Create a new extension with the following command:

    npx degit gpichot/templates/web-extension my-timer-ext

Go in the `my-timer-ext` directory and install the dependencies:

    cd my-timer-ext
    git init
    yarn install

To run the extension in dev mode, run the following command:

    yarn dev

## Step 2: Create the popup

Check the `manifest.json` file and ensure that you have a popup entry.

Edit the correct file to display the current time in the popup using the DOM.

Ensure that the popup updates the show time every second.

## Step 3: Create the options page

Check the `manifest.json` file and ensure that you have an options entry.

Edit the correct file to display a color picker in the options page. You can
use for this the `input` element with the `type` attribute set to `color`.

When the user changes the color, the popup should update the color of the time.

## Step 4: Migrate the application to TypeScript

Migrate the application to TypeScript. :)

## Bonuses

1. Change your code to use the `webextension-polyfill` and use a promised version
   of the API.

2. Add a badge with the text ON. Add an option to change the color of the
   badge. This time use the `input` event to change the background color.
