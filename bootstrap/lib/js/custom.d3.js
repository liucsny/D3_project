var margin = { top: 50, right: 10, bottom: 100, left: 30 },
				width = 1320 - margin.left - margin.right,
				height = 726 - margin.top - margin.bottom,
				gridSizeWidth = Math.floor((width+14) / 185),
				gridSizeHeight = Math.floor(600/ 200),
				legendElementWidth = gridSizeWidth*5,
				buckets = 8,
				colors = ["#ffffe3","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],
				frequency = ["200", "160", "120", "80", "40", "0"],
				days = ["5.11", "5.26", "6.11", "6.26", "7.11", "7.26", "8.11", "8.26", "9.11", "9.26", "10.11", "10.26", "11.11"];
				datasets = ["data_converted.csv","data_converted_2.csv"];

			var svg = d3.select("#chart_1").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			var frequencyLabels = svg.selectAll(".frequencyLabel")
				.data(frequency)
				.enter().append("text")
				.text(function (d) { return d; })
				.attr("x", -6)
				.attr("y", function (d, i) { return i * gridSizeHeight*40; })
				.style("text-anchor", "end")
				.style("font-size", "9pt")
				.style("font-family", "Consolas, courier")
				.style("fill", "#aaa")
				.attr("transform", "translate(-6," + gridSizeWidth / 1.5 + ")")
				.attr("class", function (d, i) { 
					return "frequencyLabel mono axis axis-workweek"; 
				});

			var dayLabels = svg.selectAll(".dayLabel")
				.data(days)
				.enter().append("text")
				.text(function(d) { return d; })
				.attr("x", function(d, i) { return i * gridSizeWidth*15.5; })
				.attr("y", height+ margin.top)
				.style("text-anchor", "middle")
				.style("font-size", "9pt")
				.style("font-family", "Consolas, courier")
				.style("fill", "#aaa")
				.attr("transform", "translate(" + gridSizeWidth / 2 + ", -6)")
				.attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "dayLabel mono axis axis-workday" : "dayLabel mono axis"); });



			var heatmapChart = function(csvFile){
				d3.csv(csvFile,function(d) {
					return {
					frequency: +d.frequency,
					time: +d.time,
					value: +d.value};
				},function(error,data){
					console.log(data);
					var colorScale = d3.scale.quantile()
						.domain([0, buckets - 1, d3.max(data, function (d) { return d.value; })])
						.range(colors)

					var cards = svg.selectAll(".time")
						.data(data, function(d) {return d.frequency+':'+d.time;});

					var tooltip = d3.select("body")
						.append("div")
						.style("position", "absolute")
						.style("z-index", "10")
						.style("visibility", "hidden")
						.text("a simple tooltip");

					cards.enter().append("rect")
						.attr("x", function(d) { return (d.time - 1) * gridSizeWidth; })
						.attr("y", function(d) { return (d.frequency - 1) * gridSizeHeight; })
						// .attr("rx",1 )
						// .attr("ry",1)
						.attr("class", "time bordered")
						.attr("width", gridSizeWidth)
						.attr("height", gridSizeHeight)
						.style("fill", colors[0])
						.style("stroke", "white")
					    .style("stroke-width", "0.4px") 
						.on("mouseover", function(){return tooltip.style("visibility", "visible");})
						.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
						.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

					cards.transition().duration(500)
						.style("fill", function(d) { return colorScale(d.value); })




				})
			};

			heatmapChart(datasets[1]);