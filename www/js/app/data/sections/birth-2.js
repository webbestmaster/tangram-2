'use strict';
/*global window */

var section = {

	id: 'birds-2',
	name: 'birds #2',
	data: [

		// birth
		// 64
		{"name":"","hash":"92a576","data":[[0,0.633883,-45],[0,0.633883,-135],[0.5,0.633883,-135],[0.5,0.633883,-45],[0.25,0.883883,-135],[0.25,0.883883,-45],[0.25,0.883883,135],[0.25,0.883883,45],[0.75,0.883883,135],[0.75,0.883883,45],[1,1.133883,45],[1,1.133883,135],[0.5,1.133883,45],[0.5,1.133883,135],[0.75,0.883883,-45],[0.75,0.883883,-135],[1.323223,0,0],[1.323223,0,-90],[0.96967,0,180],[0.96967,0,-90],[1.323223,0.707107,180],[1.323223,0.707107,90],[0.926777,1.31066,0],[0.926777,1.31066,-90],[1.25,0.883883,-135],[1.25,0.883883,135],[1.25,0.883883,45],[1.25,0.883883,-45],[1.323223,0.353553,-90],[1.323223,0.353553,0],[0.96967,0.353553,180],[0.96967,0.353553,90]]},
		{"name":"","hash":"eb7ccc","data":[[0,0.457107,-45],[0,0.457107,-135],[0.5,0.457107,-135],[0.5,0.457107,-45],[0.25,0.707107,-135],[0.25,0.707107,-45],[0.25,0.707107,135],[0.25,0.707107,45],[0.75,0.707107,135],[0.75,0.707107,45],[1,0.957107,45],[1,0.957107,135],[0.5,0.957107,45],[0.5,0.957107,135],[0.75,0.707107,-45],[0.75,0.707107,-135],[0.792893,0,0],[0.792893,0,-90],[0.43934,0,180],[0.43934,0,-90],[1.323223,0.53033,180],[1.323223,0.53033,90],[0.926777,1.133883,0],[0.926777,1.133883,-90],[1.25,0.707107,-135],[1.25,0.707107,135],[1.25,0.707107,45],[1.25,0.707107,-45],[1.323223,0.176777,-90],[1.323223,0.176777,0],[0.96967,0.176777,180],[0.96967,0.176777,90]]},
		{"name":"","hash":"f2b7fd","data":[[0,0.81066,-45],[0,0.81066,-135],[0.5,0.81066,-135],[0.5,0.81066,-45],[0.25,1.06066,-135],[0.25,1.06066,-45],[0.25,1.06066,135],[0.25,1.06066,45],[0.75,1.06066,135],[0.75,1.06066,45],[1,1.31066,45],[1,1.31066,135],[0.5,1.31066,45],[0.5,1.31066,135],[0.75,1.06066,-45],[0.75,1.06066,-135],[0.646447,0.25,135],[0.646447,0.25,45],[0.896447,0,-45],[0.896447,0,45],[1.073223,1.133883,180],[1.073223,1.133883,90],[0.926777,1.487437,0],[0.926777,1.487437,-90],[1.073223,0.78033,-90],[1.073223,0.78033,180],[1.073223,0.78033,90],[1.073223,0.78033,0],[1.073223,0.426777,-90],[1.073223,0.426777,0],[0.71967,0.426777,180],[0.71967,0.426777,90]]},
		{"name":"","hash":"2b2023","data":[[0.926777,0.53033,-45],[0.926777,0.53033,-135],[1.426777,0.53033,-135],[1.426777,0.53033,-45],[1.176777,0.78033,-135],[1.176777,0.78033,-45],[1.176777,0.78033,135],[1.176777,0.78033,45],[1.676777,0.78033,135],[1.676777,0.78033,45],[1.926777,1.03033,45],[1.926777,1.03033,135],[1.426777,1.03033,45],[1.426777,1.03033,135],[1.676777,0.78033,-45],[1.676777,0.78033,-135],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[1.676777,1.28033,-135],[1.676777,1.28033,135],[1,1.207107,-90],[1,1.207107,180],[0.353553,0.353553,-90],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.426777,0.53033,-45],[0.426777,0.53033,-135],[0.676777,0.78033,45],[0.676777,0.78033,135]]},
		{"name":"","hash":"7f38de","data":[[1.487437,1.737437,180],[1.487437,1.737437,90],[1.133883,1.383883,90],[1.133883,1.383883,180],[1.487437,1.383883,90],[1.487437,1.383883,180],[1.487437,1.383883,0],[1.487437,1.383883,-90],[1.133883,1.03033,0],[1.133883,1.03033,-90],[1.133883,0.676777,-90],[1.133883,0.676777,0],[1.487437,1.03033,-90],[1.487437,1.03033,0],[1.133883,1.03033,180],[1.133883,1.03033,90],[0.25,0.25,45],[0.25,0.25,-45],[0,0,-135],[0,0,-45],[1.133883,1.737437,-90],[1.133883,1.737437,180],[0.707107,1.207107,-45],[0.707107,1.207107,-135],[0.78033,0.676777,180],[0.78033,0.676777,90],[0.78033,0.676777,0],[0.78033,0.676777,-90],[0.426777,0.676777,180],[0.426777,0.676777,90],[0.426777,0.323223,-90],[0.426777,0.323223,0]]},
		{"name":"","hash":"0692e7","data":[[1,1.75,135],[1,1.75,45],[0.5,1.75,45],[0.5,1.75,135],[0.75,1.5,45],[0.75,1.5,135],[0.75,1.5,-45],[0.75,1.5,-135],[1,1.25,45],[1,1.25,-45],[1.25,1,-45],[1.25,1,45],[1.25,1.5,-45],[1.25,1.5,45],[1,1.25,-135],[1,1.25,135],[1.25,0,-45],[1.25,0,-135],[1,0.25,135],[1,0.25,-135],[0.5,1.25,-45],[0.5,1.25,-135],[0,1.25,-135],[0,1.25,135],[0.25,1.5,-135],[0.25,1.5,135],[0.25,1.5,45],[0.25,1.5,-45],[1,0.75,-135],[1,0.75,135],[1.25,0.5,-45],[1.25,0.5,45]]},
		{"name":"","hash":"065d29","data":[[0.883883,1.633883,90],[0.883883,1.633883,0],[0.53033,1.987437,0],[0.53033,1.987437,90],[0.53033,1.633883,0],[0.53033,1.633883,90],[0.53033,1.633883,-90],[0.53033,1.633883,180],[0.176777,1.28033,0],[0.176777,1.28033,-90],[0.176777,0.926777,-90],[0.176777,0.926777,0],[0.53033,1.28033,-90],[0.53033,1.28033,0],[0.176777,1.28033,180],[0.176777,1.28033,90],[0.25,0.25,45],[0.25,0.25,-45],[0,0,-135],[0,0,-45],[0.353553,2.164214,-90],[0.353553,2.164214,180],[0.176777,1.987437,180],[0.176777,1.987437,90],[0.176777,1.633883,-90],[0.176777,1.633883,180],[0.176777,1.633883,90],[0.176777,1.633883,0],[0.25,0.75,-45],[0.25,0.75,45],[0,0.5,-135],[0,0.5,135]]},
		// 65
		{"name":"","hash":"6ed7ea","data":[[0.75,0,-45],[0.75,0,-135],[1.25,0,-135],[1.25,0,-45],[1,0.25,-135],[1,0.25,-45],[1,0.25,135],[1,0.25,45],[0.5,0.25,135],[0.5,0.25,45],[0.75,0.5,45],[0.75,0.5,135],[0.25,0.5,45],[0.25,0.5,135],[0.5,0.25,-45],[0.5,0.25,-135],[0.25,0.5,-45],[0.25,0.5,-135],[0,0.75,135],[0,0.75,-135],[0.573223,0.926777,180],[0.573223,0.926777,90],[1.5,0,135],[1.5,0,45],[0,0.25,-135],[0,0.25,135],[0,0.25,45],[0,0.25,-45],[0.5,0.75,45],[0.5,0.75,135],[0.75,0.5,-45],[0.75,0.5,-135]]},
		{"name":"","hash":"785a5c","data":[[0,0.353553,0],[0,0.353553,-90],[0.353553,0.707107,-90],[0.353553,0.707107,0],[0,0.707107,-90],[0,0.707107,0],[0,0.707107,180],[0,0.707107,90],[0.383883,1.133883,-45],[0.383883,1.133883,-135],[0.133883,0.883883,-135],[0.133883,0.883883,-45],[0.633883,0.883883,-135],[0.633883,0.883883,-45],[0.383883,1.133883,135],[0.383883,1.133883,45],[0.707107,0,0],[0.707107,0,-90],[0.353553,0,180],[0.353553,0,-90],[0.81066,1.31066,0],[0.81066,1.31066,-90],[0.133883,1.383883,45],[0.133883,1.383883,-45],[0.707107,0.707107,180],[0.707107,0.707107,90],[0.707107,0.707107,0],[0.707107,0.707107,-90],[0.707107,0.353553,-90],[0.707107,0.353553,0],[0.353553,0.353553,180],[0.353553,0.353553,90]]},
		{"name":"","hash":"fabf5c","data":[[0.5,0.103553,45],[0.5,0.103553,-45],[0.5,0.603553,-45],[0.5,0.603553,45],[0.25,0.353553,-45],[0.25,0.353553,45],[0.25,0.353553,-135],[0.25,0.353553,135],[0.75,0.353553,-135],[0.75,0.353553,135],[0.5,0.603553,135],[0.5,0.603553,-135],[0.5,0.103553,135],[0.5,0.103553,-135],[0.75,0.353553,45],[0.75,0.353553,-45],[1.176777,0.53033,0],[1.176777,0.53033,-90],[0.823223,0.53033,180],[0.823223,0.53033,-90],[1.25,0,-45],[1.25,0,-135],[0.5,1.103553,135],[0.5,1.103553,45],[0,0.603553,-135],[0,0.603553,135],[0,0.603553,45],[0,0.603553,-45],[1.176777,0.176777,0],[1.176777,0.176777,-90],[1.176777,0.53033,90],[1.176777,0.53033,180]]},
		{"name":"","hash":"cfd567","data":[[0.551777,0.698223,-45],[0.551777,0.698223,-135],[1.051777,0.698223,-135],[1.051777,0.698223,-45],[0.801777,0.948223,-135],[0.801777,0.948223,-45],[0.801777,0.948223,135],[0.801777,0.948223,45],[0.478553,1.228553,0],[0.478553,1.228553,-90],[0.478553,0.875,-90],[0.478553,0.875,0],[0.832107,1.228553,-90],[0.832107,1.228553,0],[0.478553,1.228553,180],[0.478553,1.228553,90],[0.125,0.875,-90],[0.125,0.875,180],[0.125,1.228553,90],[0.125,1.228553,180],[0,0,-90],[0,0,180],[0.478553,1.582107,-90],[0.478553,1.582107,180],[0.176777,0.573223,-135],[0.176777,0.573223,135],[0.176777,0.573223,45],[0.176777,0.573223,-45],[0.426777,0.323223,-45],[0.426777,0.323223,45],[0.176777,0.073223,-135],[0.176777,0.073223,135]]},
		{"name":"","hash":"eb9b87","data":[[0.646447,0.207107,45],[0.646447,0.207107,-45],[0.646447,0.707107,-45],[0.646447,0.707107,45],[0.396447,0.457107,-45],[0.396447,0.457107,45],[0.396447,0.457107,-135],[0.396447,0.457107,135],[0.823223,0.487437,0],[0.823223,0.487437,-90],[0.823223,0.133883,-90],[0.823223,0.133883,0],[1.176777,0.487437,-90],[1.176777,0.487437,0],[0.823223,0.487437,180],[0.823223,0.487437,90],[0.823223,0.84099,180],[0.823223,0.84099,90],[1.176777,0.84099,0],[1.176777,0.84099,90],[0.646447,1.207107,135],[0.646447,1.207107,45],[0,0,-45],[0,0,-135],[0.146447,0.707107,-135],[0.146447,0.707107,135],[0.146447,0.707107,45],[0.146447,0.707107,-45],[0.073223,0.53033,0],[0.073223,0.53033,90],[0.073223,0.176777,-90],[0.073223,0.176777,180]]},
		{"name":"","hash":"4dce1a","data":[[0.646447,0.207107,45],[0.646447,0.207107,-45],[0.646447,0.707107,-45],[0.646447,0.707107,45],[0.396447,0.457107,-45],[0.396447,0.457107,45],[0.396447,0.457107,-135],[0.396447,0.457107,135],[0.896447,0.457107,-135],[0.896447,0.457107,135],[0.646447,0.707107,135],[0.646447,0.707107,-135],[0.646447,0.207107,135],[0.646447,0.207107,-135],[0.896447,0.457107,45],[0.896447,0.457107,-45],[1.426777,0.53033,0],[1.426777,0.53033,-90],[1.073223,0.53033,180],[1.073223,0.53033,-90],[0.646447,1.207107,135],[0.646447,1.207107,45],[0,0,-45],[0,0,-135],[0.146447,0.707107,-135],[0.146447,0.707107,135],[0.146447,0.707107,45],[0.146447,0.707107,-45],[0.073223,0.53033,0],[0.073223,0.53033,90],[0.073223,0.176777,-90],[0.073223,0.176777,180]]},
		{"name":"","hash":"55aed6","data":[[0.926777,1,135],[0.926777,1,45],[0.426777,1,45],[0.426777,1,135],[0.676777,0.75,45],[0.676777,0.75,135],[0.676777,0.75,-45],[0.676777,0.75,-135],[0.426777,0.5,-135],[0.426777,0.5,135],[0.176777,0.75,135],[0.176777,0.75,-135],[0.176777,0.25,135],[0.176777,0.25,-135],[0.426777,0.5,45],[0.426777,0.5,-45],[1.176777,1.25,45],[1.176777,1.25,-45],[0.926777,1,-135],[0.926777,1,-45],[0.603553,1.426777,90],[0.603553,1.426777,0],[0,0,180],[0,0,90],[1.176777,0.75,-135],[1.176777,0.75,135],[1.176777,0.75,45],[1.176777,0.75,-45],[0.676777,1.25,135],[0.676777,1.25,45],[0.426777,1,-135],[0.426777,1,-45]]},
		// 66
		{"name":"","hash":"70f75a","data":[[1.03033,0.78033,180],[1.03033,0.78033,90],[0.676777,0.426777,90],[0.676777,0.426777,180],[1.03033,0.426777,90],[1.03033,0.426777,180],[1.03033,0.426777,0],[1.03033,0.426777,-90],[0.676777,0.78033,0],[0.676777,0.78033,-90],[0.676777,0.426777,-90],[0.676777,0.426777,0],[1.03033,0.78033,-90],[1.03033,0.78033,0],[0.676777,0.78033,180],[0.676777,0.78033,90],[0.5,0.5,45],[0.5,0.5,-45],[0.25,0.25,-135],[0.25,0.25,-45],[1.383883,0.073223,0],[1.383883,0.073223,-90],[0.853553,1.207107,135],[0.853553,1.207107,45],[1.03033,0.073223,-90],[1.03033,0.073223,180],[1.03033,0.073223,90],[1.03033,0.073223,0],[0.25,0.25,135],[0.25,0.25,45],[0,0,-135],[0,0,-45]]},
		{"name":"","hash":"10cd2f","data":[[0,0.573223,-90],[0,0.573223,180],[0.353553,0.21967,180],[0.353553,0.21967,-90],[0.353553,0.573223,180],[0.353553,0.573223,-90],[0.353553,0.573223,90],[0.353553,0.573223,0],[0.78033,0.25,-135],[0.78033,0.25,135],[0.53033,0.5,135],[0.53033,0.5,-135],[0.53033,0,135],[0.53033,0,-135],[0.78033,0.25,45],[0.78033,0.25,-45],[0,0.21967,180],[0,0.21967,90],[0.353553,0.21967,0],[0.353553,0.21967,90],[1.28033,0.25,45],[1.28033,0.25,-45],[0.40533,1.125,135],[0.40533,1.125,45],[1.03033,0,-135],[1.03033,0,135],[1.03033,0,45],[1.03033,0,-45],[0.03033,1,45],[0.03033,1,135],[0.28033,0.75,-45],[0.28033,0.75,-135]]},
		{"name":"","hash":"34fc0d","data":[[1.03033,0,90],[1.03033,0,0],[0.676777,0.353553,0],[0.676777,0.353553,90],[0.676777,0,0],[0.676777,0,90],[0.676777,0,-90],[0.676777,0,180],[1.03033,0.353553,-90],[1.03033,0.353553,180],[0.676777,0.353553,180],[0.676777,0.353553,-90],[1.03033,0,180],[1.03033,0,-90],[1.03033,0.353553,90],[1.03033,0.353553,0],[0.5,0.28033,45],[0.5,0.28033,-45],[0.25,0.03033,-135],[0.25,0.03033,-45],[1.383883,0.353553,180],[1.383883,0.353553,90],[0.853553,0.78033,135],[0.853553,0.78033,45],[1.383883,0,-90],[1.383883,0,180],[1.383883,0,90],[1.383883,0,0],[0.25,0.53033,135],[0.25,0.53033,45],[0,0.28033,-135],[0,0.28033,-45]]},
		{"name":"","hash":"4fec7c","data":[[0.5,0.53033,-45],[0.5,0.53033,-135],[1,0.53033,-135],[1,0.53033,-45],[0.75,0.78033,-135],[0.75,0.78033,-45],[0.75,0.78033,135],[0.75,0.78033,45],[0.78033,0.353553,-90],[0.78033,0.353553,180],[0.426777,0.353553,180],[0.426777,0.353553,-90],[0.78033,0,180],[0.78033,0,-90],[0.78033,0.353553,90],[0.78033,0.353553,0],[0.25,0.28033,45],[0.25,0.28033,-45],[0,0.03033,-135],[0,0.03033,-45],[0.926777,1.207107,180],[0.926777,1.207107,90],[0.573223,1.207107,-90],[0.573223,1.207107,180],[1.133883,0.353553,-90],[1.133883,0.353553,180],[1.133883,0.353553,90],[1.133883,0.353553,0],[0.426777,0.353553,0],[0.426777,0.353553,90],[0.426777,0,-90],[0.426777,0,180]]},
		{"name":"","hash":"bc1d07","data":[[0,0.53033,-45],[0,0.53033,-135],[0.5,0.53033,-135],[0.5,0.53033,-45],[0.25,0.78033,-135],[0.25,0.78033,-45],[0.25,0.78033,135],[0.25,0.78033,45],[0.21967,0.353553,0],[0.21967,0.353553,-90],[0.21967,0,-90],[0.21967,0,0],[0.573223,0.353553,-90],[0.573223,0.353553,0],[0.21967,0.353553,180],[0.21967,0.353553,90],[1.103553,0.28033,-135],[1.103553,0.28033,135],[1.353553,0.53033,45],[1.353553,0.53033,135],[0.375,1.15533,45],[0.375,1.15533,-45],[0,1.03033,45],[0,1.03033,-45],[0.926777,0.353553,-90],[0.926777,0.353553,180],[0.926777,0.353553,90],[0.926777,0.353553,0],[0.573223,0,0],[0.573223,0,-90],[0.573223,0.353553,90],[0.573223,0.353553,180]]},
		{"name":"","hash":"daf003","data":[[1.176777,0.5,135],[1.176777,0.5,45],[0.676777,0.5,45],[0.676777,0.5,135],[0.926777,0.25,45],[0.926777,0.25,135],[0.926777,0.25,-45],[0.926777,0.25,-135],[0.926777,0.75,-45],[0.926777,0.75,-135],[0.676777,0.5,-135],[0.676777,0.5,-45],[1.176777,0.5,-135],[1.176777,0.5,-45],[0.926777,0.75,135],[0.926777,0.75,45],[0.676777,0,-45],[0.676777,0,-135],[0.426777,0.25,135],[0.426777,0.25,-135],[0.926777,1,-90],[0.926777,1,180],[0,0.926777,180],[0,0.926777,90],[0,0.573223,-90],[0,0.573223,180],[0,0.573223,90],[0,0.573223,0],[0.176777,0.5,-135],[0.176777,0.5,135],[0.426777,0.25,-45],[0.426777,0.25,45]]},
		{"name":"","hash":"39e53a","data":[[0.5,0.5,0],[0.5,0.5,-90],[0.853553,0.853553,-90],[0.853553,0.853553,0],[0.5,0.853553,-90],[0.5,0.853553,0],[0.5,0.853553,180],[0.5,0.853553,90],[0.676777,0.426777,-45],[0.676777,0.426777,-135],[0.426777,0.176777,-135],[0.426777,0.176777,-45],[0.926777,0.176777,-135],[0.926777,0.176777,-45],[0.676777,0.426777,135],[0.676777,0.426777,45],[1.207107,0.5,0],[1.207107,0.5,-90],[0.853553,0.5,180],[0.853553,0.5,-90],[0,0,-90],[0,0,180],[0.676777,1.28033,135],[0.676777,1.28033,45],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[0.926777,0.676777,-45],[0.926777,0.676777,-135],[1.176777,0.926777,45],[1.176777,0.926777,135]]},
		// 67
		{"name":"","hash":"3912a4","data":[[1,0.883883,135],[1,0.883883,45],[0.5,0.883883,45],[0.5,0.883883,135],[0.75,0.633883,45],[0.75,0.633883,135],[0.75,0.633883,-45],[0.75,0.633883,-135],[0.25,0.633883,-45],[0.25,0.633883,-135],[0,0.383883,-135],[0,0.383883,-45],[0.5,0.383883,-135],[0.5,0.383883,-45],[0.25,0.633883,135],[0.25,0.633883,45],[0,0.383883,135],[0,0.383883,45],[0.25,0.133883,-45],[0.25,0.133883,45],[1.073223,0.707107,180],[1.073223,0.707107,90],[1.073223,0,0],[1.073223,0,-90],[0.71967,0,-90],[0.71967,0,180],[0.71967,0,90],[0.71967,0,0],[1.073223,0.353553,-90],[1.073223,0.353553,0],[0.71967,0.353553,180],[0.71967,0.353553,90]]},
		{"name":"","hash":"66f855","data":[[0,0.323223,-45],[0,0.323223,-135],[0.5,0.323223,-135],[0.5,0.323223,-45],[0.25,0.573223,-135],[0.25,0.573223,-45],[0.25,0.573223,135],[0.25,0.573223,45],[0.75,0.573223,135],[0.75,0.573223,45],[1,0.823223,45],[1,0.823223,135],[0.5,0.823223,45],[0.5,0.823223,135],[0.75,0.573223,-45],[0.75,0.573223,-135],[1.073223,0,0],[1.073223,0,-90],[0.71967,0,180],[0.71967,0,-90],[1.073223,0,180],[1.073223,0,90],[0.926777,1,0],[0.926777,1,-90],[1.25,0.573223,-135],[1.25,0.573223,135],[1.25,0.573223,45],[1.25,0.573223,-45],[1.5,0.323223,-45],[1.5,0.323223,45],[1.25,0.073223,-135],[1.25,0.073223,135]]},
		{"name":"","hash":"576e1c","data":[[0.176777,0.78033,-90],[0.176777,0.78033,180],[0.53033,0.426777,180],[0.53033,0.426777,-90],[0.53033,0.78033,180],[0.53033,0.78033,-90],[0.53033,0.78033,90],[0.53033,0.78033,0],[0.883883,0.426777,90],[0.883883,0.426777,0],[1.237437,0.426777,0],[1.237437,0.426777,90],[0.883883,0.78033,0],[0.883883,0.78033,90],[0.883883,0.426777,-90],[0.883883,0.426777,180],[0,0.603553,180],[0,0.603553,90],[0.353553,0.603553,0],[0.353553,0.603553,90],[1.914214,0.5,45],[1.914214,0.5,-45],[0.353553,1.207107,135],[0.353553,1.207107,45],[1.664214,0.25,-135],[1.664214,0.25,135],[1.664214,0.25,45],[1.664214,0.25,-45],[1.164214,0.25,45],[1.164214,0.25,135],[1.414214,0,-45],[1.414214,0,-135]]},
		{"name":"","hash":"f4ba1c","data":[[0.573223,0.883883,135],[0.573223,0.883883,45],[0.073223,0.883883,45],[0.073223,0.883883,135],[0.323223,0.633883,45],[0.323223,0.633883,135],[0.323223,0.633883,-45],[0.323223,0.633883,-135],[0.823223,0.633883,-45],[0.823223,0.633883,-135],[0.573223,0.383883,-135],[0.573223,0.383883,-45],[1.073223,0.383883,-135],[1.073223,0.383883,-45],[0.823223,0.633883,135],[0.823223,0.633883,45],[1.353553,0.707107,0],[1.353553,0.707107,-90],[1,0.707107,180],[1,0.707107,-90],[0,0,-90],[0,0,180],[0,0.707107,90],[0,0.707107,0],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[0,0.353553,-90],[0,0.353553,180],[0.353553,0.353553,0],[0.353553,0.353553,90]]},
		{"name":"","hash":"bcba84","data":[[1.146447,0.957107,135],[1.146447,0.957107,45],[0.646447,0.957107,45],[0.646447,0.957107,135],[0.896447,0.707107,45],[0.896447,0.707107,135],[0.896447,0.707107,-45],[0.896447,0.707107,-135],[1.396447,0.707107,-45],[1.396447,0.707107,-135],[1.146447,0.457107,-135],[1.146447,0.457107,-45],[1.646447,0.457107,-135],[1.646447,0.457107,-45],[1.396447,0.707107,135],[1.396447,0.707107,45],[0.25,0,-45],[0.25,0,-135],[0,0.25,135],[0,0.25,-135],[0.71967,1.133883,-90],[0.71967,1.133883,180],[1.573223,1.133883,180],[1.573223,1.133883,90],[0.5,0.25,-135],[0.5,0.25,135],[0.5,0.25,45],[0.5,0.25,-45],[0.573223,0.78033,0],[0.573223,0.78033,90],[0.573223,0.426777,-90],[0.573223,0.426777,180]]},
		{"name":"","hash":"6573e1","data":[[0.926777,0.78033,90],[0.926777,0.78033,0],[0.573223,1.133883,0],[0.573223,1.133883,90],[0.573223,0.78033,0],[0.573223,0.78033,90],[0.573223,0.78033,-90],[0.573223,0.78033,180],[0.926777,1.133883,-90],[0.926777,1.133883,180],[0.573223,1.133883,180],[0.573223,1.133883,-90],[0.926777,0.78033,180],[0.926777,0.78033,-90],[0.926777,1.133883,90],[0.926777,1.133883,0],[1.103553,1.06066,-135],[1.103553,1.06066,135],[1.353553,1.31066,45],[1.353553,1.31066,135],[0.573223,1.487437,-90],[0.573223,1.487437,180],[0,0.25,-135],[0,0.25,135],[0.573223,0.426777,-90],[0.573223,0.426777,180],[0.573223,0.426777,90],[0.573223,0.426777,0],[0.5,0.25,135],[0.5,0.25,45],[0.25,0,-135],[0.25,0,-45]]},
		{"name":"","hash":"383714","data":[[0.603553,0.603553,-90],[0.603553,0.603553,180],[0.957107,0.25,180],[0.957107,0.25,-90],[0.957107,0.603553,180],[0.957107,0.603553,-90],[0.957107,0.603553,90],[0.957107,0.603553,0],[1.31066,0.603553,0],[1.31066,0.603553,-90],[1.31066,0.25,-90],[1.31066,0.25,0],[1.664214,0.603553,-90],[1.664214,0.603553,0],[1.31066,0.603553,180],[1.31066,0.603553,90],[1.31066,0.25,180],[1.31066,0.25,90],[1.664214,0.25,0],[1.664214,0.25,90],[0.53033,0.073223,-135],[0.53033,0.073223,135],[0,0,-90],[0,0,180],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[0.603553,0.603553,0],[0.603553,0.603553,90],[0.603553,0.25,-90],[0.603553,0.25,180]]},
		{"name":"","hash":"340ebd","data":[[0.5,1.25,-135],[0.5,1.25,135],[0.5,0.75,135],[0.5,0.75,-135],[0.75,1,135],[0.75,1,-135],[0.75,1,45],[0.75,1,-45],[0.25,1,45],[0.25,1,-45],[0.5,0.75,-45],[0.5,0.75,45],[0.5,1.25,-45],[0.5,1.25,45],[0.25,1,-135],[0.25,1,135],[1.176777,1.176777,0],[1.176777,1.176777,-90],[0.823223,1.176777,180],[0.823223,1.176777,-90],[0,0.25,-135],[0,0.25,135],[0.5,1.75,135],[0.5,1.75,45],[0.25,0,-135],[0.25,0,135],[0.25,0,45],[0.25,0,-45],[0.25,0.5,-135],[0.25,0.5,135],[0.5,0.25,-45],[0.5,0.25,45]]},
		// 68
		{"name":"","hash":"3970d4","data":[[0,0.81066,-45],[0,0.81066,-135],[0.5,0.81066,-135],[0.5,0.81066,-45],[0.25,1.06066,-135],[0.25,1.06066,-45],[0.25,1.06066,135],[0.25,1.06066,45],[0.78033,1.133883,-90],[0.78033,1.133883,180],[0.426777,1.133883,180],[0.426777,1.133883,-90],[0.78033,0.78033,180],[0.78033,0.78033,-90],[0.78033,1.133883,90],[0.78033,1.133883,0],[0.707107,0.25,135],[0.707107,0.25,45],[0.957107,0,-45],[0.957107,0,45],[1.133883,1.133883,90],[1.133883,1.133883,0],[0.603553,1.56066,135],[0.603553,1.56066,45],[1.133883,0.78033,-90],[1.133883,0.78033,180],[1.133883,0.78033,90],[1.133883,0.78033,0],[0.78033,0.426777,90],[0.78033,0.426777,180],[1.133883,0.426777,0],[1.133883,0.426777,-90]]},
		{"name":"","hash":"8fe924","data":[[0.5,0.75,-45],[0.5,0.75,-135],[1,0.75,-135],[1,0.75,-45],[0.75,1,-135],[0.75,1,-45],[0.75,1,135],[0.75,1,45],[0.75,0.5,135],[0.75,0.5,45],[1,0.75,45],[1,0.75,135],[0.5,0.75,45],[0.5,0.75,135],[0.75,0.5,-45],[0.75,0.5,-135],[1.073223,0.573223,180],[1.073223,0.573223,90],[1.426777,0.573223,0],[1.426777,0.573223,90],[0.75,1.5,135],[0.75,1.5,45],[0,0.25,135],[0,0.25,-135],[0.25,0,-135],[0.25,0,135],[0.25,0,45],[0.25,0,-45],[0.25,0.5,-135],[0.25,0.5,135],[0.5,0.25,-45],[0.5,0.25,45]]},
		{"name":"","hash":"8a0289","data":[[1.06066,0.03033,-45],[1.06066,0.03033,-135],[1.56066,0.03033,-135],[1.56066,0.03033,-45],[1.31066,0.28033,-135],[1.31066,0.28033,-45],[1.31066,0.28033,135],[1.31066,0.28033,45],[0.78033,0.353553,0],[0.78033,0.353553,-90],[0.78033,0,-90],[0.78033,0,0],[1.133883,0.353553,-90],[1.133883,0.353553,0],[0.78033,0.353553,180],[0.78033,0.353553,90],[1.133883,0.707107,0],[1.133883,0.707107,-90],[0.78033,0.707107,180],[0.78033,0.707107,-90],[0,0.323223,-135],[0,0.323223,135],[0.426777,0,180],[0.426777,0,90],[0.25,0.073223,-135],[0.25,0.073223,135],[0.25,0.073223,45],[0.25,0.073223,-45],[1.633883,0.207107,-90],[1.633883,0.207107,180],[1.987437,0.207107,0],[1.987437,0.207107,90]]},
		{"name":"","hash":"8891e0","data":[[1.06066,0.707107,90],[1.06066,0.707107,0],[0.707107,1.06066,0],[0.707107,1.06066,90],[0.707107,0.707107,0],[0.707107,0.707107,90],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.353553,0.707107,180],[0.353553,0.707107,90],[0.353553,1.06066,90],[0.353553,1.06066,180],[0,0.707107,90],[0,0.707107,180],[0.353553,0.707107,0],[0.353553,0.707107,-90],[1.767767,0,0],[1.767767,0,-90],[1.414214,0,180],[1.414214,0,-90],[1.06066,1.06066,0],[1.06066,1.06066,-90],[0.176777,1.133883,45],[0.176777,1.133883,-45],[1.06066,0.353553,-90],[1.06066,0.353553,180],[1.06066,0.353553,90],[1.06066,0.353553,0],[1.06066,0,-90],[1.06066,0,180],[1.414214,0,0],[1.414214,0,90]]},
		{"name":"","hash":"7d3bc4","data":[[0.633883,0.957107,-45],[0.633883,0.957107,-135],[1.133883,0.957107,-135],[1.133883,0.957107,-45],[0.883883,1.207107,-135],[0.883883,1.207107,-45],[0.883883,1.207107,135],[0.883883,1.207107,45],[0.353553,1.28033,0],[0.353553,1.28033,-90],[0.353553,0.926777,-90],[0.353553,0.926777,0],[0.707107,1.28033,-90],[0.707107,1.28033,0],[0.353553,1.28033,180],[0.353553,1.28033,90],[0.323223,0.5,135],[0.323223,0.5,45],[0.573223,0.25,-45],[0.573223,0.25,45],[0,1.28033,180],[0,1.28033,90],[0.323223,0,-45],[0.323223,0,-135],[0,0.926777,-90],[0,0.926777,180],[0,0.926777,90],[0,0.926777,0],[0.073223,0.75,45],[0.073223,0.75,135],[0.323223,0.5,-45],[0.323223,0.5,-135]]},
		{"name":"","hash":"f11ee7","data":[[1.06066,0.853553,90],[1.06066,0.853553,0],[0.707107,1.207107,0],[0.707107,1.207107,90],[0.707107,0.853553,0],[0.707107,0.853553,90],[0.707107,0.853553,-90],[0.707107,0.853553,180],[0.353553,0.853553,180],[0.353553,0.853553,90],[0.353553,1.207107,90],[0.353553,1.207107,180],[0,0.853553,90],[0,0.853553,180],[0.353553,0.853553,0],[0.353553,0.853553,-90],[1.06066,0.5,0],[1.06066,0.5,-90],[0.707107,0.5,180],[0.707107,0.5,-90],[1.414214,0,0],[1.414214,0,-90],[0.53033,1.383883,0],[0.53033,1.383883,-90],[1.06066,0,-90],[1.06066,0,180],[1.06066,0,90],[1.06066,0,0],[0.633883,0.323223,-135],[0.633883,0.323223,135],[0.883883,0.073223,-45],[0.883883,0.073223,45]]},
		{"name":"","hash":"08de58","data":[[0.53033,0.53033,0],[0.53033,0.53033,-90],[0.883883,0.883883,-90],[0.883883,0.883883,0],[0.53033,0.883883,-90],[0.53033,0.883883,0],[0.53033,0.883883,180],[0.53033,0.883883,90],[1.06066,0.81066,-45],[1.06066,0.81066,-135],[0.81066,0.56066,-135],[0.81066,0.56066,-45],[1.31066,0.56066,-135],[1.31066,0.56066,-45],[1.06066,0.81066,135],[1.06066,0.81066,45],[1.237437,1.237437,0],[1.237437,1.237437,-90],[0.883883,1.237437,180],[0.883883,1.237437,-90],[0,0,-90],[0,0,180],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[1.237437,0.883883,-90],[1.237437,0.883883,180],[1.59099,0.883883,0],[1.59099,0.883883,90]]},
		// 69
		{"name":"","hash":"404f1c","data":[[0.21967,1.353553,-90],[0.21967,1.353553,180],[0.573223,1,180],[0.573223,1,-90],[0.573223,1.353553,180],[0.573223,1.353553,-90],[0.573223,1.353553,90],[0.573223,1.353553,0],[0.25,1.073223,-45],[0.25,1.073223,-135],[0,0.823223,-135],[0,0.823223,-45],[0.5,0.823223,-135],[0.5,0.823223,-45],[0.25,1.073223,135],[0.25,1.073223,45],[0.926777,1.353553,90],[0.926777,1.353553,0],[0.926777,1,-90],[0.926777,1,0],[1,0.823223,45],[1,0.823223,-45],[0.926777,0,90],[0.926777,0,0],[0.75,0.573223,-135],[0.75,0.573223,135],[0.75,0.573223,45],[0.75,0.573223,-45],[0.5,0.323223,-135],[0.5,0.323223,135],[0.75,0.073223,-45],[0.75,0.073223,45]]},
		{"name":"","hash":"8517eb","data":[[0.073223,0.53033,-45],[0.073223,0.53033,-135],[0.573223,0.53033,-135],[0.573223,0.53033,-45],[0.323223,0.78033,-135],[0.323223,0.78033,-45],[0.323223,0.78033,135],[0.323223,0.78033,45],[0.823223,0.78033,135],[0.823223,0.78033,45],[1.073223,1.03033,45],[1.073223,1.03033,135],[0.573223,1.03033,45],[0.573223,1.03033,135],[0.823223,0.78033,-45],[0.823223,0.78033,-135],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[1.323223,0.28033,45],[1.323223,0.28033,-45],[1.323223,0.78033,45],[1.323223,0.78033,-45],[1.073223,0.53033,-135],[1.073223,0.53033,135],[1.073223,0.53033,45],[1.073223,0.53033,-45],[0,0.353553,-90],[0,0.353553,180],[0.353553,0.353553,0],[0.353553,0.353553,90]]},
		{"name":"","hash":"7257d8","data":[[0.926777,0.53033,-45],[0.926777,0.53033,-135],[1.426777,0.53033,-135],[1.426777,0.53033,-45],[1.176777,0.78033,-135],[1.176777,0.78033,-45],[1.176777,0.78033,135],[1.176777,0.78033,45],[0.676777,0.78033,135],[0.676777,0.78033,45],[0.926777,1.03033,45],[0.926777,1.03033,135],[0.426777,1.03033,45],[0.426777,1.03033,135],[0.676777,0.78033,-45],[0.676777,0.78033,-135],[1.5,0,0],[1.5,0,-90],[1.146447,0,180],[1.146447,0,-90],[0,0.853553,-90],[0,0.853553,180],[0.176777,0.78033,-135],[0.176777,0.78033,135],[0.426777,0.53033,-135],[0.426777,0.53033,135],[0.426777,0.53033,45],[0.426777,0.53033,-45],[1.5,0.353553,-90],[1.5,0.353553,0],[1.146447,0.353553,180],[1.146447,0.353553,90]]},
		{"name":"","hash":"542222","data":[[1,1,135],[1,1,45],[0.5,1,45],[0.5,1,135],[0.75,0.75,45],[0.75,0.75,135],[0.75,0.75,-45],[0.75,0.75,-135],[0.25,0.75,-45],[0.25,0.75,-135],[0,0.5,-135],[0,0.5,-45],[0.5,0.5,-135],[0.5,0.5,-45],[0.25,0.75,135],[0.25,0.75,45],[1.75,0.25,45],[1.75,0.25,-45],[1.5,0,-135],[1.5,0,-45],[0.926777,1.176777,0],[0.926777,1.176777,-90],[0.573223,1.176777,90],[0.573223,1.176777,0],[1.25,0.25,-135],[1.25,0.25,135],[1.25,0.25,45],[1.25,0.25,-45],[1.25,0.75,-45],[1.25,0.75,45],[1,0.5,-135],[1,0.5,135]]},
		{"name":"","hash":"85f5a1","data":[[1,1.176777,135],[1,1.176777,45],[0.5,1.176777,45],[0.5,1.176777,135],[0.75,0.926777,45],[0.75,0.926777,135],[0.75,0.926777,-45],[0.75,0.926777,-135],[0.5,0.676777,-135],[0.5,0.676777,135],[0.25,0.926777,135],[0.25,0.926777,-135],[0.25,0.426777,135],[0.25,0.426777,-135],[0.5,0.676777,45],[0.5,0.676777,-45],[0,0.323223,135],[0,0.323223,45],[0.25,0.073223,-45],[0.25,0.073223,45],[1,0.676777,-45],[1,0.676777,-135],[1.5,0.676777,45],[1.5,0.676777,-45],[1.25,0.926777,-135],[1.25,0.926777,135],[1.25,0.926777,45],[1.25,0.926777,-45],[0.426777,0,0],[0.426777,0,-90],[0.426777,0.353553,90],[0.426777,0.353553,180]]},
		{"name":"","hash":"840c49","data":[[0.823223,1.133883,135],[0.823223,1.133883,45],[0.323223,1.133883,45],[0.323223,1.133883,135],[0.573223,0.883883,45],[0.573223,0.883883,135],[0.573223,0.883883,-45],[0.573223,0.883883,-135],[1.073223,0.883883,-45],[1.073223,0.883883,-135],[0.823223,0.633883,-135],[0.823223,0.633883,-45],[1.323223,0.633883,-135],[1.323223,0.633883,-45],[1.073223,0.883883,135],[1.073223,0.883883,45],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[0,0.707107,90],[0,0.707107,0],[0.323223,0.633883,-45],[0.323223,0.633883,-135],[0.073223,0.883883,-135],[0.073223,0.883883,135],[0.073223,0.883883,45],[0.073223,0.883883,-45],[0,0.353553,-90],[0,0.353553,180],[0.353553,0.353553,0],[0.353553,0.353553,90]]},
		{"name":"","hash":"b2175d","data":[[0.78033,0.53033,-45],[0.78033,0.53033,-135],[1.28033,0.53033,-135],[1.28033,0.53033,-45],[1.03033,0.78033,-135],[1.03033,0.78033,-45],[1.03033,0.78033,135],[1.03033,0.78033,45],[1.53033,0.78033,135],[1.53033,0.78033,45],[1.78033,1.03033,45],[1.78033,1.03033,135],[1.28033,1.03033,45],[1.28033,1.03033,135],[1.53033,0.78033,-45],[1.53033,0.78033,-135],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[1.207107,1.207107,180],[1.207107,1.207107,90],[0.853553,1.207107,-90],[0.853553,1.207107,180],[0.353553,0.353553,-90],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.707107,0.707107,-90],[0.707107,0.707107,0],[0.353553,0.707107,180],[0.353553,0.707107,90]]},

		{"name":"","hash":"ceab30","data":[[0.5,0.396447,135],[0.5,0.396447,45],[0,0.396447,45],[0,0.396447,135],[0.25,0.146447,45],[0.25,0.146447,135],[0.25,0.146447,-45],[0.25,0.146447,-135],[1.125,1.125,-135],[1.125,1.125,135],[0.875,1.375,135],[0.875,1.375,-135],[0.875,0.875,135],[0.875,0.875,-135],[1.125,1.125,45],[1.125,1.125,-45],[0.396447,1.353553,45],[0.396447,1.353553,-45],[0.146447,1.103553,-135],[0.146447,1.103553,-45],[1,0,90],[1,0,0],[0.573223,0.926777,90],[0.573223,0.926777,0],[0.573223,0.573223,-90],[0.573223,0.573223,180],[0.573223,0.573223,90],[0.573223,0.573223,0],[0.75,0.5,-135],[0.75,0.5,135],[1,0.25,-45],[1,0.25,45]]},
		{"name":"","hash":"08fa46","data":[[0.271447,1.31066,-90],[0.271447,1.31066,180],[0.625,0.957107,180],[0.625,0.957107,-90],[0.625,1.31066,180],[0.625,1.31066,-90],[0.625,1.31066,90],[0.625,1.31066,0],[0.698223,0,180],[0.698223,0,90],[0.698223,0.353553,90],[0.698223,0.353553,180],[0.34467,0,90],[0.34467,0,180],[0.698223,0,0],[0.698223,0,-90],[1.508883,0.25,0],[1.508883,0.25,-90],[1.15533,0.25,180],[1.15533,0.25,-90],[0,0.40533,-135],[0,0.40533,135],[0.25,0.65533,135],[0.25,0.65533,45],[0.625,0.53033,-135],[0.625,0.53033,135],[0.625,0.53033,45],[0.625,0.53033,-45],[0.801777,0.603553,-90],[0.801777,0.603553,180],[1.15533,0.603553,0],[1.15533,0.603553,90]]}

	]

};

export default section;
