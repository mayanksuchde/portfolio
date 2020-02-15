import React, { Component } from 'react';
import * as d3 from 'd3'


export default class About extends Component {
  componentDidMount(){
    var width = 450,
    height = 450,
    margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin;
    var svg= d3.select("#pie")
              .append("svg")
                .attr("width",width)
                .attr("height",height)
              .append("g")
                .attr("transform","translate("+width / 2 + "," +height / 2 +")"); 
    var data={a:1,b:1,c:1,d:1,e:1}
    //setting the color scale
    var color=d3.scaleOrdinal()
                .domain(data)
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
    //Compute the position of each group on the pie;
    var pie=d3.pie()
              .value((d)=>d.value);
    var data_ready=pie(d3.entries(data));
    svg.selectAll("notSure")
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d',d3.arc()
                    .innerRadius(100) //Size of the doughnut hole
                    .outerRadius(radius))
        .attr('fill',(d)=>{return color(d.data.key)})
        .attr("stroke","black")
        .style("stroke-width","2px")
        .style("opacity",0.7)           
}

  render() {
    return (
      <div className='about'>
        <h2>About</h2>
        <div className='about__content'>
            <p>I am a Full Stack Developer based in Toronto who is passionate about creative problem solving and creating beautiful and interactive web applications.My experience in solving customer queries and my drive to keep learning new technologies empowers me to create digital products that are user-friendly and responsive across all devices.</p>
            <div className='about__content__imgdiv'>
                <div id="pie"></div>
                <img src='./profile_pic.jpg' alt="Profile"/>
            </div>
        </div> 
      </div>
    )
  }
}
