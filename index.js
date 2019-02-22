let w = 500;
let h = 340;

let svg = d3.selectAll('body').append('svg')
	.attr('width', w)
	.attr('height', h);

let data_4 = {
	"position": 300,
	"event": [
		{"id": 1, "date": "01-01-2010"},
		{"id": 2, "date": "02-02-2011"},
		{"id": 3, "date": "02-02-2012"}
	]
}

let formatTime = d3.timeFormat("%d-%m-%Y"); // Перевести из машинной даты в стройчный
let parseTime = d3.timeParse("%d-%m-%Y"); // Перевести строчной даты в машинный

let xScale = d3.scaleLinear()
	.domain([0, w/2])
	.range([0, w]);
let yScale = d3.scaleTime()
	.domain([new Date(2009,1,1), new Date(2013,2,2)])
	.range([0, h]);

let xAxis = d3.axisTop()
	.scale(xScale);
let yAxis = d3.axisRight()
	.scale(yScale);

let gX = svg.append('g').call(xAxis) // Создать ось X
	.attr('transform', 'translate(0,' + (h+2) + ')');
let gY = svg.append('g').call(yAxis) // Создать ось Y
	.attr('transform', 'translate(-2, 0)');

function appendT(data) {
	let ex = [];
	let g = svg.append('g'); // Создать группу для процесса
	for (let i = 0; i < data.event.length; i++) {
		data.event[i].date = parseTime(data.event[i].date); // Парсинг даты в машинный
		g.append('circle') // Отрисовка кругов
			.attr('cx', data.position)
			.attr('cy', yScale(data.event[i].date))
			.attr('r', 3)
			.attr('fill', 'orange')
			.attr('id', data.event.id);
		ex.push(data.event[i].date); // Добавить Y координату в массив
	}
	g.append('path') // Создать path путем нахождения min и max значений
		.attr('d', 'M' + data.position + ',' + yScale(d3.min(ex)) + 'V' + yScale(d3.max(ex)))
		.attr('stroke', 'orange');

	yScale.domain([new Date(1980,1,1), new Date(2013,2,2)]);	

	let min = d3.min(ex);
	let max = d3.max(ex);
	console.log(min + " -------- " + max);
}

appendT(data_4);
