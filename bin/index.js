#!/usr/bin/env node

const axios = require("axios");
const cheerio = require('cheerio');
const { argv } = require('yargs')

const logHeadline = (headline) => {
  const $ = cheerio.load(headline.html);
  
  $('.js-teaser-heading-link').each(( i, element) => {
    console.log($(element).text())
  })
  
  $(".js-teaser-standfirst-link").each((i, element) => {
    console.log($(element).text());
  });
  
  console.log("-");
}

const args = () => argv.number

const handleResponse = (headlines, numberToOutput) => {
  for(let i = 0; i < numberToOutput; i++) {
    logHeadline(headlines[i])
  }
}

const url = "https://www.ft.com/news-feed/";

axios.get(url, { headers: { Accept: "application/json" } })
.then(response => {
  const numberToOutput = args() 
  console.log("Wall Street Journal headlines:");
  handleResponse(response.data.items, numberToOutput)
  console.log("Full articles available here: https://www.ft.com/news-feed");
 });


