import React, { Component } from 'react'
import * as d3 from 'd3';
export default class Pie extends Component {
    componentDidMount=()=>{
        var width = 560,
            height = 560,
            margin = 40;
    
        // function wrap(text, width) {
        //     text.each(function() {
        //     var text = d3.select(this),
        //         words = text.text().split(/\s+/).reverse(),
        //         word,
        //         line = [],
        //         lineNumber = 0,
        //         lineHeight = 1.1, // ems
        //         y = text.attr("y"),
        //         dy = parseFloat(text.attr("dy")),
        //         tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        //     while (word = words.pop()) {
        //         line.push(word);
        //         tspan.text(line.join(" "));
        //         if (tspan.node().getComputedTextLength() > width) {
        //         line.pop();
        //         tspan.text(line.join(" "));
        //         line = [word];
        //         tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        //         }
        //     }
        //     });
        // }
// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin;
        var svg= d3.select("#pie")
                .append("svg")
                    .attr("width",width)
                    .attr("height",height)
                .append("g")
                    .attr("transform","translate("+width / 2 + "," +height / 2 +")"); 
        var data=[
                    {a:1,title:"Strategies UI/UX and WorkFlow"},
                    {a:1,title:"Create Database and REST api"},
                    {a:1,title:"Design Resposive FrontEnd"},
                    {a:1,title:"Quality & Testing"},
                    {a:1,title:"CI/CD Deployment"}
                ]
        //setting the color scale
        var color=d3.scaleOrdinal()
                    .domain(data)
                    .range(["#25274D", "#464866", "#AAABB8", "#2E9CCA", "#29648A"])
        //Compute the position of each group on the pie;
        var arcGenerator = d3.arc()
            .innerRadius(120)
            .outerRadius(radius)
        var pie=d3.pie()
                .value((d)=>d.value.a);
        var data_ready=pie(d3.entries(data));
        svg.selectAll("slices")
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d',d3.arc()
                        .innerRadius(100) //Size of the doughnut hole
                        .outerRadius(radius+20))
            .attr('fill',(d)=>{return color(d.data.key)})
            .attr("stroke","black")
            .style("stroke-width","2px")
            .style("opacity",1);

        svg //<==this is for the title of indvidual slice..needs to be wrapped so can go in second line
            .selectAll('slices')
            .data(data_ready)
            .enter()
            .append('text')
            .text(function(d){ return d.data.value.title})
            .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
            .style("text-anchor", "middle")
            .style("font-size",16)
            .style("height",50)
    }
    render() {
        return (
            <div id="pie">
                
            </div>
        )
    }
}
