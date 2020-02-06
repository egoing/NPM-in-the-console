# NPM in the console 
NPM in the console makes the npm package available in the browser's developer tools console. This is made as a bookmarklet.

## How to use

1. Register the contents of the [/dist/index.bookmarklets](https://raw.githubusercontent.com/egoing/NPM-in-the-console/master/dist/index.bookmarklet) file as the address of the bookmark.
2. Launch the console.
3. Click Bookmarks in NPM in the console.
4. Enter the desired NPM package.
5. Use when finished loading.

## Compile method
1. Run the command below. (nodejs must be installed)
```npx bookmarklet src/index.js dist/index.js```
2. Use the bookmarklet file in dist/index.js.