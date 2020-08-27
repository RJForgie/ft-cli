#!/usr/bin/env node
"use strict"

import axios from "axios"
// Yargs will support import synax in v16
const { argv } = require('yargs')
.usage("--number=[number of headlines up to 25]")

import { parseUserInput } from './parseUserInput'
import { logHeadlines } from './logHeadlines'

const fetchHeadlines = async() => {
  const url = "https://www.ft.com/news-feed/"
  const response = await axios.get(url, { headers: { Accept: "application/json" } })
  const numberToOutput = parseUserInput(argv.number)
  console.log("--Financial Times headlines--")
  const items = response.data.items
  logHeadlines(items.slice(0, numberToOutput))
  console.log("Full articles available here: https://www.ft.com/news-feed")
}

fetchHeadlines()
 



