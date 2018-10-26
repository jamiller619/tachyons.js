# tachyons.js
Tachyons helper function for JavaScript. Built with PostCSS Modules.

## Example
```javascript
import tachyons from 'tachyons.js'

const app = <div id="app" classNames={tachyons('pa3 center sans-serif')} />
```
and in your a css file:
```css
// If you're NOT using a bundler, prefix the following with "node_modules/"
@import "tachyons.js/tachyons.css";
```

## Install
You can install by cloning this repo and building from source, or: `yarn add tachyons.js` or `npm i --save-dev tachyons.js`

### Build
Running `yarn build` creates three files in the dist folder:
* tachyons.js - The helper file to import into your files
* tachyons.css - The CSS your site/app needs to include
* tachyons.css.json - The file imported into the helper file

