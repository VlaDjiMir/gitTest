let svg = d3.selectAll('body').append('svg')
	.attr('width', 500)
	.attr('height', 340);

function appendG(x, y) {
	let g = svg.append('g')
		.data([{ "x": x, "y": y }])
		.attr('transform', 'translate(' + x + ',' + y + ')');
	
	g.append('circle')
		.attr('r', 5)
		.attr('fill', 'orange');
}

appendG(100, 100);