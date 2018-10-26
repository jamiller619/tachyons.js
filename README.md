# tachyons.js
Easily add (https://tachyons.io)[tachyons] to your project when using a bundler. Built with (https://postcss.org)[PostCSS] & (https://github.com/css-modules/postcss-modules)[PostCSS Modules].

## Example
```javascript
import tachyons from 'tachyons.js'

const app = <div id="app" classNames={tachyons('pa3 center sans-serif')} />
```
and in your a css file:
```css
@import "tachyons.js/tachyons.css";
```

## Install
You can install by cloning this repo and building from source, or: `yarn add tachyons.js` or `npm i tachyons.js`

## More info
`yarn build` to build the project from source, grabbing the latest release from tachyons.

The three main files:
* tachyons.js - The helper file to use in your import statements.
* tachyons.css - The unmodified tachyons.css file that needs to be included in your site/app.
* tachyons.css.json - The JSON mapping with transformed class names generated by PostCSS Modules.

