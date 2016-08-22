'use strict';
/*global window */

var section = {

	id: 'ships-1',
	name: 'ships #1',
	data: [
		{"name":"","hash":"04e6c9","data":[[0.176777,0,0],[0.176777,0,-90],[0.53033,0.353553,-90],[0.53033,0.353553,0],[0.176777,0.353553,-90],[0.176777,0.353553,0],[0.176777,0.353553,180],[0.176777,0.353553,90],[0.883883,0.353553,0],[0.883883,0.353553,-90],[0.883883,0,-90],[0.883883,0,0],[1.237437,0.353553,-90],[1.237437,0.353553,0],[0.883883,0.353553,180],[0.883883,0.353553,90],[0.353553,0.707107,180],[0.353553,0.707107,90],[0.707107,0.707107,0],[0.707107,0.707107,90],[1.414214,0.707107,90],[1.414214,0.707107,0],[0.707107,0.707107,-90],[0.707107,0.707107,180],[1.06066,0.707107,-90],[1.06066,0.707107,180],[1.06066,0.707107,90],[1.06066,0.707107,0],[0.353553,0.707107,-90],[0.353553,0.707107,0],[0,0.707107,180],[0,0.707107,90]]},

		// 99
		{"name":"","hash":"2b1b08","data":[[1.414214,0.353553,90],[1.414214,0.353553,0],[1.06066,0.707107,0],[1.06066,0.707107,90],[1.06066,0.353553,0],[1.06066,0.353553,90],[1.06066,0.353553,-90],[1.06066,0.353553,180],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.707107,0.707107,90],[0.707107,0.707107,180],[0.353553,0.353553,90],[0.353553,0.353553,180],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.353553,1.06066,90],[0.353553,1.06066,0],[0.353553,0.707107,-90],[0.353553,0.707107,0],[1.414214,1.06066,90],[1.414214,1.06066,0],[0.707107,1.06066,180],[0.707107,1.06066,90],[1.06066,1.06066,-90],[1.06066,1.06066,180],[1.06066,1.06066,90],[1.06066,1.06066,0],[0.353553,0,-90],[0.353553,0,0],[0,0,180],[0,0,90]]},
		{"name":"","hash":"4fbc41","data":[[0.426777,0.46967,0],[0.426777,0.46967,-90],[0.78033,0.823223,-90],[0.78033,0.823223,0],[0.426777,0.823223,-90],[0.426777,0.823223,0],[0.426777,0.823223,180],[0.426777,0.823223,90],[0.457107,0.25,45],[0.457107,0.25,-45],[0.707107,0,-45],[0.707107,0,45],[0.707107,0.5,-45],[0.707107,0.5,45],[0.457107,0.25,-135],[0.457107,0.25,135],[0,0.792893,135],[0,0.792893,45],[0.25,0.542893,-45],[0.25,0.542893,45],[0.707107,0.5,-135],[0.707107,0.5,135],[0.353553,1,-45],[0.353553,1,-135],[0.957107,0.75,-135],[0.957107,0.75,135],[0.957107,0.75,45],[0.957107,0.75,-45],[0.853553,1,-135],[0.853553,1,-45],[0.603553,1.25,135],[0.603553,1.25,45]]},
		{"name":"","hash":"a19533","data":[[0,1,-90],[0,1,180],[0.353553,0.646447,180],[0.353553,0.646447,-90],[0.353553,1,180],[0.353553,1,-90],[0.353553,1,90],[0.353553,1,0],[0.78033,0.676777,-135],[0.78033,0.676777,135],[0.53033,0.926777,135],[0.53033,0.926777,-135],[0.53033,0.426777,135],[0.53033,0.426777,-135],[0.78033,0.676777,45],[0.78033,0.676777,-45],[0.707107,0,-90],[0.707107,0,180],[0.707107,0.353553,90],[0.707107,0.353553,180],[0.78033,1.176777,135],[0.78033,1.176777,45],[0.28033,1.176777,-45],[0.28033,1.176777,-135],[1.03033,0.926777,-135],[1.03033,0.926777,135],[1.03033,0.926777,45],[1.03033,0.926777,-45],[0.53033,1.426777,45],[0.53033,1.426777,135],[0.78033,1.176777,-45],[0.78033,1.176777,-135]]},
		{"name":"","hash":"ea79d9","data":[[0.75,0,45],[0.75,0,-45],[0.75,0.5,-45],[0.75,0.5,45],[0.5,0.25,-45],[0.5,0.25,45],[0.5,0.25,-135],[0.5,0.25,135],[0.25,0.5,135],[0.25,0.5,45],[0.5,0.75,45],[0.5,0.75,135],[0,0.75,45],[0,0.75,135],[0.25,0.5,-45],[0.25,0.5,-135],[1.28033,0.573223,180],[1.28033,0.573223,90],[1.633883,0.573223,0],[1.633883,0.573223,90],[1.633883,0.926777,90],[1.633883,0.926777,0],[0.926777,0.926777,180],[0.926777,0.926777,90],[1.28033,0.926777,-90],[1.28033,0.926777,180],[1.28033,0.926777,90],[1.28033,0.926777,0],[0.926777,0.926777,-90],[0.926777,0.926777,0],[0.573223,0.926777,180],[0.573223,0.926777,90]]},
		{"name":"","hash":"89ac50","data":[[0,0.926777,-90],[0,0.926777,180],[0.353553,0.573223,180],[0.353553,0.573223,-90],[0.353553,0.926777,180],[0.353553,0.926777,-90],[0.353553,0.926777,90],[0.353553,0.926777,0],[0.633883,0.25,45],[0.633883,0.25,-45],[0.883883,0,-45],[0.883883,0,45],[0.883883,0.5,-45],[0.883883,0.5,45],[0.633883,0.25,-135],[0.633883,0.25,135],[1.207107,0.853553,-135],[1.207107,0.853553,135],[1.457107,1.103553,45],[1.457107,1.103553,135],[0.707107,0.573223,0],[0.707107,0.573223,-90],[0.457107,1.103553,-45],[0.457107,1.103553,-135],[0.707107,0.926777,-90],[0.707107,0.926777,180],[0.707107,0.926777,90],[0.707107,0.926777,0],[0.707107,1.353553,45],[0.707107,1.353553,135],[0.957107,1.103553,-45],[0.957107,1.103553,-135]]},
		{"name":"","hash":"88ffdd","data":[[0.676777,0,45],[0.676777,0,-45],[0.676777,0.5,-45],[0.676777,0.5,45],[0.426777,0.25,-45],[0.426777,0.25,45],[0.426777,0.25,-135],[0.426777,0.25,135],[0.426777,0.75,-135],[0.426777,0.75,135],[0.176777,1,135],[0.176777,1,-135],[0.176777,0.5,135],[0.176777,0.5,-135],[0.426777,0.75,45],[0.426777,0.75,-45],[0,0.71967,-90],[0,0.71967,180],[0,1.073223,90],[0,1.073223,180],[0.426777,1.25,135],[0.426777,1.25,45],[0.176777,1.25,-45],[0.176777,1.25,-135],[0.676777,1,-135],[0.676777,1,135],[0.676777,1,45],[0.676777,1,-45],[0.426777,1.5,45],[0.426777,1.5,135],[0.676777,1.25,-45],[0.676777,1.25,-135]]},
		{"name":"","hash":"c115ea","data":[[0.237437,0.926777,-135],[0.237437,0.926777,135],[0.237437,0.426777,135],[0.237437,0.426777,-135],[0.487437,0.676777,135],[0.487437,0.676777,-135],[0.487437,0.676777,45],[0.487437,0.676777,-45],[0.737437,0.926777,135],[0.737437,0.926777,45],[0.987437,1.176777,45],[0.987437,1.176777,135],[0.487437,1.176777,45],[0.487437,1.176777,135],[0.737437,0.926777,-45],[0.737437,0.926777,-135],[0.414214,0,-90],[0.414214,0,180],[0.414214,0.353553,90],[0.414214,0.353553,180],[0.707107,1.353553,90],[0.707107,1.353553,0],[0,1.353553,180],[0,1.353553,90],[0.353553,1.353553,-90],[0.353553,1.353553,180],[0.353553,1.353553,90],[0.353553,1.353553,0],[0.707107,1.353553,-90],[0.707107,1.353553,180],[1.06066,1.353553,0],[1.06066,1.353553,90]]},
		{"name":"","hash":"631fe0","data":[[1.237437,0.75,135],[1.237437,0.75,45],[0.737437,0.75,45],[0.737437,0.75,135],[0.987437,0.5,45],[0.987437,0.5,135],[0.987437,0.5,-45],[0.987437,0.5,-135],[1.237437,0.25,45],[1.237437,0.25,-45],[1.487437,0,-45],[1.487437,0,45],[1.487437,0.5,-45],[1.487437,0.5,45],[1.237437,0.25,-135],[1.237437,0.25,135],[0,0.75,135],[0,0.75,45],[0.25,0.5,-45],[0.25,0.5,45],[0.957107,0.926777,90],[0.957107,0.926777,0],[0.25,0.926777,180],[0.25,0.926777,90],[0.603553,0.926777,-90],[0.603553,0.926777,180],[0.603553,0.926777,90],[0.603553,0.926777,0],[0.957107,0.926777,-90],[0.957107,0.926777,180],[1.31066,0.926777,0],[1.31066,0.926777,90]]},

		// 100
		{"name":"","hash":"d76ce2","data":[[0.426777,0,0],[0.426777,0,-90],[0.78033,0.353553,-90],[0.78033,0.353553,0],[0.426777,0.353553,-90],[0.426777,0.353553,0],[0.426777,0.353553,180],[0.426777,0.353553,90],[1.133883,0.353553,0],[1.133883,0.353553,-90],[1.133883,0,-90],[1.133883,0,0],[1.487437,0.353553,-90],[1.487437,0.353553,0],[1.133883,0.353553,180],[1.133883,0.353553,90],[0,0.53033,135],[0,0.53033,45],[0.25,0.28033,-45],[0.25,0.28033,45],[1.133883,0.707107,90],[1.133883,0.707107,0],[0.426777,0.707107,180],[0.426777,0.707107,90],[0.78033,0.707107,-90],[0.78033,0.707107,180],[0.78033,0.707107,90],[0.78033,0.707107,0],[0.426777,0.707107,-90],[0.426777,0.707107,0],[0.073223,0.707107,180],[0.073223,0.707107,90]]},
		{"name":"","hash":"a4c565","data":[[1,0.353553,45],[1,0.353553,-45],[1,0.853553,-45],[1,0.853553,45],[0.75,0.603553,-45],[0.75,0.603553,45],[0.75,0.603553,-135],[0.75,0.603553,135],[0,0.25,45],[0,0.25,-45],[0.25,0,-45],[0.25,0,45],[0.25,0.5,-45],[0.25,0.5,45],[0,0.25,-135],[0,0.25,135],[1,0.853553,-135],[1,0.853553,135],[1.25,1.103553,45],[1.25,1.103553,135],[0.5,1.103553,-45],[0.5,1.103553,-135],[0.073223,0.926777,180],[0.073223,0.926777,90],[0.426777,0.926777,-90],[0.426777,0.926777,180],[0.426777,0.926777,90],[0.426777,0.926777,0],[0.75,1.353553,45],[0.75,1.353553,135],[1,1.103553,-45],[1,1.103553,-135]]},
		{"name":"","hash":"c6f703","data":[[0.957107,0,0],[0.957107,0,-90],[1.31066,0.353553,-90],[1.31066,0.353553,0],[0.957107,0.353553,-90],[0.957107,0.353553,0],[0.957107,0.353553,180],[0.957107,0.353553,90],[0.957107,0.707107,90],[0.957107,0.707107,0],[1.31066,0.707107,0],[1.31066,0.707107,90],[0.957107,1.06066,0],[0.957107,1.06066,90],[0.957107,0.707107,-90],[0.957107,0.707107,180],[0,1.237437,135],[0,1.237437,45],[0.25,0.987437,-45],[0.25,0.987437,45],[0.957107,1.414214,90],[0.957107,1.414214,0],[0.25,1.414214,180],[0.25,1.414214,90],[0.603553,1.414214,-90],[0.603553,1.414214,180],[0.603553,1.414214,90],[0.603553,1.414214,0],[0.073223,0.914214,0],[0.073223,0.914214,90],[0.073223,0.56066,-90],[0.073223,0.56066,180]]},
		{"name":"","hash":"f57e63","data":[[0,0.926777,-90],[0,0.926777,180],[0.353553,0.573223,180],[0.353553,0.573223,-90],[0.353553,0.926777,180],[0.353553,0.926777,-90],[0.353553,0.926777,90],[0.353553,0.926777,0],[0.633883,0.25,45],[0.633883,0.25,-45],[0.883883,0,-45],[0.883883,0,45],[0.883883,0.5,-45],[0.883883,0.5,45],[0.633883,0.25,-135],[0.633883,0.25,135],[0.883883,0.853553,-135],[0.883883,0.853553,135],[1.133883,1.103553,45],[1.133883,1.103553,135],[0.707107,0.573223,0],[0.707107,0.573223,-90],[0.383883,1.103553,-45],[0.383883,1.103553,-135],[0.707107,0.926777,-90],[0.707107,0.926777,180],[0.707107,0.926777,90],[0.707107,0.926777,0],[0.633883,1.353553,45],[0.633883,1.353553,135],[0.883883,1.103553,-45],[0.883883,1.103553,-135]]},
		{"name":"","hash":"67bfa5","data":[[0,0.573223,-90],[0,0.573223,180],[0.353553,0.21967,180],[0.353553,0.21967,-90],[0.353553,0.573223,180],[0.353553,0.573223,-90],[0.353553,0.573223,90],[0.353553,0.573223,0],[0.78033,0.25,-135],[0.78033,0.25,135],[0.53033,0.5,135],[0.53033,0.5,-135],[0.53033,0,135],[0.53033,0,-135],[0.78033,0.25,45],[0.78033,0.25,-45],[0.353553,0.926777,180],[0.353553,0.926777,90],[0.707107,0.926777,0],[0.707107,0.926777,90],[1.414214,0.926777,90],[1.414214,0.926777,0],[1.06066,0.926777,-90],[1.06066,0.926777,180],[1.237437,0.573223,-90],[1.237437,0.573223,180],[1.237437,0.573223,90],[1.237437,0.573223,0],[0.707107,0.926777,-90],[0.707107,0.926777,180],[1.06066,0.926777,0],[1.06066,0.926777,90]]},
		{"name":"","hash":"4fa3af","data":[[0.75,0.426777,45],[0.75,0.426777,-45],[0.75,0.926777,-45],[0.75,0.926777,45],[0.5,0.676777,-45],[0.5,0.676777,45],[0.5,0.676777,-135],[0.5,0.676777,135],[0.25,0.926777,135],[0.25,0.926777,45],[0.5,1.176777,45],[0.5,1.176777,135],[0,1.176777,45],[0,1.176777,135],[0.25,0.926777,-45],[0.25,0.926777,-135],[0.5,0.176777,-45],[0.5,0.176777,-135],[0.25,0.426777,135],[0.25,0.426777,-135],[1,1.176777,-45],[1,1.176777,-135],[0.573223,0,-90],[0.573223,0,180],[1.073223,1,-90],[1.073223,1,180],[1.073223,1,90],[1.073223,1,0],[0.75,1.426777,135],[0.75,1.426777,45],[0.5,1.176777,-135],[0.5,1.176777,-45]]},
		{"name":"","hash":"9715e0","data":[[0.75,0,45],[0.75,0,-45],[0.75,0.5,-45],[0.75,0.5,45],[0.5,0.25,-45],[0.5,0.25,45],[0.5,0.25,-135],[0.5,0.25,135],[0.25,0.5,135],[0.25,0.5,45],[0.5,0.75,45],[0.5,0.75,135],[0,0.75,45],[0,0.75,135],[0.25,0.5,-45],[0.25,0.5,-135],[1.133883,0.5,-135],[1.133883,0.5,135],[1.383883,0.75,45],[1.383883,0.75,135],[1.103553,0.926777,90],[1.103553,0.926777,0],[0.396447,0.926777,180],[0.396447,0.926777,90],[0.75,0.926777,-90],[0.75,0.926777,180],[0.75,0.926777,90],[0.75,0.926777,0],[1.103553,0.926777,-90],[1.103553,0.926777,180],[1.457107,0.926777,0],[1.457107,0.926777,90]]},

		// 101
		{"name":"","hash":"31e8fc","data":[[0,0.707107,-90],[0,0.707107,180],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.707107,180],[0.353553,0.707107,-90],[0.353553,0.707107,90],[0.353553,0.707107,0],[0.707107,0.707107,0],[0.707107,0.707107,-90],[0.707107,0.353553,-90],[0.707107,0.353553,0],[1.06066,0.707107,-90],[1.06066,0.707107,0],[0.707107,0.707107,180],[0.707107,0.707107,90],[0.707107,0,-90],[0.707107,0,180],[0.707107,0.353553,90],[0.707107,0.353553,180],[0.707107,1.06066,90],[0.707107,1.06066,0],[0,1.06066,180],[0,1.06066,90],[0.353553,1.06066,-90],[0.353553,1.06066,180],[0.353553,1.06066,90],[0.353553,1.06066,0],[0.707107,1.06066,-90],[0.707107,1.06066,180],[1.06066,1.06066,0],[1.06066,1.06066,90]]},
		{"name":"","hash":"8db4f4","data":[[0.883883,0,0],[0.883883,0,-90],[1.237437,0.353553,-90],[1.237437,0.353553,0],[0.883883,0.353553,-90],[0.883883,0.353553,0],[0.883883,0.353553,180],[0.883883,0.353553,90],[0.353553,0.707107,-90],[0.353553,0.707107,180],[0,0.707107,180],[0,0.707107,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.707107,90],[0.353553,0.707107,0],[0.353553,1.06066,180],[0.353553,1.06066,90],[0.707107,1.06066,0],[0.707107,1.06066,90],[1.237437,0.707107,90],[1.237437,0.707107,0],[1.414214,0.78033,135],[1.414214,0.78033,45],[0.883883,0.707107,-90],[0.883883,0.707107,180],[0.883883,0.707107,90],[0.883883,0.707107,0],[0.707107,1.06066,-90],[0.707107,1.06066,180],[1.06066,1.06066,0],[1.06066,1.06066,90]]},
		{"name":"","hash":"efd604","data":[[0.926777,1.176777,135],[0.926777,1.176777,45],[0.426777,1.176777,45],[0.426777,1.176777,135],[0.676777,0.926777,45],[0.676777,0.926777,135],[0.676777,0.926777,-45],[0.676777,0.926777,-135],[0.426777,0.676777,-135],[0.426777,0.676777,135],[0.176777,0.926777,135],[0.176777,0.926777,-135],[0.176777,0.426777,135],[0.176777,0.426777,-135],[0.426777,0.676777,45],[0.426777,0.676777,-45],[0.353553,0,-90],[0.353553,0,180],[0.353553,0.353553,90],[0.353553,0.353553,180],[0,0.646447,-90],[0,0.646447,180],[0.176777,1.176777,-45],[0.176777,1.176777,-135],[0,1,-90],[0,1,180],[0,1,90],[0,1,0],[0.426777,1.426777,45],[0.426777,1.426777,135],[0.676777,1.176777,-45],[0.676777,1.176777,-135]]},
		{"name":"","hash":"8e7790","data":[[0,0.707107,-90],[0,0.707107,180],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.707107,180],[0.353553,0.707107,-90],[0.353553,0.707107,90],[0.353553,0.707107,0],[1.06066,0.707107,0],[1.06066,0.707107,-90],[1.06066,0.353553,-90],[1.06066,0.353553,0],[1.414214,0.707107,-90],[1.414214,0.707107,0],[1.06066,0.707107,180],[1.06066,0.707107,90],[1.06066,0,-90],[1.06066,0,180],[1.06066,0.353553,90],[1.06066,0.353553,180],[0.707107,1.06066,180],[0.707107,1.06066,90],[1.414214,1.06066,90],[1.414214,1.06066,0],[1.06066,1.06066,-90],[1.06066,1.06066,180],[1.06066,1.06066,90],[1.06066,1.06066,0],[0.707107,1.06066,-90],[0.707107,1.06066,0],[0.353553,1.06066,180],[0.353553,1.06066,90]]},
		{"name":"","hash":"7cdd75","data":[[0.75,0,45],[0.75,0,-45],[0.75,0.5,-45],[0.75,0.5,45],[0.5,0.25,-45],[0.5,0.25,45],[0.5,0.25,-135],[0.5,0.25,135],[0,0.25,45],[0,0.25,-45],[0.25,0,-45],[0.25,0,45],[0.25,0.5,-45],[0.25,0.5,45],[0,0.25,-135],[0,0.25,135],[1.103553,0.603553,-135],[1.103553,0.603553,135],[1.353553,0.853553,45],[1.353553,0.853553,135],[0.073223,0.926777,180],[0.073223,0.926777,90],[0.78033,0.926777,90],[0.78033,0.926777,0],[0.426777,0.926777,-90],[0.426777,0.926777,180],[0.426777,0.926777,90],[0.426777,0.926777,0],[0.853553,1.103553,45],[0.853553,1.103553,135],[1.103553,0.853553,-45],[1.103553,0.853553,-135]]},
		{"name":"","hash":"0c94d6","data":[[1.207107,0.353553,0],[1.207107,0.353553,-90],[1.56066,0.707107,-90],[1.56066,0.707107,0],[1.207107,0.707107,-90],[1.207107,0.707107,0],[1.207107,0.707107,180],[1.207107,0.707107,90],[0.353553,0.707107,-90],[0.353553,0.707107,180],[0,0.707107,180],[0,0.707107,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.707107,90],[0.353553,0.707107,0],[0.707107,0,-90],[0.707107,0,180],[0.707107,0.353553,90],[0.707107,0.353553,180],[0.707107,0.353553,0],[0.707107,0.353553,-90],[1.03033,0.883883,-45],[1.03033,0.883883,-135],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.707107,0.707107,90],[0.707107,0.707107,0],[0.78033,1.133883,135],[0.78033,1.133883,45],[0.53033,0.883883,-135],[0.53033,0.883883,-45]]},
		{"name":"","hash":"e512bf","data":[[0.5,0.133883,45],[0.5,0.133883,-45],[0.5,0.633883,-45],[0.5,0.633883,45],[0.25,0.383883,-45],[0.25,0.383883,45],[0.25,0.383883,-135],[0.25,0.383883,135],[0.926777,0.707107,0],[0.926777,0.707107,-90],[0.926777,0.353553,-90],[0.926777,0.353553,0],[1.28033,0.707107,-90],[1.28033,0.707107,0],[0.926777,0.707107,180],[0.926777,0.707107,90],[0.926777,0,-90],[0.926777,0,180],[0.926777,0.353553,90],[0.926777,0.353553,180],[0.25,0.883883,-45],[0.25,0.883883,-135],[0.25,0.883883,135],[0.25,0.883883,45],[0,0.633883,-135],[0,0.633883,135],[0,0.633883,45],[0,0.633883,-45],[0.5,1.133883,45],[0.5,1.133883,135],[0.75,0.883883,-45],[0.75,0.883883,-135]]},
		{"name":"","hash":"0e6ef1","data":[[0.737437,0.5,-135],[0.737437,0.5,135],[0.737437,0,135],[0.737437,0,-135],[0.987437,0.25,135],[0.987437,0.25,-135],[0.987437,0.25,45],[0.987437,0.25,-45],[1.237437,0.5,135],[1.237437,0.5,45],[1.487437,0.75,45],[1.487437,0.75,135],[0.987437,0.75,45],[0.987437,0.75,135],[1.237437,0.5,-45],[1.237437,0.5,-135],[0.707107,0.926777,180],[0.707107,0.926777,90],[1.06066,0.926777,0],[1.06066,0.926777,90],[0,0.573223,-90],[0,0.573223,180],[0.353553,0.21967,-90],[0.353553,0.21967,180],[0.353553,0.573223,-90],[0.353553,0.573223,180],[0.353553,0.573223,90],[0.353553,0.573223,0],[0.707107,0.926777,-90],[0.707107,0.926777,0],[0.353553,0.926777,180],[0.353553,0.926777,90]]},

		// 102
		{"name":"","hash":"5438a4","data":[[0.53033,0.5,-135],[0.53033,0.5,135],[0.53033,0,135],[0.53033,0,-135],[0.78033,0.25,135],[0.78033,0.25,-135],[0.78033,0.25,45],[0.78033,0.25,-45],[0.353553,0.573223,-90],[0.353553,0.573223,180],[0,0.573223,180],[0,0.573223,-90],[0.353553,0.21967,180],[0.353553,0.21967,-90],[0.353553,0.573223,90],[0.353553,0.573223,0],[0.707107,0.926777,180],[0.707107,0.926777,90],[1.06066,0.926777,0],[1.06066,0.926777,90],[0.78033,0.75,135],[0.78033,0.75,45],[1.28033,0.75,135],[1.28033,0.75,45],[1.03033,0.5,-135],[1.03033,0.5,135],[1.03033,0.5,45],[1.03033,0.5,-45],[0.707107,0.926777,-90],[0.707107,0.926777,0],[0.353553,0.926777,180],[0.353553,0.926777,90]]},
		{"name":"","hash":"cc3640","data":[[0.707107,0,0],[0.707107,0,-90],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,-90],[0.707107,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.707107,0.707107,90],[0.707107,0.707107,0],[1.06066,0.707107,0],[1.06066,0.707107,90],[0.707107,1.06066,0],[0.707107,1.06066,90],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.353553,1.414214,180],[0.353553,1.414214,90],[0.707107,1.414214,0],[0.707107,1.414214,90],[0.707107,1.414214,-90],[0.707107,1.414214,180],[1.414214,1.414214,90],[1.414214,1.414214,0],[1.06066,1.414214,-90],[1.06066,1.414214,180],[1.06066,1.414214,90],[1.06066,1.414214,0],[0.353553,1.414214,-90],[0.353553,1.414214,0],[0,1.414214,180],[0,1.414214,90]]},
		{"name":"","hash":"d516d6","data":[[0.707107,0,0],[0.707107,0,-90],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,-90],[0.707107,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.707107,0.707107,90],[0.707107,0.707107,0],[1.06066,0.707107,0],[1.06066,0.707107,90],[0.707107,1.06066,0],[0.707107,1.06066,90],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0,1.414214,180],[0,1.414214,90],[0.353553,1.414214,0],[0.353553,1.414214,90],[0.707107,1.414214,90],[0.707107,1.414214,0],[0.353553,1.414214,-90],[0.353553,1.414214,180],[1.207107,1.06066,-90],[1.207107,1.06066,180],[1.207107,1.06066,90],[1.207107,1.06066,0],[0.883883,1.487437,45],[0.883883,1.487437,135],[1.133883,1.237437,-45],[1.133883,1.237437,-135]]},
		{"name":"","hash":"162171","data":[[1.03033,0,45],[1.03033,0,-45],[1.03033,0.5,-45],[1.03033,0.5,45],[0.78033,0.25,-45],[0.78033,0.25,45],[0.78033,0.25,-135],[0.78033,0.25,135],[1.457107,0.573223,0],[1.457107,0.573223,-90],[1.457107,0.21967,-90],[1.457107,0.21967,0],[1.81066,0.573223,-90],[1.81066,0.573223,0],[1.457107,0.573223,180],[1.457107,0.573223,90],[0,0.926777,180],[0,0.926777,90],[0.353553,0.926777,0],[0.353553,0.926777,90],[0.53033,1,135],[0.53033,1,45],[1.28033,0.75,-45],[1.28033,0.75,-135],[0.176777,0.573223,-90],[0.176777,0.573223,180],[0.176777,0.573223,90],[0.176777,0.573223,0],[1.03033,1,135],[1.03033,1,45],[0.78033,0.75,-135],[0.78033,0.75,-45]]},
		{"name":"","hash":"858256","data":[[0.603553,0.21967,0],[0.603553,0.21967,-90],[0.957107,0.573223,-90],[0.957107,0.573223,0],[0.603553,0.573223,-90],[0.603553,0.573223,0],[0.603553,0.573223,180],[0.603553,0.573223,90],[1.383883,0.25,-135],[1.383883,0.25,135],[1.133883,0.5,135],[1.133883,0.5,-135],[1.133883,0,135],[1.133883,0,-135],[1.383883,0.25,45],[1.383883,0.25,-45],[0,0.75,135],[0,0.75,45],[0.25,0.5,-45],[0.25,0.5,45],[0.25,0.926777,180],[0.25,0.926777,90],[0.957107,0.926777,90],[0.957107,0.926777,0],[0.603553,0.926777,-90],[0.603553,0.926777,180],[0.603553,0.926777,90],[0.603553,0.926777,0],[0.957107,0.926777,-90],[0.957107,0.926777,180],[1.31066,0.926777,0],[1.31066,0.926777,90]]},
		{"name":"","hash":"0ec08c","data":[[0.396447,0.353553,-90],[0.396447,0.353553,180],[0.75,0,180],[0.75,0,-90],[0.75,0.353553,180],[0.75,0.353553,-90],[0.75,0.353553,90],[0.75,0.353553,0],[0.75,0.707107,180],[0.75,0.707107,90],[0.75,1.06066,90],[0.75,1.06066,180],[0.396447,0.707107,90],[0.396447,0.707107,180],[0.75,0.707107,0],[0.75,0.707107,-90],[0,1.31066,180],[0,1.31066,90],[0.353553,1.31066,0],[0.353553,1.31066,90],[0.426777,1.487437,135],[0.426777,1.487437,45],[0.073223,1.133883,135],[0.073223,1.133883,45],[0.676777,1.237437,-135],[0.676777,1.237437,135],[0.676777,1.237437,45],[0.676777,1.237437,-45],[0.853553,1.31066,-90],[0.853553,1.31066,180],[1.207107,1.31066,0],[1.207107,1.31066,90]]},
		{"name":"","hash":"7784b7","data":[[0,0.353553,-90],[0,0.353553,180],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.353553,0.707107,180],[0.353553,0.707107,90],[0.353553,1.06066,90],[0.353553,1.06066,180],[0,0.707107,90],[0,0.707107,180],[0.353553,0.707107,0],[0.353553,0.707107,-90],[0.853553,1.31066,180],[0.853553,1.31066,90],[1.207107,1.31066,0],[1.207107,1.31066,90],[0.78033,1.487437,135],[0.78033,1.487437,45],[0.53033,1.237437,-45],[0.53033,1.237437,-135],[1.207107,0.957107,180],[1.207107,0.957107,90],[1.207107,0.957107,0],[1.207107,0.957107,-90],[0.28033,1.487437,135],[0.28033,1.487437,45],[0.03033,1.237437,-135],[0.03033,1.237437,-45]]},
		{"name":"","hash":"ec7214","data":[[0.883883,0,0],[0.883883,0,-90],[1.237437,0.353553,-90],[1.237437,0.353553,0],[0.883883,0.353553,-90],[0.883883,0.353553,0],[0.883883,0.353553,180],[0.883883,0.353553,90],[0.883883,0.707107,90],[0.883883,0.707107,0],[1.237437,0.707107,0],[1.237437,0.707107,90],[0.883883,1.06066,0],[0.883883,1.06066,90],[0.883883,0.707107,-90],[0.883883,0.707107,180],[0.176777,1.414214,180],[0.176777,1.414214,90],[0.53033,1.414214,0],[0.53033,1.414214,90],[0.53033,1.414214,-90],[0.53033,1.414214,180],[1.237437,1.414214,90],[1.237437,1.414214,0],[0.883883,1.414214,-90],[0.883883,1.414214,180],[0.883883,1.414214,90],[0.883883,1.414214,0],[0.25,1.237437,135],[0.25,1.237437,45],[0,0.987437,-135],[0,0.987437,-45]]}

	]

};

export default section;