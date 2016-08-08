'use strict';
/*global window */

var section = {

	id: 'weapons',
	name: 'weapons',
	data: [

		// 121
		{"name":"","hash":"fd6154","data":[[0,0.883883,-90],[0,0.883883,180],[0.353553,0.53033,180],[0.353553,0.53033,-90],[0.353553,0.883883,180],[0.353553,0.883883,-90],[0.353553,0.883883,90],[0.353553,0.883883,0],[0.707107,0.176777,180],[0.707107,0.176777,90],[0.707107,0.53033,90],[0.707107,0.53033,180],[0.353553,0.176777,90],[0.353553,0.176777,180],[0.707107,0.176777,0],[0.707107,0.176777,-90],[0.707107,0.883883,90],[0.707107,0.883883,0],[0.707107,0.53033,-90],[0.707107,0.53033,0],[1.414214,0.176777,90],[1.414214,0.176777,0],[2.017767,0.073223,-90],[2.017767,0.073223,180],[1.06066,0.176777,-90],[1.06066,0.176777,180],[1.06066,0.176777,90],[1.06066,0.176777,0],[1.59099,0.25,45],[1.59099,0.25,135],[1.84099,0,-45],[1.84099,0,-135]]},
		{"name":"","hash":"3f1633","data":[[1.414214,0.353553,180],[1.414214,0.353553,90],[1.06066,0,90],[1.06066,0,180],[1.414214,0,90],[1.414214,0,180],[1.414214,0,0],[1.414214,0,-90],[1.767767,0.707107,0],[1.767767,0.707107,-90],[1.767767,0.353553,-90],[1.767767,0.353553,0],[2.12132,0.707107,-90],[2.12132,0.707107,0],[1.767767,0.707107,180],[1.767767,0.707107,90],[0.883883,0.073223,-135],[0.883883,0.073223,135],[1.133883,0.323223,45],[1.133883,0.323223,135],[0.353553,0,180],[0.353553,0,90],[0,0,0],[0,0,-90],[0.707107,0,-90],[0.707107,0,180],[0.707107,0,90],[0.707107,0,0],[0.353553,0,-90],[0.353553,0,0],[0,0,180],[0,0,90]]},
		{"name":"","hash":"e39faa","data":[[0.25,1,45],[0.25,1,-45],[0.25,1.5,-45],[0.25,1.5,45],[0,1.25,-45],[0,1.25,45],[0,1.25,-135],[0,1.25,135],[0.25,2,-135],[0.25,2,135],[0,2.25,135],[0,2.25,-135],[0,1.75,135],[0,1.75,-135],[0.25,2,45],[0.25,2,-45],[0.426777,1.28033,90],[0.426777,1.28033,0],[0.426777,0.926777,-90],[0.426777,0.926777,0],[0.75,0.5,45],[0.75,0.5,-45],[1.103553,0,-135],[1.103553,0,135],[0.5,0.75,-135],[0.5,0.75,135],[0.5,0.75,45],[0.5,0.75,-45],[0.926777,0.426777,0],[0.926777,0.426777,90],[0.926777,0.073223,-90],[0.926777,0.073223,180]]},
		{"name":"","hash":"ad2fff","data":[[1,0.78033,180],[1,0.78033,90],[0.646447,0.426777,90],[0.646447,0.426777,180],[1,0.426777,90],[1,0.426777,180],[1,0.426777,0],[1,0.426777,-90],[1.353553,0.78033,0],[1.353553,0.78033,-90],[1.353553,0.426777,-90],[1.353553,0.426777,0],[1.707107,0.78033,-90],[1.707107,0.78033,0],[1.353553,0.78033,180],[1.353553,0.78033,90],[0.926777,0.25,135],[0.926777,0.25,45],[1.176777,0,-45],[1.176777,0,45],[0.176777,0,-45],[0.176777,0,-135],[0,0.073223,0],[0,0.073223,-90],[1.353553,0.073223,-90],[1.353553,0.073223,180],[1.353553,0.073223,90],[1.353553,0.073223,0],[0.426777,0.25,45],[0.426777,0.25,135],[0.676777,0,-45],[0.676777,0,-135]]},
		{"name":"","hash":"026060","data":[[0.633883,0.176777,-45],[0.633883,0.176777,-135],[1.133883,0.176777,-135],[1.133883,0.176777,-45],[0.883883,0.426777,-135],[0.883883,0.426777,-45],[0.883883,0.426777,135],[0.883883,0.426777,45],[0.353553,1.207107,-90],[0.353553,1.207107,180],[0,1.207107,180],[0,1.207107,-90],[0.353553,0.853553,180],[0.353553,0.853553,-90],[0.353553,1.207107,90],[0.353553,1.207107,0],[0.707107,0.853553,90],[0.707107,0.853553,0],[0.707107,0.5,-90],[0.707107,0.5,0],[0.56066,0,-90],[0.56066,0,180],[1.56066,0.353553,-90],[1.56066,0.353553,180],[1.914214,0.353553,-90],[1.914214,0.353553,180],[1.914214,0.353553,90],[1.914214,0.353553,0],[1.207107,0.353553,-90],[1.207107,0.353553,180],[1.56066,0.353553,0],[1.56066,0.353553,90]]},
		{"name":"","hash":"b4c1b9","data":[[1.633883,0.176777,90],[1.633883,0.176777,0],[1.28033,0.53033,0],[1.28033,0.53033,90],[1.28033,0.176777,0],[1.28033,0.176777,90],[1.28033,0.176777,-90],[1.28033,0.176777,180],[1.633883,0.883883,0],[1.633883,0.883883,-90],[1.633883,0.53033,-90],[1.633883,0.53033,0],[1.987437,0.883883,-90],[1.987437,0.883883,0],[1.633883,0.883883,180],[1.633883,0.883883,90],[1.28033,0.53033,-90],[1.28033,0.53033,180],[1.28033,0.883883,90],[1.28033,0.883883,180],[0.5,0,-45],[0.5,0,-135],[0.573223,0.176777,-90],[0.573223,0.176777,180],[0.926777,0.176777,-90],[0.926777,0.176777,180],[0.926777,0.176777,90],[0.926777,0.176777,0],[0.25,0.25,135],[0.25,0.25,45],[0,0,-135],[0,0,-45]]},
		{"name":"","hash":"01745c","data":[[0.573223,0.5,135],[0.573223,0.5,45],[0.073223,0.5,45],[0.073223,0.5,135],[0.323223,0.25,45],[0.323223,0.25,135],[0.323223,0.25,-45],[0.323223,0.25,-135],[0,0.676777,90],[0,0.676777,0],[0.353553,0.676777,0],[0.353553,0.676777,90],[0,1.03033,0],[0,1.03033,90],[0,0.676777,-90],[0,0.676777,180],[0.823223,0.25,45],[0.823223,0.25,-45],[0.573223,0,-135],[0.573223,0,-45],[0.823223,0.25,-135],[0.823223,0.25,135],[1.75,0.073223,-90],[1.75,0.073223,180],[1.073223,0,-135],[1.073223,0,135],[1.073223,0,45],[1.073223,0,-45],[1.323223,0.25,45],[1.323223,0.25,135],[1.573223,0,-45],[1.573223,0,-135]]},

		// 122
		{"name":"","hash":"4ab960","data":[[0.353553,1.06066,180],[0.353553,1.06066,90],[0,0.707107,90],[0,0.707107,180],[0.353553,0.707107,90],[0.353553,0.707107,180],[0.353553,0.707107,0],[0.353553,0.707107,-90],[0,0.353553,0],[0,0.353553,-90],[0,0,-90],[0,0,0],[0.353553,0.353553,-90],[0.353553,0.353553,0],[0,0.353553,180],[0,0.353553,90],[0.78033,1.237437,-45],[0.78033,1.237437,-135],[0.53033,1.487437,135],[0.53033,1.487437,-135],[0.78033,1.237437,135],[0.78033,1.237437,45],[0.53033,1.487437,45],[0.53033,1.487437,-45],[0.90533,1.612437,-45],[0.90533,1.612437,-135],[0.90533,1.612437,135],[0.90533,1.612437,45],[0.90533,2.112437,-135],[0.90533,2.112437,135],[1.15533,1.862437,-45],[1.15533,1.862437,45]]},
		{"name":"","hash":"129942","data":[[0.853553,0,-45],[0.853553,0,-135],[1.353553,0,-135],[1.353553,0,-45],[1.103553,0.25,-135],[1.103553,0.25,-45],[1.103553,0.25,135],[1.103553,0.25,45],[1.603553,0.25,135],[1.603553,0.25,45],[1.853553,0.5,45],[1.853553,0.5,135],[1.353553,0.5,45],[1.353553,0.5,135],[1.603553,0.25,-45],[1.603553,0.25,-135],[0.603553,0.25,-135],[0.603553,0.25,135],[0.853553,0.5,45],[0.853553,0.5,135],[0.603553,0,45],[0.603553,0,-45],[0,0.25,45],[0,0.25,-45],[0.176777,0.25,-90],[0.176777,0.25,180],[0.176777,0.25,90],[0.176777,0.25,0],[0.603553,0.5,-45],[0.603553,0.5,45],[0.353553,0.25,-135],[0.353553,0.25,135]]},
		{"name":"","hash":"e81cb1","data":[[0.25,0,-45],[0.25,0,-135],[0.75,0,-135],[0.75,0,-45],[0.5,0.25,-135],[0.5,0.25,-45],[0.5,0.25,135],[0.5,0.25,45],[1,0.25,45],[1,0.25,-45],[1.25,0,-45],[1.25,0,45],[1.25,0.5,-45],[1.25,0.5,45],[1,0.25,-135],[1,0.25,135],[1.78033,0.426777,90],[1.78033,0.426777,0],[1.78033,0.073223,-90],[1.78033,0.073223,0],[0,0.25,135],[0,0.25,45],[0.75,0.5,135],[0.75,0.5,45],[1.426777,0.25,-90],[1.426777,0.25,180],[1.426777,0.25,90],[1.426777,0.25,0],[0,0.25,-45],[0,0.25,-135],[0.25,0.5,45],[0.25,0.5,135]]},
		{"name":"","hash":"eb5fec","data":[[1.03033,0.707107,90],[1.03033,0.707107,0],[0.676777,1.06066,0],[0.676777,1.06066,90],[0.676777,0.707107,0],[0.676777,0.707107,90],[0.676777,0.707107,-90],[0.676777,0.707107,180],[1.03033,0.353553,-90],[1.03033,0.353553,180],[0.676777,0.353553,180],[0.676777,0.353553,-90],[1.03033,0,180],[1.03033,0,-90],[1.03033,0.353553,90],[1.03033,0.353553,0],[0.25,1.237437,45],[0.25,1.237437,-45],[0,0.987437,-135],[0,0.987437,-45],[0,1.487437,45],[0,1.487437,-45],[0,1.487437,-135],[0,1.487437,135],[0.5,1.487437,-135],[0.5,1.487437,135],[0.5,1.487437,45],[0.5,1.487437,-45],[0.25,1.237437,-135],[0.25,1.237437,135],[0.5,0.987437,-45],[0.5,0.987437,45]]},
		{"name":"","hash":"8680f7","data":[[0.707107,0,0],[0.707107,0,-90],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,-90],[0.707107,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.353553,0,180],[0.353553,0,90],[0.353553,0.353553,90],[0.353553,0.353553,180],[0,0,90],[0,0,180],[0.353553,0,0],[0.353553,0,-90],[1.133883,0.883883,135],[1.133883,0.883883,45],[1.383883,0.633883,-45],[1.383883,0.633883,45],[0.707107,0.707107,180],[0.707107,0.707107,90],[1.06066,0.707107,90],[1.06066,0.707107,0],[1.383883,1.133883,-135],[1.383883,1.133883,135],[1.383883,1.133883,45],[1.383883,1.133883,-45],[0.883883,1.133883,45],[0.883883,1.133883,135],[1.133883,0.883883,-45],[1.133883,0.883883,-135]]},
		{"name":"","hash":"c265ed","data":[[1.06066,0.707107,180],[1.06066,0.707107,90],[0.707107,0.353553,90],[0.707107,0.353553,180],[1.06066,0.353553,90],[1.06066,0.353553,180],[1.06066,0.353553,0],[1.06066,0.353553,-90],[1.414214,0.707107,0],[1.414214,0.707107,-90],[1.414214,0.353553,-90],[1.414214,0.353553,0],[1.767767,0.707107,-90],[1.767767,0.707107,0],[1.414214,0.707107,180],[1.414214,0.707107,90],[0.353553,0.707107,90],[0.353553,0.707107,0],[0.353553,0.353553,-90],[0.353553,0.353553,0],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.353553,0,180],[0.353553,0,90],[0,0.353553,-90],[0,0.353553,180],[0,0.353553,90],[0,0.353553,0],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.353553,0,-90],[0.353553,0,0]]},
		{"name":"","hash":"ac396a","data":[[0.353553,1.06066,180],[0.353553,1.06066,90],[0,0.707107,90],[0,0.707107,180],[0.353553,0.707107,90],[0.353553,0.707107,180],[0.353553,0.707107,0],[0.353553,0.707107,-90],[0,0.353553,0],[0,0.353553,-90],[0,0,-90],[0,0,0],[0.353553,0.353553,-90],[0.353553,0.353553,0],[0,0.353553,180],[0,0.353553,90],[1.03033,0.987437,-45],[1.03033,0.987437,-135],[0.78033,1.237437,135],[0.78033,1.237437,-135],[0.53033,1.487437,135],[0.53033,1.487437,45],[1.15533,1.612437,-90],[1.15533,1.612437,180],[1.03033,1.487437,-135],[1.03033,1.487437,135],[1.03033,1.487437,45],[1.03033,1.487437,-45],[0.78033,1.237437,-45],[0.78033,1.237437,45],[0.53033,0.987437,-135],[0.53033,0.987437,135]]},
		{"name":"","hash":"b1adac","data":[[0.5,0.5,45],[0.5,0.5,-45],[0.5,1,-45],[0.5,1,45],[0.25,0.75,-45],[0.25,0.75,45],[0.25,0.75,-135],[0.25,0.75,135],[0.25,1.25,-135],[0.25,1.25,135],[0,1.5,135],[0,1.5,-135],[0,1,135],[0,1,-135],[0.25,1.25,45],[0.25,1.25,-45],[0.75,0.25,-135],[0.75,0.25,135],[1,0.5,45],[1,0.5,135],[1,0,-45],[1,0,-135],[1,0,135],[1,0,45],[0.5,0,-135],[0.5,0,135],[0.5,0,45],[0.5,0,-45],[0.5,0.5,-135],[0.5,0.5,135],[0.75,0.25,-45],[0.75,0.25,45]]},
		{"name":"","hash":"843bbd","data":[[1.051777,0.353553,-90],[1.051777,0.353553,180],[1.40533,0,180],[1.40533,0,-90],[1.40533,0.353553,180],[1.40533,0.353553,-90],[1.40533,0.353553,90],[1.40533,0.353553,0],[1.051777,0.707107,90],[1.051777,0.707107,0],[1.40533,0.707107,0],[1.40533,0.707107,90],[1.051777,1.06066,0],[1.051777,1.06066,90],[1.051777,0.707107,-90],[1.051777,0.707107,180],[0.625,1.237437,45],[0.625,1.237437,-45],[0.375,0.987437,-135],[0.375,0.987437,-45],[0.625,1.237437,-135],[0.625,1.237437,135],[0.875,0.987437,45],[0.875,0.987437,-45],[0.25,1.362437,-135],[0.25,1.362437,135],[0.25,1.362437,45],[0.25,1.362437,-45],[0.25,1.862437,-45],[0.25,1.862437,45],[0,1.612437,-135],[0,1.612437,135]]}

	]

};

export default section;
