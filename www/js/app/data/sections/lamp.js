'use strict';
/*global window */

var section = {

	id: 'lamps',
	name: 'lamps',
	data: [

		//133
		{"name":"","hash":"789a0e","data":[[0,0.353553,-90],[0,0.353553,180],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.707107,0,-90],[0.707107,0,0],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.53033,1.06066,180],[0.53033,1.06066,90],[0.883883,1.06066,0],[0.883883,1.06066,90],[0.883883,0.707107,0],[0.883883,0.707107,-90],[0.176777,0.707107,-90],[0.176777,0.707107,180],[0.53033,0.707107,-90],[0.53033,0.707107,180],[0.53033,0.707107,90],[0.53033,0.707107,0],[0.53033,1.06066,-90],[0.53033,1.06066,0],[0.176777,1.06066,180],[0.176777,1.06066,90]]},
		{"name":"","hash":"fa6bc2","data":[[0,0.353553,-90],[0,0.353553,180],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.707107,0,-90],[0.707107,0,0],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.707107,1.767767,0],[0.707107,1.767767,-90],[0.353553,1.767767,180],[0.353553,1.767767,-90],[0.53033,0.707107,180],[0.53033,0.707107,90],[0.53033,1.06066,0],[0.53033,1.06066,-90],[0.53033,1.414214,-90],[0.53033,1.414214,180],[0.53033,1.414214,90],[0.53033,1.414214,0],[0.53033,0.707107,0],[0.53033,0.707107,-90],[0.53033,1.06066,90],[0.53033,1.06066,180]]},
		{"name":"","hash":"2be1f2","data":[[0.5,1.957107,135],[0.5,1.957107,45],[0,1.957107,45],[0,1.957107,135],[0.25,1.707107,45],[0.25,1.707107,135],[0.25,1.707107,-45],[0.25,1.707107,-135],[0.25,0,135],[0.25,0,45],[0.5,0.25,45],[0.5,0.25,135],[0,0.25,45],[0,0.25,135],[0.25,0,-45],[0.25,0,-135],[0.073223,1.28033,180],[0.073223,1.28033,90],[0.426777,1.28033,0],[0.426777,1.28033,90],[0,0.25,-45],[0,0.25,-135],[0.25,0.5,-45],[0.25,0.5,-135],[0.25,0.926777,-90],[0.25,0.926777,180],[0.25,0.926777,90],[0.25,0.926777,0],[0.25,0.5,45],[0.25,0.5,135],[0.5,0.25,-45],[0.5,0.25,-135]]},
		{"name":"","hash":"fc7cb8","data":[[0.78033,1.53033,135],[0.78033,1.53033,45],[0.28033,1.53033,45],[0.28033,1.53033,135],[0.53033,1.28033,45],[0.53033,1.28033,135],[0.53033,1.28033,-45],[0.53033,1.28033,-135],[0.53033,0.426777,135],[0.53033,0.426777,45],[0.78033,0.676777,45],[0.78033,0.676777,135],[0.28033,0.676777,45],[0.28033,0.676777,135],[0.53033,0.426777,-45],[0.53033,0.426777,-135],[0.707107,0,0],[0.707107,0,-90],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[0,0.353553,-90],[0,0.353553,180],[0.53033,0.853553,-90],[0.53033,0.853553,180],[0.53033,0.853553,90],[0.53033,0.853553,0],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90]]},

		{"name":"","hash":"49a815","data":[[0,0.353553,-90],[0,0.353553,180],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.707107,0,-90],[0.707107,0,0],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.28033,1.03033,-135],[0.28033,1.03033,135],[0.53033,1.28033,45],[0.53033,1.28033,135],[0.53033,1.28033,-45],[0.53033,1.28033,-135],[0.53033,0.78033,45],[0.53033,0.78033,-45],[0.53033,1.707107,-90],[0.53033,1.707107,180],[0.53033,1.707107,90],[0.53033,1.707107,0],[0.78033,1.03033,-45],[0.78033,1.03033,45],[0.53033,0.78033,-135],[0.53033,0.78033,135]]},
		{"name":"","hash":"e71063","data":[[0,0.353553,-90],[0,0.353553,180],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.707107,0,-90],[0.707107,0,0],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90],[0.707107,1.06066,0],[0.707107,1.06066,-90],[0.353553,1.06066,180],[0.353553,1.06066,-90],[0.353553,1.414214,0],[0.353553,1.414214,-90],[0.707107,1.414214,180],[0.707107,1.414214,90],[0.53033,0.707107,-90],[0.53033,0.707107,180],[0.53033,0.707107,90],[0.53033,0.707107,0],[0.353553,1.414214,90],[0.353553,1.414214,180],[0.707107,1.414214,0],[0.707107,1.414214,-90]]},
		{"name":"","hash":"baccf7","data":[[0.5,0.5,135],[0.5,0.5,45],[0,0.5,45],[0,0.5,135],[0.25,0.25,45],[0.25,0.25,135],[0.25,0.25,-45],[0.25,0.25,-135],[1.25,0.25,135],[1.25,0.25,45],[1.5,0.5,45],[1.5,0.5,135],[1,0.5,45],[1,0.5,135],[1.25,0.25,-45],[1.25,0.25,-135],[0.926777,1.03033,0],[0.926777,1.03033,-90],[0.573223,1.03033,180],[0.573223,1.03033,-90],[0.5,0,-45],[0.5,0,-135],[0.75,0.25,-45],[0.75,0.25,-135],[0.75,0.676777,-90],[0.75,0.676777,180],[0.75,0.676777,90],[0.75,0.676777,0],[0.75,0.25,45],[0.75,0.25,135],[1,0,-45],[1,0,-135]]},
		{"name":"","hash":"15c6fe","data":[[0,0.353553,-90],[0,0.353553,180],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[1.06066,0.353553,0],[1.06066,0.353553,-90],[1.06066,0,-90],[1.06066,0,0],[1.414214,0.353553,-90],[1.414214,0.353553,0],[1.06066,0.353553,180],[1.06066,0.353553,90],[0.883883,1.06066,0],[0.883883,1.06066,-90],[0.53033,1.06066,180],[0.53033,1.06066,-90],[0.707107,0,180],[0.707107,0,90],[0.707107,0.353553,0],[0.707107,0.353553,-90],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.707107,0.707107,90],[0.707107,0.707107,0],[0.707107,0,0],[0.707107,0,-90],[0.707107,0.353553,90],[0.707107,0.353553,180]]}

	]

};

export default section;