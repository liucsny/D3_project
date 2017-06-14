var financeChartCanvas=function(p){

var i=0;
var img;

p.preload=function(){
	img_1= p.loadImage("assets/1.png");
	img_2= p.loadImage("assets/2.png");
	img_3= p.loadImage("assets/3.png");
	img_4= p.loadImage("assets/1.png");
	img_5= p.loadImage("assets/1.png");
	img_6= p.loadImage("assets/1.png");
	img_7= p.loadImage("assets/1.png");
	img_8= p.loadImage("assets/1.png");
	img_9= p.loadImage("assets/1.png");
	img_10= p.loadImage("assets/1.png");
}

p.setup=function(){
	myCanvas = p.createCanvas(1170, 900);
	b_1 = p.createButton('全球尖货');
	b_1.position(900, 120);
	b_1.mousePressed(p.s1);
	b_1.addClass("but");
	b_2 = p.createButton('箱包');
	b_2.position(900, 170);
	b_2.mousePressed(p.s2);
	b_2.addClass("but");
	b_3 = p.createButton('手机电子');
	b_3.position(900, 220);
	b_3.mousePressed(p.s3);
	b_3.addClass("but");
	b_4 = p.createButton('灯具');
	b_4.position(900, 270);
	b_4.mousePressed(p.s4);
	b_4.addClass("but");
	b_5 = p.createButton('食品');
	b_5.position(900, 320);
	b_5.mousePressed(p.s5);
	b_5.addClass("but");
	b_6 = p.createButton('男装');
	b_6.position(1015, 120);
	b_6.mousePressed(p.s6);
	b_6.addClass("but");
	b_7 = p.createButton('男女靴鞋');
	b_7.position(1015, 170);
	b_7.mousePressed(p.s7);
	b_7.addClass("but");
	b_8 = p.createButton('女装');
	b_8.position(1015, 220);
	b_8.mousePressed(p.s8);
	b_8.addClass("but");
	b_9 = p.createButton('珠宝');
	b_9.position(1015, 270);
	b_9.mousePressed(p.s9);
	b_9.addClass("but");
	b_10 = p.createButton('生鲜');
	b_10.position(1015, 320);
	b_10.mousePressed(p.s10);
	b_10.addClass("but");

	img=img_1;
}
p.s1=function(){
	img=img_1;
}
p.s2=function(){
	img=img_2;
}
p.s3=function(){
	img=img_3;
}
p.s4=function(){
	img=img_4;
}
p.s5=function(){
	img=img_5;
}
p.s6=function(){
	img=img_6;
}
p.s7=function(){
	img=img_7;
}
p.s8=function(){
	img=img_8;
}
p.s9=function(){
	img=img_9;
}
p.s10=function(){
	img=img_10;
}


p.draw=function(){
	p.background(255);
    p.image(img, 0, 10,img.width,img.height);
    // p.image(img, 0, 50,img.width,img.height);
}


}
var p5_financeChart = new p5(financeChartCanvas, 'p5_3');


