const request = require('superagent')
const cheerio = require('cheerio')

const fetchPage = async url => {
  const { text } = await request(url)
  return cheerio.load(text)
}

exports.fetchPage = fetchPage