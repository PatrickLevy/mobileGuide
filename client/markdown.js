markdownajax = function () {
  $('code').each(function(i, block) {
    if(block.textContent.substring(0,8) == 'snippet-') {
      var filename = block.textContent.substr(0,block.textContent.indexOf('\n')) + '.txt';
      $.ajax({
        url: filename,
        success: function (data) {
          $('code.'+block.classList[0]).text(data);
          hljs.highlightBlock(block);
        }
      });
    } else {
      hljs.highlightBlock(block);
    }
  });
}