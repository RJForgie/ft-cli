#!/usr/bin/env node

const axios = require("axios")
const { argv } = require('yargs')
const { parseUserInput } = require('./parseUserInput')
const { logHeadlines } = require('./logHeadlines')

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



