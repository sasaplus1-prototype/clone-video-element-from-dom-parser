function createVideo() {
  const html = `
    <video
      class="video" controls autoplay muted poster preload="auto" playsinline
      data-foo="foo" data-bar="bar" width="360" height="240"
    >
      <source type="video/mp4" src="SampleVideo_360x240_1mb.mp4">
    </video>
  `;

  const domParser = new DOMParser();

  const doc = domParser.parseFromString(`<div>${html}</div>`, 'text/html');

  return doc.querySelector('video');
}

//------------------------------------------------------------------------------

document.body.appendChild(createVideo());
document.body.appendChild(document.createElement('br'));

//------------------------------------------------------------------------------

const video1 = createVideo();
const videoElement1 = document.createElement('video');

document.body.appendChild(videoElement1);
document.body.appendChild(document.createElement('br'));

// NOTE: outerHTML needs parentElement
videoElement1.outerHTML = video1.outerHTML;

//------------------------------------------------------------------------------

const video2 = createVideo();
const videoElement2 = document.createElement('video');

for (let i = 0, len = video2.attributes.length; i < len; i += 1) {
  // :(
  videoElement2[video2.attributes[i].name] = video2.attributes[i].value;
}

document.body.appendChild(videoElement2);
document.body.appendChild(document.createElement('br'));

//------------------------------------------------------------------------------

const video3 = createVideo();
const videoElement3 = video3.cloneNode(true);

document.body.appendChild(videoElement3);
document.body.appendChild(document.createElement('br'));

//------------------------------------------------------------------------------

const video4 = createVideo();
const videoElement4 = video4.cloneNode(false);

videoElement4.append(...video4.childNodes);

document.body.appendChild(videoElement4);
document.body.appendChild(document.createElement('br'));

//------------------------------------------------------------------------------

const video5 = createVideo();
const videoElement5 = document.createElement('video');

document.body.appendChild(videoElement5);
document.body.appendChild(document.createElement('br'));

videoElement5.insertAdjacentHTML('beforebegin', video5.outerHTML);
videoElement5.remove();

//------------------------------------------------------------------------------

const video6 = createVideo();
const div6 = document.createElement('div');

document.body.appendChild(div6);
document.body.appendChild(document.createElement('br'));

div6.insertAdjacentHTML('beforebegin', video6.outerHTML);
div6.remove();

//------------------------------------------------------------------------------

const videos = document.querySelectorAll('video');

for (let i = 0, len = videos.length; i < len; i += 1) {
  videos[i].insertAdjacentText('beforebegin', `${i}:`);
}
