# tachyons.js
Tachyons helper function for JavaScript. Built with PostCSS Modules.

# Example
```javascript
import tachyons from 'tachyons.js'

const app = <div id="app" classNames={tachyons('pa3 center font-serif')} />
```

# More info:
Running `yarn build` creates a dist folder with four files:
* tachyons.js - The helper file to import into your files
* tachyons.min.css - The CSS your site/app needs to include
* tachyons.min.css.json - The file imported into the helper file
* tachyons.min.css.map - The CSS map file for easier debugging

