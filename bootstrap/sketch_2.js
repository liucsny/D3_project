var financeChartCanvas=function(p){

var i=0;
var t;
var img;
// var fg_1;

p.preload=function(){
	// t=p.loadTable("assets/comm_sum.csv", "csv", "header");
	t = p.loadTable("assets/f_geo.csv", "csv", "header");
	img	= p.loadImage("assets/chinamap.png");
}

p.setup=function(){
	myCanvas = p.createCanvas(1170, 1000);
    p.background(255,255,255);
    fg_1=new p.F_geo_chart();
    p.image(img, 50, 50,749,521);
}

p.draw=function(){
	// p.print(t);
	while(i<=358){
		fg_1.display(t,i);
		i++;
	}
}


p.F_geo_chart=function(){
	// this.i=index;


	this.display=function(t,i){
		// var table = t;
		var x=p.map(t.getNum(i, 3),0,100,0,990);
		var y=p.map(t.getNum(i, 2),0,100,1390,0);
		p.fill(p.map(t.getNum(i, 7),0,5000,0,255),155,100);
		p.noStroke();
		var r=p.map(t.getNum(i, 7),0,5000,2,25)
		p.ellipse(x-618,y-588,r,r);
	}
}



}
var p5_financeChart = new p5(financeChartCanvas, 'p5_2');


