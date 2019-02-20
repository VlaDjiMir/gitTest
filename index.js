let w = 500;
let h = 340;

let svg = d3.selectAll('body').append('svg')
	.attr('width', w)
	.attr('height', h);

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
];

let data_3 = [
	{"x": 200, "y": 100},
	{"x": 200, "y": 150},
	{"x": 200, "y": 200}
];

let xScale = d3.scaleLinear()
	.domain([0, w/2])
	.range([0, w]);
let yScale = d3.scaleTime()
	.domain([new Date(2016, 0, 1), new Date(2019, 2, 20)])
	.range([0, h]);

let xAxis = d3.axisTop()
	.scale(xScale);
let yAxis = d3.axisRight()
	.scale(yScale);

let gX = svg.append('g').call(xAxis)
	.attr('transform', 'translate(0,' + (h+2) + ')');
let gY = svg.append('g').call(yAxis)
	.attr('transform', 'translate(-2, 0)');


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