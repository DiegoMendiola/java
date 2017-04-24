

console.log("hola");

d3.select("#lolo").style("border", "5px darkgray dashed");

d3.select("body").append("div")
.style("border", "1px black solid")
.html("Gráfica");

var prub = new Array;
var prub2 = new Array;

var prueb = [];

var lay = [];






d3.json("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=diego03",function(data) {
    var valores=[];
    

    for(var i=0;i<10;i++){

        console.log(data.geonames[i].lng);
        lay [i] = data.geonames[i].lng;
       
        //lay[i].push;

        if(lay[i]<0){

            lay[i]=lay[i]*(-1)

        }

d3.select("svg")
.selectAll("rect")
.data([100,150,200])
.enter()
.append("rect")


.attr("width", 30)
.attr("height", function(d) {return d})
.style("fill", "#00FFE2")
.style("stroke", "#2F00FF")
.style("stroke-width", "3px")
.style("opacity", .40)
.attr("x", function(d,i) {return i * 57;})
.attr("y", function(d) {return 380 - d;});
    }    
});

//prueb.push = parseFloat(lay.push);
//prueb.push = (lay*100);
//console.log(lay);

//Funciones basicas
parseInt("77");
parseFloat("3.14");



