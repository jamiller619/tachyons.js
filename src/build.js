#!/usr/bin/env node

const fs = require('fs')
const postcss = require('postcss')
const modules = require('postcss-modules')

const filename = 'tachyons.min.css'
const src = `node_modules/tachyons/css/${filename}`
const dest = `dist/${filename}`

fs.readFile(src, (err, css) => {
  if (err) {
    return console.log(err)
  }

  postcss([modules({
    getJSON: (cssFilename, json, outputFilename) => {
      const jsonFileName = `${dest}.json`
      
      fs.writeFile(jsonFileName, JSON.stringify(json))
    }
  })])
    .process(css, { from: src, to: dest, map: { inline: false }})
    .then(result => {
      fs.writeFile(dest, result.css, () => true)
      if (result.map) {
        fs.writeFile(`${dest}.map`, result.map, () => true)
      }
    })
})
