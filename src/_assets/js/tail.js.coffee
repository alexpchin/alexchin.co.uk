$(document).foundation()

disqus_shortname = "alexchin"
(->
  dsq = document.createElement("script")
  dsq.type = "text/javascript"
  dsq.async = true
  dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js"
  (document.getElementsByTagName("head")[0] or document.getElementsByTagName("body")[0]).appendChild dsq
  return
)()

$ ->
  $("#search-query").lunrSearch
    indexUrl: "/search.json"
    results: "#search-results"
    entries: ".entries"
    template: "#search-results-template"