# tachyons.js
Easily add [tachyons](https://tachyons.io) to your project when using a bundler. Built with [PostCSS](https://postcss.org) & [PostCSS Modules](https://github.com/css-modules/postcss-modules).

## Example
```javascript
import tachyons from 'tachyons.js'

const app = <div id="app" classNames={tachyons('pa3 center sans-serif')} />
```
and in your a css file:
```css
@import "tachyons.js/tachyons.css";
```

## More info
The three main files:
* tachyons.js - The helper file to use in your import statements.
* tachyons.css - The unmodified tachyons.css file that needs to be included in your site/app.
* tachyons.css.json - The JSON mapping with transformed class names generated by PostCSS Modules.
