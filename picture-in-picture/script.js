const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//promp to select media stream
async function selectMediaStream() {
  try {
    videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', async () => {
  //disable button
  button.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});

//on load
selectMediaStream();
