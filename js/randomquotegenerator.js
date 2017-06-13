'use strict'

var QuoteGenerator, 
  Randomizer  // TODO: code this

QuoteGenerator = {
  objects: {
    quote: $('#QuoteText'),
    glyph: $('#QuoteGlyph'),
    author: $('#QuoteAuthor'),
    retriever: $('#QuoteRetriver')
  },

  init: function() {
    sr = this.objects
    sr.retriever.on('click', this.getNew)
    this.getNew()
  },

  getNew: function() {
    QuoteGenerator.objects.quote.text('Loading...')
    QuoteGenerator.objects.author.text('')
    QuoteGenerator.objects.glyph.css('visibility', 'hidden')
    $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
      function (data) {
        var q = QuoteGenerator.objects
        q.quote.text(data.quoteText)
        q.author.text('- ' + data.quoteAuthor)
        q.glyph.css('visibility', 'visible')
    })
  }
}

$(function() {
  QuoteGenerator.init()
})