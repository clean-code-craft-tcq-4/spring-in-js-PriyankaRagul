module.exports=function getStatistics(numbers){
    
    //implement the computation of statistics here
    const arrMin = Math.min(...numbers);
   	const arrMax = Math.max(...numbers);
	const arrAvg = numbers.reduce((a,b) => a + b, 0) / numbers.length;
    let output ={"min":arrMin,"max":arrMax,"average":arrAvg}
    return output;
}

module.exports=function EmailAlert(){
	this.emailSent=false;
	return this.emailSent;
}


module.exports=function LEDAlert(){
	this.ledGlows=false
	return this.ledGlows;
}
