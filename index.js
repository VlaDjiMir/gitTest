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
	{"x": 250, "y": 90},
	{"x": 250, "y": 120},
	{"x": 250, "y": 150}
];

let data_4 = {
	"position": 300,
	"event": [
		{"id": 1, "date": "01-01-2000"},
		{"id": 2, "date": "02-02-2000"},
		{"id": 3, "date": "03-03-2000"},
		{"id": 4, "date": "04-04-2000"}
	]
}

let formatTime = d3.timeFormat("%d-%m-%Y");
let parseTime = d3.timeParse("%d-%m-%Y");

let xScale = d3.scaleLinear()
	.domain([0, w/2])
	.range([0, w]);
let yScale = d3.scaleTime()
	.domain([new Date(1999, 10, 1), new Date(2000, 6, 1)])
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

function appendT(data) {
	let ex = [];

	let g = svg.append('g');

	for (let i = 0; i < data.event.length; i++) {
		data.event[i].date = parseTime(data.event[i].date);
		
		g.append('circle')
			.attr('cx', data.position)
			.attr('cy', yScale(data.event[i].date))
			.attr('r', 3)
			.attr('fill', 'orange');

		ex.push(data.event[i].date);
	}

	console.log(ex);

	g.append('path')
		.attr('d', 'M' + data.position + ',' + yScale(d3.min(ex)) + 'V' + yScale(d3.max(ex)))
		.attr('stroke', 'orange');
}

appendG(data_1);
appendG(data_2);
appendG(data_3);
appendT(data_4);