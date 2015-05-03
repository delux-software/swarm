function initCanvas() {
	cv1 = document.getElementById( "canvas" );   // get canvas
	scX = cv1.width;
	scY = cv1.height;
	cx1 = cv1.getContext( "2d" );

	cv2 = document.createElement( 'canvas' );      // create double buffer
	cv2.width = scX;
	cv2.height = scY;
	cx2 = cv2.getContext( "2d" );
}

function rgb(r,g,b) {
	return rgba(r,g,b,"1.0");
}

function rgba(r,g,b,a) {
	var alph = parseFloat(a);
	if ( r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255 || alph < 0 || alph > 1) {
		console.log("rgba called with wrong params. r: "+r+", g: "+g+", b: "+b+", a:"+a);
	} else {
		return "rgba(" + r + ", " + g + ", " + b + ", "+a+" )";
	}
}