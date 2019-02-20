let svg = d3.selectAll('body').append('svg')
	.attr('width', 500)
	.attr('height', 340);

let data_1 = [
	{"x": 100, "y": 100},
	{"x": 100, "y": 150},
	{"x": 100, "y": 200},
	{"x": 100, "y": 50},
	{"x": 100, "y": 250}
];

let data_2 = [
	{"x": 200, "y": 100},
	{"x": 200, "y": 150},
	{"x": 200, "y": 200}
]

function appendG(data) {
	let ex = [];
	
	let g = svg.append('g');

	for (let i = 0; i < data.length; i++) {
		g.append('circle')
			.attr('cx', data[i].x)
			.attr('cy', data[i].y)
			.attr('r', 3)
			.attr('fill', 'orange');

		ex.push(data[i].y);
	}

	g.append('path')
		.attr('d', 'M' + data[0].x + ',' + d3.min(ex) + 'V' + d3.max(ex))
		.attr('stroke', 'orange');
}

appendG(data_1);
appendG(data_2);