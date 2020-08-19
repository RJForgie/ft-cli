#!/usr/bin/env node

const axios = require("axios");
const cheerio = require('cheerio');


console.log("Wall Street Jounral headlines:");

const url = "https://www.ft.com/news-feed/";

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

const handleResponse = (headlines) => {
  headlines.forEach(headline => {
    logHeadline(headline)
  });
}

axios.get(url, { headers: { Accept: "application/json" } })
 .then(response => {
  handleResponse(response.data.items)
 });


