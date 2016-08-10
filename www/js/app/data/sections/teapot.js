'use strict';
/*global window */

var section = {

	id: 'teapots',
	name: 'teapots',
	data: [

		// 134
		{"name":"","hash":"fd297e","data":[[0.78033,0.353553,90],[0.78033,0.353553,0],[0.426777,0.707107,0],[0.426777,0.707107,90],[0.426777,0.353553,0],[0.426777,0.353553,90],[0.426777,0.353553,-90],[0.426777,0.353553,180],[0.78033,0.707107,-90],[0.78033,0.707107,180],[0.426777,0.707107,180],[0.426777,0.707107,-90],[0.78033,0.353553,180],[0.78033,0.353553,-90],[0.78033,0.707107,90],[0.78033,0.707107,0],[0.78033,0,0],[0.78033,0,-90],[0.426777,0,180],[0.426777,0,-90],[1.133883,0.707107,90],[1.133883,0.707107,0],[1.487437,0.353553,90],[1.487437,0.353553,0],[1.133883,0.353553,-90],[1.133883,0.353553,180],[1.133883,0.353553,90],[1.133883,0.353553,0],[0,0.676777,-135],[0,0.676777,135],[0.25,0.426777,-45],[0.25,0.426777,45]]},
		{"name":"","hash":"2b83f1","data":[[0.707107,0.353553,90],[0.707107,0.353553,0],[0.353553,0.707107,0],[0.353553,0.707107,90],[0.353553,0.353553,0],[0.353553,0.353553,90],[0.353553,0.353553,-90],[0.353553,0.353553,180],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.353553,0.707107,180],[0.353553,0.707107,-90],[0.707107,0.353553,180],[0.707107,0.353553,-90],[0.707107,0.707107,90],[0.707107,0.707107,0],[0.707107,0,0],[0.707107,0,-90],[0.353553,0,180],[0.353553,0,-90],[0,0.353553,180],[0,0.353553,90],[0.78033,1.133883,135],[0.78033,1.133883,45],[1.06066,0.353553,-90],[1.06066,0.353553,180],[1.06066,0.353553,90],[1.06066,0.353553,0],[0.28033,1.133883,45],[0.28033,1.133883,135],[0.53033,0.883883,-45],[0.53033,0.883883,-135]]},
		{"name":"","hash":"31c75c","data":[[0.646447,0.353553,180],[0.646447,0.353553,90],[0.292893,0,90],[0.292893,0,180],[0.646447,0,90],[0.646447,0,180],[0.646447,0,0],[0.646447,0,-90],[0.573223,0.53033,-135],[0.573223,0.53033,135],[0.323223,0.78033,135],[0.323223,0.78033,-135],[0.323223,0.28033,135],[0.323223,0.28033,-135],[0.573223,0.53033,45],[0.573223,0.53033,-45],[0.573223,1.03033,135],[0.573223,1.03033,45],[0.823223,0.78033,-45],[0.823223,0.78033,45],[0.073223,0.383883,-45],[0.073223,0.383883,-135],[0.073223,0.03033,135],[0.073223,0.03033,45],[0,0.207107,-90],[0,0.207107,180],[0,0.207107,90],[0,0.207107,0],[1,0.353553,0],[1,0.353553,90],[1,0,-90],[1,0,180]]},
		{"name":"","hash":"a9f88a","data":[[0.707107,0.353553,90],[0.707107,0.353553,0],[0.353553,0.707107,0],[0.353553,0.707107,90],[0.353553,0.353553,0],[0.353553,0.353553,90],[0.353553,0.353553,-90],[0.353553,0.353553,180],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.353553,0.707107,180],[0.353553,0.707107,-90],[0.707107,0.353553,180],[0.707107,0.353553,-90],[0.707107,0.707107,90],[0.707107,0.707107,0],[0.707107,0,0],[0.707107,0,-90],[0.353553,0,180],[0.353553,0,-90],[1.133883,0.383883,-135],[1.133883,0.383883,135],[1.383883,0.133883,-45],[1.383883,0.133883,-135],[0,0.353553,-90],[0,0.353553,180],[0,0.353553,90],[0,0.353553,0],[0.883883,0.633883,-135],[0.883883,0.633883,135],[1.133883,0.383883,-45],[1.133883,0.383883,45]]},
		{"name":"","hash":"33e8a5","data":[[0.78033,0.53033,90],[0.78033,0.53033,0],[0.426777,0.883883,0],[0.426777,0.883883,90],[0.426777,0.53033,0],[0.426777,0.53033,90],[0.426777,0.53033,-90],[0.426777,0.53033,180],[0.78033,0.883883,-90],[0.78033,0.883883,180],[0.426777,0.883883,180],[0.426777,0.883883,-90],[0.78033,0.53033,180],[0.78033,0.53033,-90],[0.78033,0.883883,90],[0.78033,0.883883,0],[0.78033,1.237437,0],[0.78033,1.237437,-90],[0.426777,1.237437,180],[0.426777,1.237437,-90],[1.133883,0.53033,90],[1.133883,0.53033,0],[0.603553,0,135],[0.603553,0,45],[0.603553,0.176777,-90],[0.603553,0.176777,180],[0.603553,0.176777,90],[0.603553,0.176777,0],[0,0.853553,-135],[0,0.853553,135],[0.25,0.603553,-45],[0.25,0.603553,45]]},
		{"name":"","hash":"82ddc3","data":[[0.926777,0.25,135],[0.926777,0.25,45],[0.426777,0.25,45],[0.426777,0.25,135],[0.676777,0,45],[0.676777,0,135],[0.676777,0,-45],[0.676777,0,-135],[0.676777,0.5,-45],[0.676777,0.5,-135],[0.426777,0.25,-135],[0.426777,0.25,-45],[0.926777,0.25,-135],[0.926777,0.25,-45],[0.676777,0.5,135],[0.676777,0.5,45],[0.176777,0.5,-135],[0.176777,0.5,135],[0.426777,0.75,45],[0.426777,0.75,135],[0.853553,0.573223,-90],[0.853553,0.573223,180],[1.56066,0.21967,90],[1.56066,0.21967,0],[0,0.426777,-90],[0,0.426777,180],[0,0.426777,90],[0,0.426777,0],[1.207107,0.573223,0],[1.207107,0.573223,90],[1.207107,0.21967,-90],[1.207107,0.21967,180]]},
		{"name":"","hash":"1ac0d7","data":[[1.103553,0.75,135],[1.103553,0.75,45],[0.603553,0.75,45],[0.603553,0.75,135],[0.853553,0.5,45],[0.853553,0.5,135],[0.853553,0.5,-45],[0.853553,0.5,-135],[0.646447,0,135],[0.646447,0,45],[0.896447,0.25,45],[0.896447,0.25,135],[0.396447,0.25,45],[0.396447,0.25,135],[0.646447,0,-45],[0.646447,0,-135],[0.323223,0.426777,180],[0.323223,0.426777,90],[0.676777,0.426777,0],[0.676777,0.426777,90],[1.457107,0.25,-45],[1.457107,0.25,-135],[0.25,0.603553,135],[0.25,0.603553,45],[0,0.353553,-135],[0,0.353553,135],[0,0.353553,45],[0,0.353553,-45],[1.383883,0.426777,-90],[1.383883,0.426777,0],[1.03033,0.426777,180],[1.03033,0.426777,90]]},

		// 135
		{"name":"","hash":"121e1c","data":[[0.78033,0.53033,90],[0.78033,0.53033,0],[0.426777,0.883883,0],[0.426777,0.883883,90],[0.426777,0.53033,0],[0.426777,0.53033,90],[0.426777,0.53033,-90],[0.426777,0.53033,180],[0.78033,0.883883,-90],[0.78033,0.883883,180],[0.426777,0.883883,180],[0.426777,0.883883,-90],[0.78033,0.53033,180],[0.78033,0.53033,-90],[0.78033,0.883883,90],[0.78033,0.883883,0],[1.133883,0.883883,90],[1.133883,0.883883,0],[1.133883,0.53033,-90],[1.133883,0.53033,0],[0.603553,0,135],[0.603553,0,45],[1.31066,0.457107,-45],[1.31066,0.457107,-135],[0.603553,0.176777,-90],[0.603553,0.176777,180],[0.603553,0.176777,90],[0.603553,0.176777,0],[0,0.853553,-135],[0,0.853553,135],[0.25,0.603553,-45],[0.25,0.603553,45]]},
		{"name":"","hash":"09c0d5","data":[[0.926777,0.676777,135],[0.926777,0.676777,45],[0.426777,0.676777,45],[0.426777,0.676777,135],[0.676777,0.426777,45],[0.676777,0.426777,135],[0.676777,0.426777,-45],[0.676777,0.426777,-135],[0.676777,0.926777,-45],[0.676777,0.926777,-135],[0.426777,0.676777,-135],[0.426777,0.676777,-45],[0.926777,0.676777,-135],[0.926777,0.676777,-45],[0.676777,0.926777,135],[0.676777,0.926777,45],[0,0.5,180],[0,0.5,90],[0.353553,0.5,0],[0.353553,0.5,90],[0.926777,1.176777,135],[0.926777,1.176777,45],[0.426777,1.176777,135],[0.426777,1.176777,45],[0.676777,0,-90],[0.676777,0,180],[0.676777,0,90],[0.676777,0,0],[1.457107,0.603553,-90],[1.457107,0.603553,0],[1.103553,0.603553,180],[1.103553,0.603553,90]]},
		{"name":"","hash":"ff7b79","data":[[0.853553,0.25,135],[0.853553,0.25,45],[0.353553,0.25,45],[0.353553,0.25,135],[0.603553,0,45],[0.603553,0,135],[0.603553,0,-45],[0.603553,0,-135],[0.426777,0.426777,90],[0.426777,0.426777,0],[0.78033,0.426777,0],[0.78033,0.426777,90],[0.426777,0.78033,0],[0.426777,0.78033,90],[0.426777,0.426777,-90],[0.426777,0.426777,180],[1.207107,0.25,-45],[1.207107,0.25,-135],[0.957107,0.5,135],[0.957107,0.5,-135],[0.78033,0.426777,-90],[0.78033,0.426777,180],[0.426777,0.78033,-90],[0.426777,0.78033,180],[0.78033,0.78033,-90],[0.78033,0.78033,180],[0.78033,0.78033,90],[0.78033,0.78033,0],[0,0.75,-135],[0,0.75,135],[0.25,0.5,-45],[0.25,0.5,45]]},
		{"name":"","hash":"fe0efe","data":[[0.78033,0.25,135],[0.78033,0.25,45],[0.28033,0.25,45],[0.28033,0.25,135],[0.53033,0,45],[0.53033,0,135],[0.53033,0,-45],[0.53033,0,-135],[0.353553,0.426777,90],[0.353553,0.426777,0],[0.707107,0.426777,0],[0.707107,0.426777,90],[0.353553,0.78033,0],[0.353553,0.78033,90],[0.353553,0.426777,-90],[0.353553,0.426777,180],[1.133883,0.25,-45],[1.133883,0.25,-135],[0.883883,0.5,135],[0.883883,0.5,-135],[0.707107,0.78033,-90],[0.707107,0.78033,180],[0.353553,0.78033,-90],[0.353553,0.78033,180],[0,0.426777,-90],[0,0.426777,180],[0,0.426777,90],[0,0.426777,0],[0.707107,0.78033,0],[0.707107,0.78033,90],[0.707107,0.426777,-90],[0.707107,0.426777,180]]},
		{"name":"","hash":"007777","data":[[0.707107,0.176777,90],[0.707107,0.176777,0],[0.353553,0.53033,0],[0.353553,0.53033,90],[0.353553,0.176777,0],[0.353553,0.176777,90],[0.353553,0.176777,-90],[0.353553,0.176777,180],[0.707107,0.883883,-90],[0.707107,0.883883,180],[0.353553,0.883883,180],[0.353553,0.883883,-90],[0.707107,0.53033,180],[0.707107,0.53033,-90],[0.707107,0.883883,90],[0.707107,0.883883,0],[1.133883,0,-45],[1.133883,0,-135],[0.883883,0.25,135],[0.883883,0.25,-135],[0.707107,0.176777,-90],[0.707107,0.176777,180],[0.353553,0.883883,90],[0.353553,0.883883,0],[0,0.176777,-90],[0,0.176777,180],[0,0.176777,90],[0,0.176777,0],[0.353553,0.53033,-90],[0.353553,0.53033,180],[0.707107,0.53033,0],[0.707107,0.53033,90]]},
		{"name":"","hash":"663796","data":[[0.707107,0.353553,90],[0.707107,0.353553,0],[0.353553,0.707107,0],[0.353553,0.707107,90],[0.353553,0.353553,0],[0.353553,0.353553,90],[0.353553,0.353553,-90],[0.353553,0.353553,180],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.353553,0.707107,180],[0.353553,0.707107,-90],[0.707107,0.353553,180],[0.707107,0.353553,-90],[0.707107,0.707107,90],[0.707107,0.707107,0],[0.707107,0,0],[0.707107,0,-90],[0.353553,0,180],[0.353553,0,-90],[1.133883,0.176777,135],[1.133883,0.176777,45],[1.133883,0.53033,-45],[1.133883,0.53033,-135],[1.207107,0.353553,-90],[1.207107,0.353553,180],[1.207107,0.353553,90],[1.207107,0.353553,0],[0,0.353553,0],[0,0.353553,-90],[0,0.707107,90],[0,0.707107,180]]}

	]

};

export default section;
