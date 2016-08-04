'use strict';
/*global window */

var section = {

	id: 'trees',
	name: 'trees',
	data: [

		// 98
		{"name":"","hash":"c1ccc5","data":[[0,0.707107,-90],[0,0.707107,180],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.707107,180],[0.353553,0.707107,-90],[0.353553,0.707107,90],[0.353553,0.707107,0],[0.707107,0.707107,0],[0.707107,0.707107,-90],[0.707107,0.353553,-90],[0.707107,0.353553,0],[1.06066,0.707107,-90],[1.06066,0.707107,0],[0.707107,0.707107,180],[0.707107,0.707107,90],[0.707107,0,0],[0.707107,0,-90],[0.353553,0,180],[0.353553,0,-90],[0.707107,0.353553,180],[0.707107,0.353553,90],[1.06066,0.353553,0],[1.06066,0.353553,-90],[0.53033,1.06066,-90],[0.53033,1.06066,180],[0.53033,1.06066,90],[0.53033,1.06066,0],[0,0.353553,-90],[0,0.353553,180],[0.353553,0.353553,0],[0.353553,0.353553,90]]},
		{"name":"","hash":"b2a24d","data":[[0,1.133883,-90],[0,1.133883,180],[0.353553,0.78033,180],[0.353553,0.78033,-90],[0.353553,1.133883,180],[0.353553,1.133883,-90],[0.353553,1.133883,90],[0.353553,1.133883,0],[1.06066,1.133883,0],[1.06066,1.133883,-90],[1.06066,0.78033,-90],[1.06066,0.78033,0],[1.414214,1.133883,-90],[1.414214,1.133883,0],[1.06066,1.133883,180],[1.06066,1.133883,90],[1.06066,0.426777,0],[1.06066,0.426777,-90],[0.707107,0.426777,180],[0.707107,0.426777,-90],[0.707107,0,135],[0.707107,0,45],[0.707107,0.25,135],[0.707107,0.25,45],[0.707107,1.487437,-90],[0.707107,1.487437,180],[0.707107,1.487437,90],[0.707107,1.487437,0],[0.353553,0.426777,-90],[0.353553,0.426777,180],[0.707107,0.426777,0],[0.707107,0.426777,90]]},
		{"name":"","hash":"8cae6c","data":[[0,1.207107,-90],[0,1.207107,180],[0.353553,0.853553,180],[0.353553,0.853553,-90],[0.353553,1.207107,180],[0.353553,1.207107,-90],[0.353553,1.207107,90],[0.353553,1.207107,0],[0.707107,1.207107,0],[0.707107,1.207107,-90],[0.707107,0.853553,-90],[0.707107,0.853553,0],[1.06066,1.207107,-90],[1.06066,1.207107,0],[0.707107,1.207107,180],[0.707107,1.207107,90],[0.707107,0,0],[0.707107,0,-90],[0.353553,0,180],[0.353553,0,-90],[0.78033,0.676777,135],[0.78033,0.676777,45],[0.53033,0.426777,135],[0.53033,0.426777,45],[0.53033,1.56066,-90],[0.53033,1.56066,180],[0.53033,1.56066,90],[0.53033,1.56066,0],[0.28033,0.676777,45],[0.28033,0.676777,135],[0.53033,0.426777,-45],[0.53033,0.426777,-135]]},
		{"name":"","hash":"a226e6","data":[[0.25,0.073223,45],[0.25,0.073223,-45],[0.25,0.573223,-45],[0.25,0.573223,45],[0,0.323223,-45],[0,0.323223,45],[0,0.323223,-135],[0,0.323223,135],[0.853553,0.323223,-135],[0.853553,0.323223,135],[0.603553,0.573223,135],[0.603553,0.573223,-135],[0.603553,0.073223,135],[0.603553,0.073223,-135],[0.853553,0.323223,45],[0.853553,0.323223,-45],[0.426777,0.707107,90],[0.426777,0.707107,0],[0.426777,0.353553,-90],[0.426777,0.353553,0],[0.426777,0,180],[0.426777,0,90],[0.426777,0.707107,-90],[0.426777,0.707107,180],[0.426777,1.06066,-90],[0.426777,1.06066,180],[0.426777,1.06066,90],[0.426777,1.06066,0],[0.426777,0.353553,180],[0.426777,0.353553,90],[0.426777,0,-90],[0.426777,0,0]]},
		{"name":"","hash":"db046c","data":[[0.353553,0.78033,180],[0.353553,0.78033,90],[0,0.426777,90],[0,0.426777,180],[0.353553,0.426777,90],[0.353553,0.426777,180],[0.353553,0.426777,0],[0.353553,0.426777,-90],[0.323223,0,135],[0.323223,0,45],[0.573223,0.25,45],[0.573223,0.25,135],[0.073223,0.25,45],[0.073223,0.25,135],[0.323223,0,-45],[0.323223,0,-135],[0.707107,0.78033,90],[0.707107,0.78033,0],[0.707107,0.426777,-90],[0.707107,0.426777,0],[0.707107,0.426777,180],[0.707107,0.426777,90],[0,0.426777,0],[0,0.426777,-90],[0.353553,1.133883,-90],[0.353553,1.133883,180],[0.353553,1.133883,90],[0.353553,1.133883,0],[0.353553,0.78033,-90],[0.353553,0.78033,0],[0,0.78033,180],[0,0.78033,90]]},
		{"name":"","hash":"784285","data":[[0,1.06066,-90],[0,1.06066,180],[0.353553,0.707107,180],[0.353553,0.707107,-90],[0.353553,1.06066,180],[0.353553,1.06066,-90],[0.353553,1.06066,90],[0.353553,1.06066,0],[1.06066,1.06066,0],[1.06066,1.06066,-90],[1.06066,0.707107,-90],[1.06066,0.707107,0],[1.414214,1.06066,-90],[1.414214,1.06066,0],[1.06066,1.06066,180],[1.06066,1.06066,90],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.53033,0,-90],[0.53033,0,180],[0.883883,0,0],[0.883883,0,-90],[0.707107,1.414214,-90],[0.707107,1.414214,180],[0.707107,1.414214,90],[0.707107,1.414214,0],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90]]},
		{"name":"","hash":"6433c0","data":[[0,0.883883,-90],[0,0.883883,180],[0.353553,0.53033,180],[0.353553,0.53033,-90],[0.353553,0.883883,180],[0.353553,0.883883,-90],[0.353553,0.883883,90],[0.353553,0.883883,0],[0.707107,0.883883,0],[0.707107,0.883883,-90],[0.707107,0.53033,-90],[0.707107,0.53033,0],[1.06066,0.883883,-90],[1.06066,0.883883,0],[0.707107,0.883883,180],[0.707107,0.883883,90],[0.707107,0.176777,0],[0.707107,0.176777,-90],[0.353553,0.176777,180],[0.353553,0.176777,-90],[0.78033,1.31066,135],[0.78033,1.31066,45],[0.53033,0,135],[0.53033,0,45],[0.53033,1.487437,-90],[0.53033,1.487437,180],[0.53033,1.487437,90],[0.53033,1.487437,0],[0.28033,1.31066,45],[0.28033,1.31066,135],[0.53033,1.06066,-45],[0.53033,1.06066,-135]]}

	]

};

export default section;