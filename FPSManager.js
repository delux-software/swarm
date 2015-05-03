// ================================================================================ FPS Manager class
var FPSManager = function() {
	this.currentTime = 0;
	this.historyLength = 100;
	this.currentFPS = -1;
	this.timeArr = [];
	this.timesUpdated = 0;
	this.init();
}
// ================================================================================ init()
FPSManager.prototype.init = function() {
	this.timesUpdated = 0;
	// init array timeArr
	for( var i = 0; i < this.historyLength; i++ ) {
		this.timeArr.push( 0 );
	}
};
// ================================================================================ update()
FPSManager.prototype.update = function() {
	this.timesUpdated++;
	for( var i = this.historyLength - 1; i > 0; i-- ) { // update history backwards
		this.timeArr[ i ] = this.timeArr[ i - 1 ];
	}
	this.currentTime = this.now();                    // update current time
	this.timeArr[ 0 ] = this.currentTime;
	// ------------------------------------------ calculate FPS
	if( this.timesUpdated >= this.historyLength ) {
		var tmpThen = this.timeArr[ this.historyLength - 1 ];
		var tmpNow = this.timeArr[ 0 ];
		var tmpSteps = this.historyLength;
		var tmpDiff = tmpNow - tmpThen;     // difference in ms
		this.currentFPS = Math.round( tmpSteps / tmpDiff * 1000 );
		if( this.currentFPS >= 59 && this.currentFPS <= 61 ) {
			this.currentFPS = 60;
		}
	}
	else {
		this.currentFPS = -1;
	}
};
// ================================================================================ now() - return unix timestamp in milliseconds
FPSManager.prototype.now = function() {
	return Date.now();
}