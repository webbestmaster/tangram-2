'use strict';
/*global window */

var section = {

	id: 'tools',
	name: 'tools',
	data: [

		// 119
		{"name":"","hash":"6de194","data":[[1.207107,0.573223,-135],[1.207107,0.573223,135],[1.207107,0.073223,135],[1.207107,0.073223,-135],[1.457107,0.323223,135],[1.457107,0.323223,-135],[1.457107,0.323223,45],[1.457107,0.323223,-45],[1.457107,0.823223,135],[1.457107,0.823223,45],[1.707107,1.073223,45],[1.707107,1.073223,135],[1.207107,1.073223,45],[1.207107,1.073223,135],[1.457107,0.823223,-45],[1.457107,0.823223,-135],[0.25,0.146447,-45],[0.25,0.146447,-135],[0,0.396447,135],[0,0.396447,-135],[1.383883,0,180],[1.383883,0,90],[0.676777,0.323223,-90],[0.676777,0.323223,180],[1.03033,0.323223,-90],[1.03033,0.323223,180],[1.03033,0.323223,90],[1.03033,0.323223,0],[0.323223,0.323223,-90],[0.323223,0.323223,180],[0.676777,0.323223,0],[0.676777,0.323223,90]]},
		{"name":"","hash":"108d3c","data":[[0.5,0.5,135],[0.5,0.5,45],[0,0.5,45],[0,0.5,135],[0.25,0.25,45],[0.25,0.25,135],[0.25,0.25,-45],[0.25,0.25,-135],[0.75,0.25,-45],[0.75,0.25,-135],[0.5,0,-135],[0.5,0,-45],[1,0,-135],[1,0,-45],[0.75,0.25,135],[0.75,0.25,45],[1,0.5,135],[1,0.5,45],[1.25,0.25,-45],[1.25,0.25,45],[0.573223,1.03033,-90],[0.573223,1.03033,180],[0.573223,0.676777,90],[0.573223,0.676777,0],[0.573223,1.383883,-90],[0.573223,1.383883,180],[0.573223,1.383883,90],[0.573223,1.383883,0],[0.573223,0.676777,180],[0.573223,0.676777,-90],[0.573223,1.03033,90],[0.573223,1.03033,0]]},
		{"name":"","hash":"f16e28","data":[[1.06066,0,90],[1.06066,0,0],[0.707107,0.353553,0],[0.707107,0.353553,90],[0.707107,0,0],[0.707107,0,90],[0.707107,0,-90],[0.707107,0,180],[0.353553,0,180],[0.353553,0,90],[0.353553,0.353553,90],[0.353553,0.353553,180],[0,0,90],[0,0,180],[0.353553,0,0],[0.353553,0,-90],[0.603553,0.957107,90],[0.603553,0.957107,0],[0.603553,0.603553,-90],[0.603553,0.603553,0],[0.78033,0.53033,45],[0.78033,0.53033,-45],[0.603553,1.31066,-90],[0.603553,1.31066,180],[0.603553,1.664214,-90],[0.603553,1.664214,180],[0.603553,1.664214,90],[0.603553,1.664214,0],[0.603553,1.31066,0],[0.603553,1.31066,90],[0.603553,0.957107,-90],[0.603553,0.957107,180]]},
		{"name":"","hash":"bf1662","data":[[0.176777,0.926777,-135],[0.176777,0.926777,135],[0.176777,0.426777,135],[0.176777,0.426777,-135],[0.426777,0.676777,135],[0.426777,0.676777,-135],[0.426777,0.676777,45],[0.426777,0.676777,-45],[1.176777,0.926777,-45],[1.176777,0.926777,-135],[0.926777,0.676777,-135],[0.926777,0.676777,-45],[1.426777,0.676777,-135],[1.426777,0.676777,-45],[1.176777,0.926777,135],[1.176777,0.926777,45],[2.176777,0.926777,45],[2.176777,0.926777,-45],[1.926777,0.676777,-135],[1.926777,0.676777,-45],[0.676777,0.926777,135],[0.676777,0.926777,45],[0.676777,0.926777,-45],[0.676777,0.926777,-135],[1.676777,0.926777,-135],[1.676777,0.926777,135],[1.676777,0.926777,45],[1.676777,0.926777,-45],[0,0.353553,180],[0,0.353553,90],[0,0,-90],[0,0,0]]},
		{"name":"","hash":"0dc6ed","data":[[1.5,0.5,135],[1.5,0.5,45],[1,0.5,45],[1,0.5,135],[1.25,0.25,45],[1.25,0.25,135],[1.25,0.25,-45],[1.25,0.25,-135],[0.75,0.25,-45],[0.75,0.25,-135],[0.5,0,-135],[0.5,0,-45],[1,0,-135],[1,0,-45],[0.75,0.25,135],[0.75,0.25,45],[1.75,0.25,45],[1.75,0.25,-45],[1.5,0,-135],[1.5,0,-45],[0,0,-45],[0,0,-135],[0.25,0.25,135],[0.25,0.25,45],[1.926777,0.25,-90],[1.926777,0.25,180],[1.926777,0.25,90],[1.926777,0.25,0],[0.5,0.5,135],[0.5,0.5,45],[0.25,0.25,-135],[0.25,0.25,-45]]},
		{"name":"","hash":"ca906b","data":[[0.75,0.75,135],[0.75,0.75,45],[0.25,0.75,45],[0.25,0.75,135],[0.5,0.5,45],[0.5,0.5,135],[0.5,0.5,-45],[0.5,0.5,-135],[0.25,0.25,-135],[0.25,0.25,135],[0,0.5,135],[0,0.5,-135],[0,0,135],[0,0,-135],[0.25,0.25,45],[0.25,0.25,-45],[0.426777,1.957107,135],[0.426777,1.957107,45],[0.676777,1.707107,-45],[0.676777,1.707107,45],[0.5,1.28033,90],[0.5,1.28033,0],[0.823223,0.573223,180],[0.823223,0.573223,90],[0.5,0.926777,-90],[0.5,0.926777,180],[0.5,0.926777,90],[0.5,0.926777,0],[0.5,1.28033,180],[0.5,1.28033,-90],[0.5,1.633883,90],[0.5,1.633883,0]]},
		{"name":"","hash":"d15421","data":[[0.5,0,-45],[0.5,0,-135],[1,0,-135],[1,0,-45],[0.75,0.25,-135],[0.75,0.25,-45],[0.75,0.25,135],[0.75,0.25,45],[0.25,0.25,135],[0.25,0.25,45],[0.5,0.5,45],[0.5,0.5,135],[0,0.5,45],[0,0.5,135],[0.25,0.25,-45],[0.25,0.25,-135],[1,0.5,135],[1,0.5,45],[1.25,0.25,-45],[1.25,0.25,45],[1.426777,0.176777,90],[1.426777,0.176777,0],[1.78033,0.176777,-90],[1.78033,0.176777,180],[2.133883,0.176777,-90],[2.133883,0.176777,180],[2.133883,0.176777,90],[2.133883,0.176777,0],[1.426777,0.176777,-90],[1.426777,0.176777,180],[1.78033,0.176777,0],[1.78033,0.176777,90]]},

		// 120
		{"name":"","hash":"795cf9","data":[[1.237437,0.5,-135],[1.237437,0.5,135],[1.237437,0,135],[1.237437,0,-135],[1.487437,0.25,135],[1.487437,0.25,-135],[1.487437,0.25,45],[1.487437,0.25,-45],[1.737437,0.5,135],[1.737437,0.5,45],[1.987437,0.75,45],[1.987437,0.75,135],[1.487437,0.75,45],[1.487437,0.75,135],[1.737437,0.5,-45],[1.737437,0.5,-135],[0.707107,0.426777,180],[0.707107,0.426777,90],[1.06066,0.426777,0],[1.06066,0.426777,90],[1.06066,0.426777,-90],[1.06066,0.426777,180],[0.353553,0.426777,0],[0.353553,0.426777,-90],[0,0.426777,-90],[0,0.426777,180],[0,0.426777,90],[0,0.426777,0],[0.707107,0.426777,-90],[0.707107,0.426777,0],[0.353553,0.426777,180],[0.353553,0.426777,90]]},
		{"name":"","hash":"020b1f","data":[[0.426777,0.353553,180],[0.426777,0.353553,90],[0.073223,0,90],[0.073223,0,180],[0.426777,0,90],[0.426777,0,180],[0.426777,0,0],[0.426777,0,-90],[0.25,0.426777,135],[0.25,0.426777,45],[0.5,0.676777,45],[0.5,0.676777,135],[0,0.676777,45],[0,0.676777,135],[0.25,0.426777,-45],[0.25,0.426777,-135],[0.073223,0.353553,90],[0.073223,0.353553,0],[0.073223,0,-90],[0.073223,0,0],[0.78033,0.176777,90],[0.78033,0.176777,0],[1.133883,0.176777,-90],[1.133883,0.176777,180],[1.487437,0.176777,-90],[1.487437,0.176777,180],[1.487437,0.176777,90],[1.487437,0.176777,0],[0.78033,0.176777,-90],[0.78033,0.176777,180],[1.133883,0.176777,0],[1.133883,0.176777,90]]},
		{"name":"","hash":"0a334e","data":[[1.53033,0.707107,90],[1.53033,0.707107,0],[1.176777,1.06066,0],[1.176777,1.06066,90],[1.176777,0.707107,0],[1.176777,0.707107,90],[1.176777,0.707107,-90],[1.176777,0.707107,180],[1.53033,0.353553,-90],[1.53033,0.353553,180],[1.176777,0.353553,180],[1.176777,0.353553,-90],[1.53033,0,180],[1.53033,0,-90],[1.53033,0.353553,90],[1.53033,0.353553,0],[0.5,1.383883,135],[0.5,1.383883,45],[0.75,1.133883,-45],[0.75,1.133883,45],[0.5,1.383883,-45],[0.5,1.383883,-135],[0,1.883883,-135],[0,1.883883,135],[0.25,1.633883,-45],[0.25,1.633883,-135],[0.25,1.633883,135],[0.25,1.633883,45],[1,0.883883,45],[1,0.883883,-45],[0.75,1.133883,135],[0.75,1.133883,-135]]},
		{"name":"","hash":"031056","data":[[0,1.25,-45],[0,1.25,-135],[0.5,1.25,-135],[0.5,1.25,-45],[0.25,1.5,-135],[0.25,1.5,-45],[0.25,1.5,135],[0.25,1.5,45],[1.75,0,135],[1.75,0,45],[2,0.25,45],[2,0.25,135],[1.5,0.25,45],[1.5,0.25,135],[1.75,0,-45],[1.75,0,-135],[0.5,1.25,135],[0.5,1.25,45],[0.75,1,-45],[0.75,1,45],[1.5,0.25,-45],[1.5,0.25,-135],[1,0.75,-135],[1,0.75,135],[1.25,0.5,-135],[1.25,0.5,135],[1.25,0.5,45],[1.25,0.5,-45],[0.75,1,-135],[0.75,1,135],[1,0.75,-45],[1,0.75,45]]},
		{"name":"","hash":"5dee22","data":[[0.5,0,-45],[0.5,0,-135],[1,0,-135],[1,0,-45],[0.75,0.25,-135],[0.75,0.25,-45],[0.75,0.25,135],[0.75,0.25,45],[1.25,0.25,135],[1.25,0.25,45],[1.5,0.5,45],[1.5,0.5,135],[1,0.5,45],[1,0.5,135],[1.25,0.25,-45],[1.25,0.25,-135],[0.25,0.25,-135],[0.25,0.25,135],[0.5,0.5,45],[0.5,0.5,135],[1.073223,0.676777,180],[1.073223,0.676777,90],[1.426777,0.676777,0],[1.426777,0.676777,-90],[0,0.5,-135],[0,0.5,135],[0,0.5,45],[0,0.5,-45],[2,0.5,135],[2,0.5,45],[1.75,0.25,-135],[1.75,0.25,-45]]},
		{"name":"","hash":"dd55dd","data":[[0.5,1.383883,135],[0.5,1.383883,45],[0,1.383883,45],[0,1.383883,135],[0.25,1.133883,45],[0.25,1.133883,135],[0.25,1.133883,-45],[0.25,1.133883,-135],[0.75,1.133883,-45],[0.75,1.133883,-135],[0.5,0.883883,-135],[0.5,0.883883,-45],[1,0.883883,-135],[1,0.883883,-45],[0.75,1.133883,135],[0.75,1.133883,45],[1,1.383883,135],[1,1.383883,45],[1.25,1.133883,-45],[1.25,1.133883,45],[1.073223,0.353553,-90],[1.073223,0.353553,180],[1.073223,0,90],[1.073223,0,0],[1.073223,0.707107,-90],[1.073223,0.707107,180],[1.073223,0.707107,90],[1.073223,0.707107,0],[1.073223,0.353553,0],[1.073223,0.353553,90],[1.073223,0,-90],[1.073223,0,180]]},
		{"name":"","hash":"19cbe5","data":[[0,0.353553,-90],[0,0.353553,180],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.707107,0,-90],[0.707107,0,0],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.53033,1.414214,90],[0.53033,1.414214,0],[0.53033,1.06066,-90],[0.53033,1.06066,0],[0.53033,1.06066,180],[0.53033,1.06066,90],[0.53033,1.767767,-90],[0.53033,1.767767,180],[0.53033,0.707107,-90],[0.53033,0.707107,180],[0.53033,0.707107,90],[0.53033,0.707107,0],[0.53033,1.767767,0],[0.53033,1.767767,90],[0.53033,1.414214,-90],[0.53033,1.414214,180]]},
		{"name":"","hash":"c44f2f","data":[[0,1.06066,0],[0,1.06066,-90],[0.353553,1.414214,-90],[0.353553,1.414214,0],[0,1.414214,-90],[0,1.414214,0],[0,1.414214,180],[0,1.414214,90],[0,0.707107,0],[0,0.707107,-90],[0,0.353553,-90],[0,0.353553,0],[0.353553,0.707107,-90],[0.353553,0.707107,0],[0,0.707107,180],[0,0.707107,90],[0.353553,1.767767,0],[0.353553,1.767767,-90],[0,1.767767,180],[0,1.767767,-90],[0,0.353553,180],[0,0.353553,90],[0,1.767767,90],[0,1.767767,0],[0,0,-90],[0,0,180],[0,0,90],[0,0,0],[0.323223,1.133883,135],[0.323223,1.133883,45],[0.073223,0.883883,-135],[0.073223,0.883883,-45]]},

		//136
		{"name":"","hash":"ae95bd","data":[[0.25,0.25,45],[0.25,0.25,-45],[0.25,0.75,-45],[0.25,0.75,45],[0,0.5,-45],[0,0.5,45],[0,0.5,-135],[0,0.5,135],[0.5,0.5,-135],[0.5,0.5,135],[0.25,0.75,135],[0.25,0.75,-135],[0.25,0.25,135],[0.25,0.25,-135],[0.5,0.5,45],[0.5,0.5,-45],[1,0.5,45],[1,0.5,-45],[0.75,0.25,-135],[0.75,0.25,-45],[1,0,-45],[1,0,-135],[1,0.5,-135],[1,0.5,135],[1.25,0.75,-135],[1.25,0.75,135],[1.25,0.75,45],[1.25,0.75,-45],[0.5,0,-45],[0.5,0,-135],[0.75,0.25,45],[0.75,0.25,135]]},
		{"name":"","hash":"fd0485","data":[[1.31066,1.103553,90],[1.31066,1.103553,0],[0.957107,1.457107,0],[0.957107,1.457107,90],[0.957107,1.103553,0],[0.957107,1.103553,90],[0.957107,1.103553,-90],[0.957107,1.103553,180],[1.31066,0.75,-90],[1.31066,0.75,180],[0.957107,0.75,180],[0.957107,0.75,-90],[1.31066,0.396447,180],[1.31066,0.396447,-90],[1.31066,0.75,90],[1.31066,0.75,0],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[0,0,90],[0,0,0],[0.53033,0.426777,-45],[0.53033,0.426777,-135],[0.78033,0.676777,-135],[0.78033,0.676777,135],[0.78033,0.676777,45],[0.78033,0.676777,-45],[0.28033,0.176777,-45],[0.28033,0.176777,-135],[0.53033,0.426777,45],[0.53033,0.426777,135]]},
		{"name":"","hash":"14f5d9","data":[[0.176777,0.853553,0],[0.176777,0.853553,-90],[0.53033,1.207107,-90],[0.53033,1.207107,0],[0.176777,1.207107,-90],[0.176777,1.207107,0],[0.176777,1.207107,180],[0.176777,1.207107,90],[0.353553,0.78033,-45],[0.353553,0.78033,-135],[0.103553,0.53033,-135],[0.103553,0.53033,-45],[0.603553,0.53033,-135],[0.603553,0.53033,-45],[0.353553,0.78033,135],[0.353553,0.78033,45],[0,0,180],[0,0,90],[0.353553,0,0],[0.353553,0,90],[0.53033,1.207107,180],[0.53033,1.207107,90],[0.53033,0.853553,-90],[0.53033,0.853553,180],[0.353553,0.353553,-90],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.353553,0,-90],[0.353553,0,180],[0.707107,0,0],[0.707107,0,90]]},
		{"name":"","hash":"3b03cf","data":[[1.03033,0,90],[1.03033,0,0],[0.676777,0.353553,0],[0.676777,0.353553,90],[0.676777,0,0],[0.676777,0,90],[0.676777,0,-90],[0.676777,0,180],[1.28033,0.603553,-90],[1.28033,0.603553,180],[0.926777,0.603553,180],[0.926777,0.603553,-90],[1.28033,0.25,180],[1.28033,0.25,-90],[1.28033,0.603553,90],[1.28033,0.603553,0],[0.5,0.78033,-45],[0.5,0.78033,-135],[0.25,1.03033,135],[0.25,1.03033,-135],[0.75,0.53033,135],[0.75,0.53033,45],[0.25,1.03033,45],[0.25,1.03033,-45],[0,1.28033,-135],[0,1.28033,135],[0,1.28033,45],[0,1.28033,-45],[0.75,0.53033,-135],[0.75,0.53033,-45],[0.5,0.78033,135],[0.5,0.78033,45]]},
		{"name":"","hash":"9d4d75","data":[[0.883883,0.5,-135],[0.883883,0.5,135],[0.883883,0,135],[0.883883,0,-135],[1.133883,0.25,135],[1.133883,0.25,-135],[1.133883,0.25,45],[1.133883,0.25,-45],[1.133883,0.75,45],[1.133883,0.75,-45],[1.383883,0.5,-45],[1.383883,0.5,45],[1.383883,1,-45],[1.383883,1,45],[1.133883,0.75,-135],[1.133883,0.75,135],[0.883883,1,-135],[0.883883,1,135],[1.133883,1.25,45],[1.133883,1.25,135],[0.707107,0.573223,-90],[0.707107,0.573223,180],[0.353553,0.573223,90],[0.353553,0.573223,0],[0,0.573223,-90],[0,0.573223,180],[0,0.573223,90],[0,0.573223,0],[0.353553,0.573223,-90],[0.353553,0.573223,180],[0.707107,0.573223,0],[0.707107,0.573223,90]]},
		{"name":"","hash":"c86eaf","data":[[0.53033,0.353553,90],[0.53033,0.353553,0],[0.176777,0.707107,0],[0.176777,0.707107,90],[0.176777,0.353553,0],[0.176777,0.353553,90],[0.176777,0.353553,-90],[0.176777,0.353553,180],[0.53033,0.707107,-90],[0.53033,0.707107,180],[0.176777,0.707107,180],[0.176777,0.707107,-90],[0.53033,0.353553,180],[0.53033,0.353553,-90],[0.53033,0.707107,90],[0.53033,0.707107,0],[0.353553,0,180],[0.353553,0,90],[0.707107,0,0],[0.707107,0,90],[0.53033,1.06066,90],[0.53033,1.06066,0],[0.53033,1.06066,-90],[0.53033,1.06066,180],[0.176777,1.06066,-90],[0.176777,1.06066,180],[0.176777,1.06066,90],[0.176777,1.06066,0],[0.353553,0,-90],[0.353553,0,0],[0,0,180],[0,0,90]]},
		{"name":"","hash":"023076","data":[[0.21967,0.53033,-90],[0.21967,0.53033,180],[0.573223,0.176777,180],[0.573223,0.176777,-90],[0.573223,0.53033,180],[0.573223,0.53033,-90],[0.573223,0.53033,90],[0.573223,0.53033,0],[0.926777,0.53033,0],[0.926777,0.53033,-90],[0.926777,0.176777,-90],[0.926777,0.176777,0],[1.28033,0.53033,-90],[1.28033,0.53033,0],[0.926777,0.53033,180],[0.926777,0.53033,90],[1.25,0.25,45],[1.25,0.25,-45],[1,0,-135],[1,0,-45],[0,0,-45],[0,0,-135],[0.25,0.25,-45],[0.25,0.25,-135],[1.426777,0.176777,-90],[1.426777,0.176777,180],[1.426777,0.176777,90],[1.426777,0.176777,0],[0.25,0.25,45],[0.25,0.25,135],[0.5,0,-45],[0.5,0,-135]]}

	]

};

export default section;
