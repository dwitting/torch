navigator.mediaDevices.getUserMedia({
  video: {
    facingMode: 'environment',
  }
})
.then((stream) => {
  const video = document.querySelector('video');
  video.srcObject = stream;
})
.catch(err => console.error('getUserMedia() failed: ', err));
