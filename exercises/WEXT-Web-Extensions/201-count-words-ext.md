# Count Words Extension

In this exercise, you will build an extension that display the number of words
for each paragraph on the (MDN
Docs)(https://developer.mozilla.org/en-US/docs/Web/JavaScript) pages.

## Step 1: Create the extension

Create a new extension with the following command:

    npx degit gpichot/templates/web-extension count-words-ext

Go in the `count-words-ext` directory and install the dependencies:

    cd count-words-ext
    git init
    yarn install

To run the extension in dev mode, run the following command:

    yarn dev

## Step 2: Create the content scripts

Create a new file `src/content-scripts/count-words.js`.

Modify the `manifest.json` file to add a `content_scripts` entry:

```json
{
  "content_scripts": [
    {
      "matches": ["https://developer.mozilla.org/*"],
      "js": ["content-scripts/count-words.js"]
    }
  ]
}
```

Add a `console.log` in the `count-words.js` file to check that the script is
loaded on MDN pages.

## Step 3: Count the words

In the content script, retrieve all the paragraphs of the page.

Retrieve the text content of each paragraph and count the number of words.

Display the number of words in the paragraph by adding a `span` element with
the number of words.

You can use the following CSS:

```css
span.count-words {
  position: absolute;
  display: inline-block;
  margin-left: -80px;
  font-size: 0.8rem;
  color: #dddddd;
  padding: 0.25rem 0.4rem;
  border-radius: 1rem;
}
```

## Step 5: Save each title seen on the page

In the content script, send to the background script the title of each
paragraph that becomes visible on the screen.

Log the titles in the background script.

## Bonus: Add a button to toggle the display

Add a button to toggle the display of the number of words in a popup.

Replace the words count by the reading time. You can use `reading-time` package
from npm.

## Bonus: Display last read date and time next to the title

Save the last read date and time in the background script for each title.

Display the last read date and time next to the title in the popup.

If the title is not read or is being read for the first time display the eyes
emoji '????'.
