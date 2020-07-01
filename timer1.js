const alarmSettings = process.argv.slice(2);

// Alarm rings at given intervals - must pass numbers with node command
const beepAlarm = function (beepAt) {
  //sorts intervals from smallest to largest
  let beep = beepAt.sort(function(a, b){return a-b});
  //removes any negative values entered
  beep = beep.filter(val => val > 0);
  for (let i = 0 ; i < beep.length; i++) {
    setTimeout(() => {
      // console.log(beep[i]); // display the number with the corresponding beep
      
      //beeps at given intervals in seconds
      process.stdout.write('\x07');
    }, beep[i] * 1000);
    
  }
}
beepAlarm(alarmSettings);