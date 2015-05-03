var cv1, cx1, cv2, cx2, scX, scY;     // canvas 1, buffer 1, canvas 2, buffer 2, screen width, screen height
var updatesPerCycle = 1;              // increase for multiple calculation rounds per draw round
var FPSManagerDraw, FPSManagerUpdate; // 2 managers to calculate drawing frames per second and calculation rounds per second
var swarmId = 0, entityId = 0;
var swarm1;
var gridSize = 100;
var grid = null;
// ================================================================================ init() - game init - call this to restart everything
function init() {
	initCanvas();                         // init the canvas 1 & 2 for double buffering (gameHelper.js)
	FPSManagerDraw = new FPSManager();    // fps calculator for draws per second
	FPSManagerUpdate = new FPSManager();  // fps calculator for updates per second
	grid = new grid();                    // init new grid
	grid.init(gridSize);
	setTimeout( loop, 100 );              // give the game 0,1 sec to load: reduces flickering at start
	swarmId = 0;
	entityId = 0;

	// ------------------------------------------ spawn some fish
	swarm1 = new swarm();
	var spawn = 10;
	var dist = 500 / spawn;

	for ( var i = 0; i < spawn; i++) {
		for ( var j = 0; j < spawn; j++) {
			swarm1.add(50+i*dist,50+j*dist);
		}
	}


}
// ================================================================================ loop() - handles the game loop
function loop() {
	for( var i = 0; i < updatesPerCycle; i++ ) { update(); }    // update x times before drawing
	draw();                                                     // then draw
}
// ================================================================================ update() - main game loop
function update() {

	// end of update
	FPSManagerUpdate.update();
	grid.clear();
	swarm1.update();
}
// ================================================================================ draw() - draw
function draw() {
	// draw blackground
	cx2.fillStyle = rgb( 0, 0, 0 );
	cx2.fillRect( 0, 0, scX, scY );

	// draw grid
	grid.draw();

	// draw swarm
	swarm1.draw();

	// end of draw
	cx1.drawImage( cv2, 0, 0 );     // draw backbuffer to frontbuffer
	FPSManagerDraw.update();        // calculate frames per second
	document.getElementById( "fpsviewer" ).innerHTML = "(" + FPSManagerUpdate.currentFPS.toString() + ") " + FPSManagerDraw.currentFPS.toString();
	requestAnimationFrame( loop );  // wait for browser to trigger the loop again (should results in 60 FPS)
}