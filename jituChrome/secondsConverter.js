//To convert the youtube duration to seconds format
function convertDurationToSeconds(durationString) {
  // Use regular expressions to extract hours, minutes, and seconds
  const hoursMatch = durationString.match(/(\d+)H/);
  const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
  const minutesMatch = durationString.match(/(\d+)M/);
  const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
  const secondsMatch = durationString.match(/(\d+)S/);
  const seconds = secondsMatch ? parseInt(secondsMatch[1]) : 0;
  console.log(hours,minutes,seconds);
  const totalTime= hours*3600 + minutes*60 + seconds;
  return totalTime-1;
}
export {convertDurationToSeconds};
