const cheerio = require('cheerio')

const logHeadlines = (headlines) => {
  headlines.forEach(headline => {
    const $ = cheerio.load(headline.html);
    $('.js-teaser-heading-link').each(( i, element) => {
      console.log($(element).text())
    })
    
    $(".js-teaser-standfirst-link").each((i, element) => {
      console.log($(element).text())
    });
    
    console.log("-");
  });
}

exports.logHeadlines = logHeadlines