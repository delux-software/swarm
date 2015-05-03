// ================================================================================ grid class
var grid = function() {
	this.x = 0;
	this.y = 0;
	this.size = 0;
	this.entities = [];
	this.bounds = 2;    // make the grid bigger than the screen by 2 - avoids using non-existing grids
};
// ------------------------------------------ init()
grid.prototype.init = function( tsize ) {
	this.size = tsize;

	this.x = Math.ceil( scX / tsize ) + this.bounds;      // calculate grid bounds; make it bigger than the screen to avoid null reference errors
	this.y = Math.ceil( scY / tsize ) + this.bounds;

	for( var tx = -this.bounds; tx < this.x; tx++ ) {     // init grid entity container array (3d array)
		this.entities[ tx ] = [];
		for( var ty = -this.bounds; ty < this.y; ty++ ) {
			this.entities[ tx ][ ty ] = [];
		}
	}
};
// ------------------------------------------ clear()
grid.prototype.clear = function() {
	for( var tx = 0; tx < this.x; tx++ ) {
		for( var ty = 0; ty < this.y; ty++ ) {
			this.entities[ tx ][ ty ].length = 0;
		}
	}
};
// ------------------------------------------ draw()
grid.prototype.draw = function() {
	for( var tx = 0; tx < this.x; tx++ ) {
		for( var ty = 0; ty < this.y; ty++ ) {

			// get entities in this part of the grid and calculate the color of the grid
			var ta = this.entities[ tx ][ ty ].length;
			if( ta === 0 ) {
				cx2.strokeStyle = rgb( 50, 50, 50 );
				cx2.strokeRect( tx * this.size, ty * this.size, this.size - 2, this.size - 2 );
			}
			else if( ta >= 0 ) {

				var tcolmax = 10; // with 10 entities in this grid the maximum display color is achieved, having 37 in there looks like having 10 in there
				ta = ta - 1;
				if( ta > tcolmax ) {
					ta = tcolmax;
				}
				cx2.strokeStyle = rgb( 50 + ta * 20, 150, 50 );
				cx2.lineWidth = 1;
				cx2.strokeRect( tx * this.size, ty * this.size, this.size - 2, this.size - 2 );
			}

			//cx2.strokeStyle = rgb( 180, 180, 180 );
			//cx2.strokeText( (ta+1), tx * this.size + 10, ty * this.size + 20 );
		}
	}
};
