feedUrl = 'https://news.un.org/feed/subscribe/en/news/region/africa/feed/rss.xml'

fetch(feedUrl).then((res) => {
  res.text().then((xmlTxt) => {
    
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')
    doc.querySelectorAll('item').forEach((item) => {

      let h1 = document.createElement('h1')
      h1.textContent = item.querySelector('title').textContent
      document.querySelector('output').appendChild(h1)

      let p = document.createElement('p')
      p.textContent = item.querySelector('description').textContent
      document.querySelector('output').appendChild(p)
    })
  })
})

setTimeout(function() {

  function pageScroll() {

    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,22);
  }
  pageScroll();
}, 7000);