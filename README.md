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
You can install by cloning this repo and building from source, or: `yarn add tachyons.js` or `npm i tachyons.js`

## More info
`yarn build` will create three files in the dist folder:
* tachyons.js - The helper file to use in your import statements.
* tachyons.css - The unmodified tachyons.css file that needs to be included in your site/app.
* tachyons.css.json - The JSON mapping with transformed class names generated by PostCSS Modules.

