var cv1, cx1, cv2, cx2, scX, scY, FPSMan;

var cloud_x, cloud_move = 1, background, cloud;

function init() {
	initCanvas();       // init the canvas and double buffering (gameHelper)
	FPSManager.init();  // init FPSManager

	cloud_x = 1;

	// init background
	background = new Image();
	background.src = './img/forest.png';
	background.onload = function() {
	}

	setTimeout(update,100);


	//update();
}
function update() {
	cloud_x += cloud_move;
	if( cloud_x > 640 - 256 || cloud_x <= 0 ) {
		cloud_move = -cloud_move;
	}

	draw();
}

function draw() {
	cx2.drawImage( background, 0, 0 );
	cx2.drawImage( background, 950, 600 );

	//ctx.drawImage( cloud, cloud_x, 0 );

	var max = 256;
	for( var i = 0; i < max; i++ ) {
		var r = 155, g = 120, b = i;

		g = Math.floor( cloud_x * 255 / (640 - 256) );
		//console.log(g);

		cx2.fillStyle = rgb(r,g,b);
		cx2.fillRect( cloud_x + i, 100, 1, 255 );
	}

	cx1.drawImage( cv2, 0, 0 );

	FPSManager.update();
	requestAnimationFrame( update );
}