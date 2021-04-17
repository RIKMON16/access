let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

let sharePhoto = function(event) {
    event.target.style.display = 'none';
    event.timestamp.text.innerHTML = 'time';
}

share.addEventListener('click', sharePhoto);