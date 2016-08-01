'use strict';
/*global window */

var section = {

	id: 'birds-3',
	name: 'birds #3',
	data: [

		// birth
		// 77
		{"name":"","hash":"f6d97e","data":[[0.53033,0.883883,180],[0.53033,0.883883,90],[0.176777,0.53033,90],[0.176777,0.53033,180],[0.53033,0.53033,90],[0.53033,0.53033,180],[0.53033,0.53033,0],[0.53033,0.53033,-90],[0.25,0.853553,-135],[0.25,0.853553,135],[0,1.103553,135],[0,1.103553,-135],[0,0.603553,135],[0,0.603553,-135],[0.25,0.853553,45],[0.25,0.853553,-45],[0.5,1.103553,-135],[0.5,1.103553,135],[0.75,1.353553,45],[0.75,1.353553,135],[1.59099,0,0],[1.59099,0,-90],[0,1.353553,45],[0,1.353553,-45],[0.883883,0.53033,0],[0.883883,0.53033,-90],[0.883883,0.53033,180],[0.883883,0.53033,90],[1.237437,0.53033,0],[1.237437,0.53033,90],[1.237437,0.176777,-90],[1.237437,0.176777,180]]},
		{"name":"","hash":"dcbd4b","data":[[0.78033,0.957107,180],[0.78033,0.957107,90],[0.426777,0.603553,90],[0.426777,0.603553,180],[0.78033,0.603553,90],[0.78033,0.603553,180],[0.78033,0.603553,0],[0.78033,0.603553,-90],[0.25,0.676777,135],[0.25,0.676777,45],[0.5,0.926777,45],[0.5,0.926777,135],[0,0.926777,45],[0,0.926777,135],[0.25,0.676777,-45],[0.25,0.676777,-135],[1.664214,0.073223,0],[1.664214,0.073223,-90],[1.31066,0.073223,180],[1.31066,0.073223,-90],[1.133883,1.31066,0],[1.133883,1.31066,-90],[0.25,1.176777,45],[0.25,1.176777,-45],[1.133883,0.426777,-90],[1.133883,0.426777,180],[1.133883,0.426777,90],[1.133883,0.426777,0],[1.84099,0,-45],[1.84099,0,-135],[2.09099,0.25,45],[2.09099,0.25,135]]},
		{"name":"","hash":"e4d386","data":[[1.03033,0.603553,90],[1.03033,0.603553,0],[0.676777,0.957107,0],[0.676777,0.957107,90],[0.676777,0.603553,0],[0.676777,0.603553,90],[0.676777,0.603553,-90],[0.676777,0.603553,180],[0.25,0.926777,45],[0.25,0.926777,-45],[0.5,0.676777,-45],[0.5,0.676777,45],[0.5,1.176777,-45],[0.5,1.176777,45],[0.25,0.926777,-135],[0.25,0.926777,135],[1.883883,0,0],[1.883883,0,-90],[1.53033,0,180],[1.53033,0,-90],[0.5,1.426777,0],[0.5,1.426777,-90],[0.25,0.426777,-45],[0.25,0.426777,-135],[0,0.676777,-135],[0,0.676777,135],[0,0.676777,45],[0,0.676777,-45],[1.103553,0.426777,45],[1.103553,0.426777,135],[1.353553,0.176777,-45],[1.353553,0.176777,-135]]},
		{"name":"","hash":"174b22","data":[[1.56066,0.853553,135],[1.56066,0.853553,45],[1.06066,0.853553,45],[1.06066,0.853553,135],[1.31066,0.603553,45],[1.31066,0.603553,135],[1.31066,0.603553,-45],[1.31066,0.603553,-135],[0.78033,0.53033,90],[0.78033,0.53033,0],[1.133883,0.53033,0],[1.133883,0.53033,90],[0.78033,0.883883,0],[0.78033,0.883883,90],[0.78033,0.53033,-90],[0.78033,0.53033,180],[0.56066,1.353553,135],[0.56066,1.353553,45],[0.81066,1.103553,-45],[0.81066,1.103553,45],[0,0,135],[0,0,45],[1.81066,0.603553,-45],[1.81066,0.603553,-135],[0.426777,0.53033,-90],[0.426777,0.53033,180],[0.426777,0.53033,90],[0.426777,0.53033,0],[0.426777,0.176777,-90],[0.426777,0.176777,0],[0.073223,0.176777,180],[0.073223,0.176777,90]]},
		{"name":"","hash":"9a6467","data":[[1.737437,0.28033,45],[1.737437,0.28033,-45],[1.737437,0.78033,-45],[1.737437,0.78033,45],[1.487437,0.53033,-45],[1.487437,0.53033,45],[1.487437,0.53033,-135],[1.487437,0.53033,135],[1.06066,0.353553,90],[1.06066,0.353553,0],[1.414214,0.353553,0],[1.414214,0.353553,90],[1.06066,0.707107,0],[1.06066,0.707107,90],[1.06066,0.353553,-90],[1.06066,0.353553,180],[1.487437,1.03033,-135],[1.487437,1.03033,135],[1.737437,1.28033,45],[1.737437,1.28033,135],[0.707107,0.883883,-90],[0.707107,0.883883,180],[0,0,-90],[0,0,180],[0.707107,0.353553,-90],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.707107,0.353553,0],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.353553,0,-90],[0.353553,0,0]]},
		{"name":"","hash":"826f5c","data":[[1.06066,0.707107,0],[1.06066,0.707107,-90],[1.414214,1.06066,-90],[1.414214,1.06066,0],[1.06066,1.06066,-90],[1.06066,1.06066,0],[1.06066,1.06066,180],[1.06066,1.06066,90],[1.06066,1.414214,90],[1.06066,1.414214,0],[1.414214,1.414214,0],[1.414214,1.414214,90],[1.06066,1.767767,0],[1.06066,1.767767,90],[1.06066,1.414214,-90],[1.06066,1.414214,180],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[0.883883,1.944544,-90],[0.883883,1.944544,180],[0.707107,1.06066,180],[0.707107,1.06066,90],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.707107,0.707107,90],[0.707107,0.707107,0],[0.707107,0.353553,-90],[0.707107,0.353553,0],[0.353553,0.353553,180],[0.353553,0.353553,90]]},
		// 80
		{"name":"","hash":"9b5fab","data":[[0,0.926777,-45],[0,0.926777,-135],[0.5,0.926777,-135],[0.5,0.926777,-45],[0.25,1.176777,-135],[0.25,1.176777,-45],[0.25,1.176777,135],[0.25,1.176777,45],[0.25,0.676777,135],[0.25,0.676777,45],[0.5,0.926777,45],[0.5,0.926777,135],[0,0.926777,45],[0,0.926777,135],[0.25,0.676777,-45],[0.25,0.676777,-135],[0.75,0.676777,45],[0.75,0.676777,-45],[0.5,0.426777,-135],[0.5,0.426777,-45],[0.53033,0,0],[0.53033,0,-90],[0.25,1.426777,0],[0.25,1.426777,-90],[0.176777,0,180],[0.176777,0,90],[0.176777,0,0],[0.176777,0,-90],[0.25,0.176777,-45],[0.25,0.176777,-135],[0.5,0.426777,45],[0.5,0.426777,135]]},
		{"name":"","hash":"d6d9f8","data":[[0.75,0.5,-135],[0.75,0.5,135],[0.75,0,135],[0.75,0,-135],[1,0.25,135],[1,0.25,-135],[1,0.25,45],[1,0.25,-45],[0.5,0.25,45],[0.5,0.25,-45],[0.75,0,-45],[0.75,0,45],[0.75,0.5,-45],[0.75,0.5,45],[0.5,0.25,-135],[0.5,0.25,135],[1.426777,0.426777,0],[1.426777,0.426777,-90],[1.073223,0.426777,180],[1.073223,0.426777,-90],[0.625,0.875,135],[0.625,0.875,45],[1.75,0.5,135],[1.75,0.5,45],[1.5,0.25,-135],[1.5,0.25,135],[1.5,0.25,45],[1.5,0.25,-45],[0.25,0.5,135],[0.25,0.5,45],[0,0.25,-135],[0,0.25,-45]]},
		{"name":"","hash":"6277ae","data":[[0.707107,0.78033,-90],[0.707107,0.78033,180],[1.06066,0.426777,180],[1.06066,0.426777,-90],[1.06066,0.78033,180],[1.06066,0.78033,-90],[1.06066,0.78033,90],[1.06066,0.78033,0],[0.707107,1.133883,180],[0.707107,1.133883,90],[0.707107,1.487437,90],[0.707107,1.487437,180],[0.353553,1.133883,90],[0.353553,1.133883,180],[0.707107,1.133883,0],[0.707107,1.133883,-90],[1.237437,0,-45],[1.237437,0,-135],[0.987437,0.25,135],[0.987437,0.25,-135],[1.237437,1.487437,0],[1.237437,1.487437,-90],[0.883883,1.664214,0],[0.883883,1.664214,-90],[1.06066,1.133883,-90],[1.06066,1.133883,180],[1.06066,1.133883,90],[1.06066,1.133883,0],[0.353553,0.78033,-90],[0.353553,0.78033,0],[0,0.78033,180],[0,0.78033,90]]},
		{"name":"","hash":"d33449","data":[[0.957107,1.457107,180],[0.957107,1.457107,90],[0.603553,1.103553,90],[0.603553,1.103553,180],[0.957107,1.103553,90],[0.957107,1.103553,180],[0.957107,1.103553,0],[0.957107,1.103553,-90],[0.926777,0.676777,135],[0.926777,0.676777,45],[1.176777,0.926777,45],[1.176777,0.926777,135],[0.676777,0.926777,45],[0.676777,0.926777,135],[0.926777,0.676777,-45],[0.926777,0.676777,-135],[0,0,180],[0,0,90],[0.353553,0,0],[0.353553,0,90],[0.957107,1.81066,-90],[0.957107,1.81066,180],[0.53033,1.28033,-45],[0.53033,1.28033,-135],[0.426777,0.676777,-135],[0.426777,0.676777,135],[0.426777,0.676777,45],[0.426777,0.676777,-45],[0.176777,0.426777,-135],[0.176777,0.426777,135],[0.426777,0.176777,-45],[0.426777,0.176777,45]]},
		{"name":"","hash":"ffefd5","data":[[0.676777,0.926777,-135],[0.676777,0.926777,135],[0.676777,0.426777,135],[0.676777,0.426777,-135],[0.926777,0.676777,135],[0.926777,0.676777,-135],[0.926777,0.676777,45],[0.926777,0.676777,-45],[0.426777,0.676777,45],[0.426777,0.676777,-45],[0.676777,0.426777,-45],[0.676777,0.426777,45],[0.676777,0.926777,-45],[0.676777,0.926777,45],[0.426777,0.676777,-135],[0.426777,0.676777,135],[0.426777,0.176777,-45],[0.426777,0.176777,-135],[0.176777,0.426777,135],[0.176777,0.426777,-135],[0.676777,1.176777,-90],[0.676777,1.176777,180],[0,0,-90],[0,0,180],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[1.426777,0.676777,-135],[1.426777,0.676777,-45],[1.176777,0.926777,135],[1.176777,0.926777,45]]},
		{"name":"","hash":"996195","data":[[0.676777,0.426777,45],[0.676777,0.426777,-45],[0.676777,0.926777,-45],[0.676777,0.926777,45],[0.426777,0.676777,-45],[0.426777,0.676777,45],[0.426777,0.676777,-135],[0.426777,0.676777,135],[0.926777,0.676777,-135],[0.926777,0.676777,135],[0.676777,0.926777,135],[0.676777,0.926777,-135],[0.676777,0.426777,135],[0.676777,0.426777,-135],[0.926777,0.676777,45],[0.926777,0.676777,-45],[0.426777,0.176777,-45],[0.426777,0.176777,-135],[0.176777,0.426777,135],[0.176777,0.426777,-135],[0.551777,1.301777,135],[0.551777,1.301777,45],[0,0,180],[0,0,90],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[1.176777,0.426777,-45],[1.176777,0.426777,45],[0.926777,0.176777,-135],[0.926777,0.176777,135]]},
		{"name":"","hash":"65e304","data":[[0.75,0,45],[0.75,0,-45],[0.75,0.5,-45],[0.75,0.5,45],[0.5,0.25,-45],[0.5,0.25,45],[0.5,0.25,-135],[0.5,0.25,135],[1,0.25,-135],[1,0.25,135],[0.75,0.5,135],[0.75,0.5,-135],[0.75,0,135],[0.75,0,-135],[1,0.25,45],[1,0.25,-45],[0.25,0.5,-135],[0.25,0.5,135],[0.5,0.75,45],[0.5,0.75,135],[0,0.25,-135],[0,0.25,135],[0.5,1,135],[0.5,1,45],[0.25,0,-135],[0.25,0,135],[0.25,0,45],[0.25,0,-45],[1.5,0.25,-135],[1.5,0.25,-45],[1.25,0.5,135],[1.25,0.5,45]]},
		// 81
		{"name":"","hash":"4e98c6","data":[[0.676777,1.103553,-135],[0.676777,1.103553,135],[0.676777,0.603553,135],[0.676777,0.603553,-135],[0.926777,0.853553,135],[0.926777,0.853553,-135],[0.926777,0.853553,45],[0.926777,0.853553,-45],[0.426777,0.853553,45],[0.426777,0.853553,-45],[0.676777,0.603553,-45],[0.676777,0.603553,45],[0.676777,1.103553,-45],[0.676777,1.103553,45],[0.426777,0.853553,-135],[0.426777,0.853553,135],[0.353553,1.03033,0],[0.353553,1.03033,-90],[0,1.03033,180],[0,1.03033,-90],[0.676777,1.603553,135],[0.676777,1.603553,45],[1.176777,0.25,45],[1.176777,0.25,-45],[0.926777,0,-135],[0.926777,0,135],[0.926777,0,45],[0.926777,0,-45],[0.853553,0.176777,0],[0.853553,0.176777,-90],[0.853553,0.53033,90],[0.853553,0.53033,180]]},
		{"name":"","hash":"a54391","data":[[0.853553,0.176777,0],[0.853553,0.176777,-90],[1.207107,0.53033,-90],[1.207107,0.53033,0],[0.853553,0.53033,-90],[0.853553,0.53033,0],[0.853553,0.53033,180],[0.853553,0.53033,90],[0.426777,0.5,45],[0.426777,0.5,-45],[0.676777,0.25,-45],[0.676777,0.25,45],[0.676777,0.75,-45],[0.676777,0.75,45],[0.426777,0.5,-135],[0.426777,0.5,135],[0.426777,0,-45],[0.426777,0,-135],[0.176777,0.25,135],[0.176777,0.25,-135],[0.551777,1.125,135],[0.551777,1.125,45],[0,0.676777,90],[0,0.676777,0],[0,0.323223,-90],[0,0.323223,180],[0,0.323223,90],[0,0.323223,0],[1.56066,0.883883,-90],[1.56066,0.883883,0],[1.207107,0.883883,180],[1.207107,0.883883,90]]},
		{"name":"","hash":"f924f1","data":[[0.676777,0.426777,45],[0.676777,0.426777,-45],[0.676777,0.926777,-45],[0.676777,0.926777,45],[0.426777,0.676777,-45],[0.426777,0.676777,45],[0.426777,0.676777,-135],[0.426777,0.676777,135],[0.853553,0.707107,0],[0.853553,0.707107,-90],[0.853553,0.353553,-90],[0.853553,0.353553,0],[1.207107,0.707107,-90],[1.207107,0.707107,0],[0.853553,0.707107,180],[0.853553,0.707107,90],[0.426777,0.176777,-45],[0.426777,0.176777,-135],[0.176777,0.426777,135],[0.176777,0.426777,-135],[0.676777,1.426777,135],[0.676777,1.426777,45],[0,0,-90],[0,0,180],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[1.133883,0.883883,-45],[1.133883,0.883883,-135],[1.383883,1.133883,45],[1.383883,1.133883,135]]},
		{"name":"","hash":"8b8980","data":[[0.53033,0.75,-135],[0.53033,0.75,135],[0.53033,0.25,135],[0.53033,0.25,-135],[0.78033,0.5,135],[0.78033,0.5,-135],[0.78033,0.5,45],[0.78033,0.5,-45],[0.353553,0.53033,-90],[0.353553,0.53033,180],[0,0.53033,180],[0,0.53033,-90],[0.353553,0.176777,180],[0.353553,0.176777,-90],[0.353553,0.53033,90],[0.353553,0.53033,0],[1.03033,0.25,45],[1.03033,0.25,-45],[0.78033,0,-135],[0.78033,0,-45],[0.65533,1.125,135],[0.65533,1.125,45],[1.207107,0.676777,180],[1.207107,0.676777,90],[1.207107,0.323223,180],[1.207107,0.323223,90],[1.207107,0.323223,0],[1.207107,0.323223,-90],[0.03033,0.957107,45],[0.03033,0.957107,135],[0.28033,0.707107,-45],[0.28033,0.707107,-135]]},
		{"name":"","hash":"dd70b2","data":[[0.676777,0.25,45],[0.676777,0.25,-45],[0.676777,0.75,-45],[0.676777,0.75,45],[0.426777,0.5,-45],[0.426777,0.5,45],[0.426777,0.5,-135],[0.426777,0.5,135],[0.853553,0.53033,0],[0.853553,0.53033,-90],[0.853553,0.176777,-90],[0.853553,0.176777,0],[1.207107,0.53033,-90],[1.207107,0.53033,0],[0.853553,0.53033,180],[0.853553,0.53033,90],[0.426777,0,-45],[0.426777,0,-135],[0.176777,0.25,135],[0.176777,0.25,-135],[0.551777,1.125,135],[0.551777,1.125,45],[0,0.53033,90],[0,0.53033,0],[0,0.176777,-90],[0,0.176777,180],[0,0.176777,90],[0,0.176777,0],[1.176777,0.957107,135],[1.176777,0.957107,45],[0.926777,0.707107,-135],[0.926777,0.707107,-45]]},
		{"name":"","hash":"f6a5d8","data":[[0.75,0.926777,45],[0.75,0.926777,-45],[0.75,1.426777,-45],[0.75,1.426777,45],[0.5,1.176777,-45],[0.5,1.176777,45],[0.5,1.176777,-135],[0.5,1.176777,135],[1,0.676777,-135],[1,0.676777,135],[0.75,0.926777,135],[0.75,0.926777,-135],[0.75,0.426777,135],[0.75,0.426777,-135],[1,0.676777,45],[1,0.676777,-45],[1.25,0.426777,45],[1.25,0.426777,-45],[1,0.176777,-135],[1,0.176777,-45],[0.75,1.676777,0],[0.75,1.676777,-90],[1.426777,0,0],[1.426777,0,-90],[1.073223,0,-90],[1.073223,0,180],[1.073223,0,90],[1.073223,0,0],[0.25,1.426777,135],[0.25,1.426777,45],[0,1.176777,-135],[0,1.176777,-45]]},
		{"name":"","hash":"d26056","data":[[1.414214,0.853553,180],[1.414214,0.853553,90],[1.06066,0.5,90],[1.06066,0.5,180],[1.414214,0.5,90],[1.414214,0.5,180],[1.414214,0.5,0],[1.414214,0.5,-90],[0.707107,0.5,0],[0.707107,0.5,-90],[0.707107,0.146447,-90],[0.707107,0.146447,0],[1.06066,0.5,-90],[1.06066,0.5,0],[0.707107,0.5,180],[0.707107,0.5,90],[0.353553,0.146447,-90],[0.353553,0.146447,180],[0.353553,0.5,90],[0.353553,0.5,180],[0.883883,0.926777,-135],[0.883883,0.926777,135],[0,0,90],[0,0,0],[0.176777,0.073223,-135],[0.176777,0.073223,135],[0.176777,0.073223,45],[0.176777,0.073223,-45],[1.767767,0.5,0],[1.767767,0.5,90],[1.767767,0.146447,-90],[1.767767,0.146447,180]]},
		// 82
		{"name":"","hash":"eca30d","data":[[0.53033,0.75,-135],[0.53033,0.75,135],[0.53033,0.25,135],[0.53033,0.25,-135],[0.78033,0.5,135],[0.78033,0.5,-135],[0.78033,0.5,45],[0.78033,0.5,-45],[0.353553,0.53033,-90],[0.353553,0.53033,180],[0,0.53033,180],[0,0.53033,-90],[0.353553,0.176777,180],[0.353553,0.176777,-90],[0.353553,0.53033,90],[0.353553,0.53033,0],[1.03033,0.25,45],[1.03033,0.25,-45],[0.78033,0,-135],[0.78033,0,-45],[1.56066,0.323223,0],[1.56066,0.323223,-90],[0.65533,1.125,135],[0.65533,1.125,45],[1.207107,0.323223,-90],[1.207107,0.323223,180],[1.207107,0.323223,90],[1.207107,0.323223,0],[0.03033,0.957107,45],[0.03033,0.957107,135],[0.28033,0.707107,-45],[0.28033,0.707107,-135]]},
		{"name":"","hash":"f3f890","data":[[0.573223,0.53033,-45],[0.573223,0.53033,-135],[1.073223,0.53033,-135],[1.073223,0.53033,-45],[0.823223,0.78033,-135],[0.823223,0.78033,-45],[0.823223,0.78033,135],[0.823223,0.78033,45],[0.5,0.353553,0],[0.5,0.353553,-90],[0.5,0,-90],[0.5,0,0],[0.853553,0.353553,-90],[0.853553,0.353553,0],[0.5,0.353553,180],[0.5,0.353553,90],[0.073223,0.323223,135],[0.073223,0.323223,45],[0.323223,0.073223,-45],[0.323223,0.073223,45],[0.698223,1.15533,135],[0.698223,1.15533,45],[0,0.853553,180],[0,0.853553,90],[0,0.5,-90],[0,0.5,180],[0,0.5,90],[0,0.5,0],[1.448223,0.65533,-135],[1.448223,0.65533,-45],[1.198223,0.90533,135],[1.198223,0.90533,45]]},
		{"name":"","hash":"2e611c","data":[[1.06066,0.426777,90],[1.06066,0.426777,0],[0.707107,0.78033,0],[0.707107,0.78033,90],[0.707107,0.426777,0],[0.707107,0.426777,90],[0.707107,0.426777,-90],[0.707107,0.426777,180],[1.03033,0,135],[1.03033,0,45],[1.28033,0.25,45],[1.28033,0.25,135],[0.78033,0.25,45],[0.78033,0.25,135],[1.03033,0,-45],[1.03033,0,-135],[0.28033,0.75,135],[0.28033,0.75,45],[0.53033,0.5,-45],[0.53033,0.5,45],[1.78033,0.25,135],[1.78033,0.25,45],[0.65533,1.082107,135],[0.65533,1.082107,45],[1.53033,0,-135],[1.53033,0,135],[1.53033,0,45],[1.53033,0,-45],[0,0.926777,-90],[0,0.926777,180],[0.353553,0.926777,0],[0.353553,0.926777,90]]},
		{"name":"","hash":"12876d","data":[[1,0.25,-45],[1,0.25,-135],[1.5,0.25,-135],[1.5,0.25,-45],[1.25,0.5,-135],[1.25,0.5,-45],[1.25,0.5,135],[1.25,0.5,45],[0.75,0,135],[0.75,0,45],[1,0.25,45],[1,0.25,135],[0.5,0.25,45],[0.5,0.25,135],[0.75,0,-45],[0.75,0,-135],[1.926777,0.426777,0],[1.926777,0.426777,-90],[1.573223,0.426777,180],[1.573223,0.426777,-90],[0,0.25,-135],[0,0.25,135],[1.125,0.875,135],[1.125,0.875,45],[0.25,0,-135],[0.25,0,135],[0.25,0,45],[0.25,0,-45],[0.926777,0.426777,-90],[0.926777,0.426777,0],[0.573223,0.426777,180],[0.573223,0.426777,90]]},
		{"name":"","hash":"4c5e86","data":[[0.53033,0.75,-135],[0.53033,0.75,135],[0.53033,0.25,135],[0.53033,0.25,-135],[0.78033,0.5,135],[0.78033,0.5,-135],[0.78033,0.5,45],[0.78033,0.5,-45],[0.353553,0.53033,-90],[0.353553,0.53033,180],[0,0.53033,180],[0,0.53033,-90],[0.353553,0.176777,180],[0.353553,0.176777,-90],[0.353553,0.53033,90],[0.353553,0.53033,0],[1.03033,0.25,45],[1.03033,0.25,-45],[0.78033,0,-135],[0.78033,0,-45],[1.207107,0.676777,180],[1.207107,0.676777,90],[0.65533,1.125,135],[0.65533,1.125,45],[1.207107,0.323223,0],[1.207107,0.323223,-90],[1.207107,0.323223,180],[1.207107,0.323223,90],[0.03033,0.957107,45],[0.03033,0.957107,135],[0.28033,0.707107,-45],[0.28033,0.707107,-135]]},
		{"name":"","hash":"bdb3e9","data":[[0.78033,0,0],[0.78033,0,-90],[1.133883,0.353553,-90],[1.133883,0.353553,0],[0.78033,0.353553,-90],[0.78033,0.353553,0],[0.78033,0.353553,180],[0.78033,0.353553,90],[0.78033,0.707107,180],[0.78033,0.707107,90],[0.78033,1.06066,90],[0.78033,1.06066,180],[0.426777,0.707107,90],[0.426777,0.707107,180],[0.78033,0.707107,0],[0.78033,0.707107,-90],[1.207107,0.53033,-45],[1.207107,0.53033,-135],[0.957107,0.78033,135],[0.957107,0.78033,-135],[0,1.03033,-135],[0,1.03033,135],[0.832107,1.362437,135],[0.832107,1.362437,45],[0.25,0.78033,-135],[0.25,0.78033,135],[0.25,0.78033,45],[0.25,0.78033,-45],[1.457107,0.78033,45],[1.457107,0.78033,135],[1.707107,0.53033,-45],[1.707107,0.53033,-135]]},
		// 83
		{"name":"","hash":"fdbbe2","data":[[0.853553,0.25,135],[0.853553,0.25,45],[0.353553,0.25,45],[0.353553,0.25,135],[0.603553,0,45],[0.603553,0,135],[0.603553,0,-45],[0.603553,0,-135],[0.25,0.5,-45],[0.25,0.5,-135],[0,0.25,-135],[0,0.25,-45],[0.5,0.25,-135],[0.5,0.25,-45],[0.25,0.5,135],[0.25,0.5,45],[1.457107,0.25,0],[1.457107,0.25,-90],[1.103553,0.25,180],[1.103553,0.25,-90],[0.125,0.875,135],[0.125,0.875,45],[0.573223,0.853553,-135],[0.573223,0.853553,135],[1.103553,0,-135],[1.103553,0,135],[1.103553,0,45],[1.103553,0,-45],[0.573223,0.426777,-90],[0.573223,0.426777,180],[0.926777,0.426777,0],[0.926777,0.426777,90]]},
		{"name":"","hash":"dc548a","data":[[0.853553,0.176777,0],[0.853553,0.176777,-90],[1.207107,0.53033,-90],[1.207107,0.53033,0],[0.853553,0.53033,-90],[0.853553,0.53033,0],[0.853553,0.53033,180],[0.853553,0.53033,90],[0.426777,0.5,45],[0.426777,0.5,-45],[0.676777,0.25,-45],[0.676777,0.25,45],[0.676777,0.75,-45],[0.676777,0.75,45],[0.426777,0.5,-135],[0.426777,0.5,135],[0.426777,0,-45],[0.426777,0,-135],[0.176777,0.25,135],[0.176777,0.25,-135],[0,0.853553,180],[0,0.853553,90],[0.551777,1.125,135],[0.551777,1.125,45],[0,0.5,-90],[0,0.5,180],[0,0.5,90],[0,0.5,0],[1.176777,0.957107,135],[1.176777,0.957107,45],[0.926777,0.707107,-135],[0.926777,0.707107,-45]]},
		{"name":"","hash":"01eedd","data":[[0.853553,0,45],[0.853553,0,-45],[0.853553,0.5,-45],[0.853553,0.5,45],[0.603553,0.25,-45],[0.603553,0.25,45],[0.603553,0.25,-135],[0.603553,0.25,135],[1.103553,0.25,-135],[1.103553,0.25,135],[0.853553,0.5,135],[0.853553,0.5,-135],[0.853553,0,135],[0.853553,0,-135],[1.103553,0.25,45],[1.103553,0.25,-45],[0.53033,0.426777,0],[0.53033,0.426777,-90],[0.176777,0.426777,180],[0.176777,0.426777,-90],[1.603553,0.25,135],[1.603553,0.25,45],[0.978553,0.875,135],[0.978553,0.875,45],[1.353553,0,-135],[1.353553,0,135],[1.353553,0,45],[1.353553,0,-45],[0,0.78033,-90],[0,0.78033,180],[0.353553,0.78033,0],[0.353553,0.78033,90]]},
		{"name":"","hash":"11a59f","data":[[0.5,0.75,-135],[0.5,0.75,135],[0.5,0.25,135],[0.5,0.25,-135],[0.75,0.5,135],[0.75,0.5,-135],[0.75,0.5,45],[0.75,0.5,-45],[0.25,0.5,45],[0.25,0.5,-45],[0.5,0.25,-45],[0.5,0.25,45],[0.5,0.75,-45],[0.5,0.75,45],[0.25,0.5,-135],[0.25,0.5,135],[1.176777,0.676777,0],[1.176777,0.676777,-90],[0.823223,0.676777,180],[0.823223,0.676777,-90],[0.375,1.125,135],[0.375,1.125,45],[0,0.25,135],[0,0.25,45],[0.25,0,-135],[0.25,0,135],[0.25,0,45],[0.25,0,-45],[1.146447,1.103553,135],[1.146447,1.103553,45],[0.896447,0.853553,-135],[0.896447,0.853553,-45]]},
		{"name":"","hash":"bff5c8","data":[[0.633883,0.5,135],[0.633883,0.5,45],[0.133883,0.5,45],[0.133883,0.5,135],[0.383883,0.25,45],[0.383883,0.25,135],[0.383883,0.25,-45],[0.383883,0.25,-135],[0.353553,0.676777,90],[0.353553,0.676777,0],[0.707107,0.676777,0],[0.707107,0.676777,90],[0.353553,1.03033,0],[0.353553,1.03033,90],[0.353553,0.676777,-90],[0.353553,0.676777,180],[0.883883,0.25,45],[0.883883,0.25,-45],[0.633883,0,-135],[0.633883,0,-45],[1.414214,0.176777,0],[1.414214,0.176777,-90],[0.301777,1.332107,135],[0.301777,1.332107,45],[1.06066,0.176777,-90],[1.06066,0.176777,180],[1.06066,0.176777,90],[1.06066,0.176777,0],[0,1.03033,0],[0,1.03033,90],[0,0.676777,-90],[0,0.676777,180]]},
		{"name":"","hash":"d211f2","data":[[1.103553,0.25,-45],[1.103553,0.25,-135],[1.603553,0.25,-135],[1.603553,0.25,-45],[1.353553,0.5,-135],[1.353553,0.5,-45],[1.353553,0.5,135],[1.353553,0.5,45],[0.78033,0.53033,0],[0.78033,0.53033,-90],[0.78033,0.176777,-90],[0.78033,0.176777,0],[1.133883,0.53033,-90],[1.133883,0.53033,0],[0.78033,0.53033,180],[0.78033,0.53033,90],[0,0.353553,135],[0,0.353553,45],[0.25,0.103553,-45],[0.25,0.103553,45],[1.31066,0.957107,-135],[1.31066,0.957107,135],[0.78033,0.883883,-90],[0.78033,0.883883,180],[0.426777,0.176777,-90],[0.426777,0.176777,180],[0.426777,0.176777,90],[0.426777,0.176777,0],[1.103553,0.25,135],[1.103553,0.25,45],[0.853553,0,-135],[0.853553,0,-45]]},

		{"name":"","hash":"4e1331","data":[[0.853553,0.573223,-90],[0.853553,0.573223,180],[1.207107,0.21967,180],[1.207107,0.21967,-90],[1.207107,0.573223,180],[1.207107,0.573223,-90],[1.207107,0.573223,90],[1.207107,0.573223,0],[0.75,0.25,-135],[0.75,0.25,135],[0.5,0.5,135],[0.5,0.5,-135],[0.5,0,135],[0.5,0,-135],[0.75,0.25,45],[0.75,0.25,-45],[0.5,0.853553,45],[0.5,0.853553,-45],[0.25,0.603553,-135],[0.25,0.603553,-45],[1.03033,0.926777,0],[1.03033,0.926777,-90],[0,0.603553,135],[0,0.603553,45],[0.676777,0.926777,-90],[0.676777,0.926777,180],[0.676777,0.926777,90],[0.676777,0.926777,0],[1.457107,1.103553,135],[1.457107,1.103553,45],[1.207107,0.853553,-135],[1.207107,0.853553,-45]]},
		{"name":"","hash":"5cbeb0","data":[[0.457107,0.353553,180],[0.457107,0.353553,90],[0.103553,0,90],[0.103553,0,180],[0.457107,0,90],[0.457107,0,180],[0.457107,0,0],[0.457107,0,-90],[1.133883,1.28033,-135],[1.133883,1.28033,135],[0.883883,1.53033,135],[0.883883,1.53033,-135],[0.883883,1.03033,135],[0.883883,1.03033,-135],[1.133883,1.28033,45],[1.133883,1.28033,-45],[0,1.133883,90],[0,1.133883,0],[0,0.78033,-90],[0,0.78033,0],[1.133883,0.53033,135],[1.133883,0.53033,45],[0.707107,0.957107,90],[0.707107,0.957107,0],[0.353553,0.957107,-90],[0.353553,0.957107,180],[0.353553,0.957107,90],[0.353553,0.957107,0],[0.633883,0.78033,45],[0.633883,0.78033,135],[0.883883,0.53033,-45],[0.883883,0.53033,-135]]}

	]

};

export default section;