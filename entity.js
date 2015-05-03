// ================================================================================ FPS Manager class
var entity = function(tmpSwarm) {
	this.globalId = (++entityId);
	this.swarmId = tmpSwarm.id;
	this.id = tmpSwarm.entityId;

	this.fx = 0.0;    // float coordinates
	this.fy = 0.0;
	this.vx = 0.0;    // float velocities
	this.vy = 0.0;
	this.x = 0;       // int coordinates for drawing
	this.y = 0;
	this.gx = 0;      // grid position
	this.gy = 0;

	this.dead = false;
	this.tooClose = false;
	this.tooFar = false;
};

entity.prototype.draw = function() {
	cx2.fillStyle = rgb( 0,255,0 );
	if( this.tooClose === true) {
		cx2.fillStyle = rgb( 255,0,0 );
	}
	if( this.tooFar === true) {
		cx2.fillStyle = rgb( 0,0,255 );
	}

	cx2.fillRect( this.x - 2, this.y - 2, 4,4 );
	cx2.strokeStyle = rgb(255,255,255);
	//cx2.strokeText( this.x+","+this.y, this.x, this.y );
	//cx2.strokeText( this.id, this.x, this.y );
};