import {convertDurationToSeconds} from './secondsConverter.js';
const apiKey="AIzaSyD3FAxxj7ooCK1zsZELyOGzfg1-ROu-khM";
chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
  var videoURL= tabs[0].url;
  if(videoURL.includes("youtube")){
    document.getElementById("this").innerHTML = "Hey this is a youtube Page";
    var splited = videoURL.split("v=");
    var splitedAgain = (splited[1].split("&"));
    var videoId = splitedAgain[0]; 
    console.log(videoId);
  }
  else{
    document.getElementById("this").innerHTML = "this is not a youtubePage";
  }
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=contentDetails`;
    const durationvideo = await calling(apiUrl);
    console.log("duration from second function :"+durationvideo);
    console.log("after converting to seconds "+ convertDurationToSeconds(durationvideo));
    document.getElementById("duration").innerHTML="duration of this vide is "+convertDurationToSeconds(durationvideo)+" seconds";
});

const calling = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const duration = data.items[0].contentDetails.duration;
    console.log('Video Duration:', duration);
    return duration;
  } catch (error) {
    console.error('Error:', error);
    return null; // Handle the error or return a default value
  }
}