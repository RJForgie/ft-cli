#!/usr/bin/env node
"use strict"

const axios = require("axios")
import { parseUserInput } from './parseUserInput'
const { logHeadlines } = require('./logHeadlines')
const { argv } = require('yargs')
  .usage("-number=[number of headlines up to 25]")

const handleResponse = (headlines, numberToOutput) => {
  let headlinesArray = []
  for(let i = 0; i < numberToOutput; i++) {
    headlinesArray.push(headlines[i])
  }
  return headlinesArray
}

const url = "https://www.ft.com/news-feed/"
axios.get(url, { headers: { Accept: "application/json" } })
  .then(response => {
    const numberToOutput = parseUserInput(argv.number)
    console.log("--Financial Times headlines--")
    const headlines = handleResponse(response.data.items, numberToOutput)
    logHeadlines(headlines)
    console.log("Full articles available here: https://www.ft.com/news-feed")
  }
);  



