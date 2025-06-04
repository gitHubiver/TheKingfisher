function toggleText(button) {
  const item1 = button.closest('.panel-box');
  const panelDescription0 = item1.querySelector('.panel-description0');
  const fullText0 = item1.querySelector('.text-full0');

  if (fullText0.style.display === 'none' || fullText0.style.display === '') {
    fullText0.style.display = 'block';
    panelDescription0.style.display = 'none';
    button.textContent = 'Show Less';
} else {
    fullText0.style.display = 'none';
    panelDescription0.style.display = 'block';
    button.textContent = 'Show More';
}
}

function toggleText1(button) {
  const item2 = button.closest('.panel-box');
  const panelDescription1 = item2.querySelector('.panel-description1');
  const fullText1 = item2.querySelector('.text-full1');

  if (fullText1.style.display === 'none' || fullText1.style.display === '') {
    fullText1.style.display = 'block';
    panelDescription1.style.display = 'none';
    button.textContent = 'Show Less';
} else {
    fullText1.style.display = 'none';
    panelDescription1.style.display = 'block';
    button.textContent = 'Show More';
}
}
function toggleText2(button) {
  const item3 = button.closest('.panel-box');
  const panelDescription2 = item3.querySelector('.panel-description2');
  const fullText2 = item3.querySelector('.text-full2');

  if (fullText2.style.display === 'none' || fullText2.style.display === '') {
    fullText2.style.display = 'block';
    panelDescription2.style.display = 'none';
    button.textContent = 'Show Less';
} else {
    fullText2.style.display = 'none';
    panelDescription2.style.display = 'block';
    button.textContent = 'Show More';
}
}

function changeVideo(videoSrc, title, description) {
  const video = document.getElementById('main-video');
  const videoSource = document.getElementById('video-source');
  const videoDetails = document.getElementById('video-details');

  videoSource.src = videoSrc;
  video.load();
  video.play();

  videoDetails.querySelector('h1').textContent = title;
  videoDetails.querySelector('.video-description p').textContent = description;
}

