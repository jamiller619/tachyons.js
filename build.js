const fs = require('fs')
const postcss = require('postcss')
const modules = require('postcss-modules')

const filename = 'tachyons.css'
const src = `node_modules/tachyons/css/${filename}`
const dest = `dist/${filename}`

fs.readFile(src, (err, css) => {
  console.log('working...\n')
  if (err) {
    return console.log(err)
  }

  postcss([
    modules({
      getJSON: (cssFilename, json, outputFilename) => {
        const jsonFileName = `${dest}.json`
        fs.writeFile(jsonFileName, JSON.stringify(json), (err) => {
          if (err) throw err
        })
      },
    }),
  ])
    .process(css, { from: src, to: dest })
    .then((result) => {
      fs.writeFile(dest, result.css, (err) => {
        if (err) throw err
        console.log('done!\n')
      })
    })
    .catch((err) => console.log(err))
})
