import cheerio  from 'cheerio'

export interface Headline {
  id: string
  publishedDate: string
  html: string
}

export const logHeadlines = (headlines: Headline[]) => {
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
