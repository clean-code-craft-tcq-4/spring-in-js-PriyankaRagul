module.exports=function getStatistics(numbers){
    
    //implement the computation of statistics here
    const arrMin = Math.min(...numbers);
   	const arrMax = Math.max(...numbers);
	const arrAvg = numbers.reduce((a,b) => a + b, 0) / numbers.length;
    let output ={"min":arrMin,"max":arrMax,"average":arrAvg}
    return output;
}
module.exports=class EmailAlert {
	constructor(){
		this.emailSent=false
	}
}

module.exports=class LEDAlert {
	constructor(){
		this.ledGlows=false
	}
}

module.exports=class StatsAlerter {
  constructor(maxThreshold, alerters) {
    this.maxThreshold=maxThreshold;
	this.emailAlert=alerters[0];
	this.ledAlert=alerters[1];
  }
  checkAndAlert(numbers) {
    const arrMax = Math.max(...numbers);
    		if (arrMax > this.maxThreshold) {
		  this.emailAlert.emailSent = true;
		  this.ledAlert.ledGlows = true;
		}
  }
}

