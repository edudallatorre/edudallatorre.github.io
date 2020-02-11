var tags = [
  "This website aims to show my portfolio and share my knowledge about Design and Programming.",
  "Come be part of this team, through my social networks.",
  "My mission is to add knowledge."
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