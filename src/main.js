function newPost() {
  document.getElementById("postEditor").style.display = "block";
  document.getElementById("sampleText").style.display = "block";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("postEditor")) {
    document.getElementById("postEditor").style.display = "none";
  }
}

var box = document.getElementById("textthing");

var edit = function(cmd) {
  var val = false;
  switch (cmd) {
    case 'formatBlock': val = 'blockquote'; break;
    case 'createLink': val = prompt('Enter URL:'); break;
    case 'insertImage': val = prompt('Enter the image URL:'); break;
    case 'H1': cmd = 'formatBlock'; val = 'H1'; break;
    case 'H2': cmd = 'formatBlock'; val = 'H2'; break;
    case 'H3': cmd = 'formatBlock'; val = 'H3'; break;
  }
  
  document.execCommand(cmd, false, val);
  box.focus();
}

$('.style-btn').on('click', function() {
  edit($(this).data('cmd'));
});

$('input.disabled').on('click', function() {
  alert('This hasn\'t been hooked up yet.');
});

var view_source = true;
$('a').on('click', function(e) {
  e.preventDefault();
  if (view_source) {
    view_source = false;
    var contents = box.html();
    box.empty();
    box.append('<textarea></textarea>');
    box.find('textarea').val(contents);
  } else {
    view_source = true;
    var contents = box.find('textarea').val();
    box.empty();
    box.html(contents);
  }
});
