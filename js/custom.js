var tags = [
  "I'm very motivated, and love doing what I do.",
  "I'm a team player. I'm happy to collaborate with other people on projects.",
  "I'm very conscientious. I take care to make sure I do a good job."
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