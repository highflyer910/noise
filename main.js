$(document).ready(function () {
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		h = 600,
		w = 800,
		color = 'mono',
		id = ctx.createImageData(w,h),
		data = id.data;

	canvas.height = h;
	canvas.width = w;

	data[0] = 0;
	data[1] = 0;
	data[2] = 0;
	data[3] = Math.random();

	function makeSpot(id, x, y, r, g, b, a) {
		var index = (x + y * id.width) * 4;
		id.data[index+0] = r;
		id.data[index+1] = g;
		id.data[index+2] = b;
		id.data[index+3] = a;
	};

	var shade = 0;

	function noise() {

		for (var i = 0; i < h; i++) {
			for (var j = 0; j < w; j++) {
				shade = Math.random() * 255;
				r = shade;
				g = shade;
				b = shade;
			
				makeSpot(id, j, i, r, g, b, 255);
		        }
		}
		ctx.putImageData(id, 0, 0);

		setTimeout(noise, 60);		
	};

	noise();
});
