function onloadD3(){

	var darData = [70.48, 67.35, 67.22, 81.51, 15.04, 38.86, 30.29, 67.09, 6.23, 82.03, 50.04, 32.50, 39.47, 38.46, 12.72, 53.08, 41.94, 91.96, 73.57, 82.23, 81.43, 66.90, 6.61, 63.27, 70.71, 99.44, 85.27, 95.99, 8.82, 89.74, 20.12, 75.46, 83.59, 99.43, 88.08, 39.95, 33.31, 58.53, 27.48, 37.88, 4.72, 47.23, 66.80, 7.71, 87.71, 21.46, 57.41, 82.96, 36.33, 51.62, 60.32, 21.10, 66.88, 70.61, 98.32, 35.05, 94.11, 87.44, 36.03, 48.71, 29.28, 77.22, 60.12, 69.12, 99.96, 32.23, 86.43, 14.42, 78.91, 87.11, 19.23, 6.81, 13.85, 38.75, 94.32, 47.26, 21.19, 54.25, 69.47, 93.92, 42.82, 47.58, 68.92, 24.98, 68.49, 42.51, 76.28, 33.26, 79.23, 0.75, 43.70, 43.99, 26.47, 64.44, 28.43, 35.85, 55.14, 7.41, 26.43, 21.43];

	var tempColor;

	var margin = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};
	
	var oWidth,
		oHeight = 300;
	
	if($(window).width() <= 767.98){
		oWidth = 700;
	}
	else{
		oWidth = $(".chart").width();
	}
	
	console.log(oWidth);
	
	

	var width = oWidth - margin.top - margin.bottom,
		height = oHeight - margin.left - margin.right;

	var yScale =
	  d3.scale.linear()
	  .domain([0, d3.max(darData)])
	  .range([0, height]);

	var xScale =
	  d3.scale.ordinal()
	  .domain(d3.range(0, darData.length))
	  .rangeBands([0, width], .2);

	var colors =
	  d3.scale.linear()
	  .domain([0, darData.length])
	  .range(['#b5dff5', '#b5dff5']);

	var tooltip =
	  d3.select('body').append('div')
	  .attr('class', 'tooltip');

	var chart =
	  d3.select('#chart')
	  .append('svg')
	  .attr('width', oWidth)
	  .attr('height', oHeight)
	  .append('g')
	  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
	  .selectAll('rect').data(darData)
	  .enter().append('rect')
	  .style('fill', function(d, i) {
		return colors(i)
	  })
	  .attr('width', xScale.rangeBand())
	  .attr('height', 0)
	  .attr('x', function(d, i) {
		return xScale(i)
	  })
	  .attr('y', height)
	  .on('mouseover', function(d) {
		tooltip.transition()
		  .style('opacity', "0.8")
		tooltip.html(d)
		  .style('left', (d3.event.pageX - 35) + 'px')
		  .style('top', (d3.event.pageY + 20) + 'px')
		tempColor = this.style.fill;
		d3.select(this)
		  .style('opacity', "1")
		  .style('fill', '#2979FF')
	  })
	  .on('mouseout', function(d) {
		tooltip.style('opacity', 0)
		d3.select(this)
		  .style('opacity', '1')
		  .style('fill', tempColor)
	  });

	chart.transition()
		 .attr('height', function(d) {
			return yScale(d);
		  })
		 .attr('y', function(d) {
			return (height - yScale(d))
		  })
		 .delay(function(d, i) {
			return i * 20;
		  })
		 .duration(1000)
		 .ease('elastic');
//
//	var yAxis =
//	  d3.svg.axis()
//		.scale(yGuideScale)
//		.orient('left')
//		.ticks(10);
//
//	var yGuide =
//	  d3.select('svg')
//		.append('g')
//		.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
//
//	yAxis(yGuide);
//
//	var xAxis =
//	  d3.svg.axis()
//		.scale(xScale)
//		.orient('bottom')
//		.tickValues(xScale.domain().filter(function(d, i) {
//		  return !(i % 10)
//		}));
//
//	var xGuide =
//	  d3.select('svg')
//		.append('g')
//		.attr('transform', 'translate(' + margin.left + ', ' + (height + margin.top) + ' )');
//
//	xAxis(xGuide);
	
}

$(window).on("load", function(){
	onloadD3();
});