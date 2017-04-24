
console.log("hola");

d3.select("#raton").style("border", "5px darkgray dashed");

d3.select("body").append("div")
.style("border", "1px black solid")
.html("hola mundo");


d3.json("https://www.ncdc.noaa.gov/teleconnections/enso/indicators/soi/data.json",function(gato) {
    console.log(gato);
    var perro=[];
    for(i=0;i<7;i++){
        perro.push(i);
    }
    d3.select("svg")
.selectAll("rect")
.data(perro)
.enter()
.append("rect")
.attr("width", 57)
.attr("height", function(d) {return d})
.style("fill", "blue")
.style("stroke", "red")
.style("stroke-width", "1px")
.style("opacity", .25)
.attr("x", function(d,i) {return i * 57;})
.attr("y", function(d) {return 380 - d;});
    
    });


//Funciones basicas
parseInt("77");
parseFloat("3.14");



