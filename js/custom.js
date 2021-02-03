var tags = [
  "git config --global user.name “Your name”",
  "git config --global user.email “Your email”",
  "git config --list",
  "git clone",
  "git init",
  "git add .",
  "git commit -m 'update'",
  "git push origin master",
  "git log",
  "git checkout -b “nome-da-branch”",
  "git branch",
  "git fetch"
]

$(document).ready(function(){
  setTimeout(backspaceTagContent, 1000);
});

function changeTagContent() {
  backspaceTagContent();
}

function backspaceTagContent() {
  $('#tag-content').html($('#tag-content').html().slice(0,-1));
  if ($('#tag-content').html().length) {
    setTimeout(backspaceTagContent, 50);
  } else {
    setTimeout(function() { insertTagContent(getRandomTag()); }, 100);
  }
}

function insertTagContent(tag) {
  $('#tag-content').html(tag.substring(0, $('#tag-content').html().length + 1));
  if ($('#tag-content').html().length != tag.length) {
    setTimeout(function() { insertTagContent(tag); }, 100);
  } else {
    setTimeout(changeTagContent, 5000);
  }
}

function getRandomTag() {
  return tags[Math.floor(Math.random() * tags.length)];
  
}