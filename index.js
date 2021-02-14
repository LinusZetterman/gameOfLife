function setup() {	
	win = {
		x: 50,
		y: 50
	};
	
	display = {
		width: 500,
		height: 500
	};
	
	coords = [];
	createCanvas(display.width, display.width);
	for (var x = 0; x < win.x; x += 1) {
		coords.push([]);
		for (var y = 0; y < win.y; y += 1) {
			coords[x].push(0);
		}
	}
	stroke(0, 150, 0);
	console.log(coords);

	coords[3][2] = 1;
	coords[3][3] = 1;
	coords[3][4] = 1;

	// top left
	coords[5][4] = 1;
	coords[6][2] = 1;
	coords[7][3] = 1;

	iterations = 0;
}

function draw() {
	iterations += 1;

	background(0, 255, 0);

	for (x = 1; x < win.x-1; x += 1) {
		for (y = 1; y < win.y-1; y += 1) {
			var sum = 0;
			
			if (coords[x][y-1] == 1) {
				sum += 1;
			}
			if (coords[x+1][y-1] == 1) {
				sum += 1;
			}
			if (coords[x+1][y] == 1) {
				sum += 1;
			}
			if (coords[x+1][y+1] == 1) {
				sum += 1;
			}
			if (coords[x][y+1] == 1) {
				sum += 1;
			}
			if (coords[x-1][y+1] == 1) {
				sum += 1;
			}
			if (coords[x-1][y] == 1) {
				sum += 1;
			}
			if (coords[x-1][y-1] == 1) {
				sum += 1;
			}

			if (coords[x][y] == 1) {
				if (sum == 2 || sum == 3) {
					coords[x][y] = 1;
				}

				else {
					coords[x][y] = 0;
				}

			}

			else {
				if (sum == 3) {
					coords[x][y] = 1;
				}

			}
		}
	}
	
	for (x = 0; x < win.x; x += 1) {
		for (y = 0; y < win.y; y += 1) {
			if (coords[x][y] == 0) {
				fill(0, 0, 0);
			}
			else {
				fill(255, 255, 255);
			}
			rect((display.width / win.x) * x, (display.height / win.y) * y, 25, 25);
		}
	}

	document.getElementById("iterations").innerHTML = "Iterationer: " + iterations;
}