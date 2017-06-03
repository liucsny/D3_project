var financeChartCanvas=function(p){

var i=0;
var img;

p.preload=function(){
	img_1= p.loadImage("assets/1.png");
}

p.setup=function(){
	myCanvas = p.createCanvas(1170, 900);
	b_1 = p.createButton('全球尖货');
	b_1.position(900, 120);
	b_1.mousePressed(p.s);
	b_1.addClass("but");
	b_2 = p.createButton('click me');
	b_2.position(900, 170);
	b_2.mousePressed(p.s);
	b_2.addClass("but");
	b_3 = p.createButton('click me');
	b_3.position(900, 220);
	b_3.mousePressed(p.s);
	b_3.addClass("but");
	b_4 = p.createButton('click me');
	b_4.position(900, 270);
	b_4.mousePressed(p.s);
	b_4.addClass("but");
}
p.s=function(){

}


p.draw=function(){
	p.background(255);
    p.image(img_1, 0, 0,img_1.width,img_1.height);
    // p.image(img, 0, 50,img.width,img.height);
}


}
var p5_financeChart = new p5(financeChartCanvas, 'p5_3');


