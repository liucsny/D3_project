var commodityChartCanvas=function(p){
// var =[];
var t;
var chart;
var sw=false;
// var myVideo;
// var playing = false;

p.preload=function() {
	t = p.loadTable("assets/f_p.csv", "csv", "header");
}

p.setup=function(){
    // myVideo=p.createVideo("assets/linemap1.mp4");
    // myVideo.parent("mov_1");
    // myVideo.position(50, 500);
    // myVideo.loop();


	myCanvas = p.createCanvas(1170, 1100);
    chart = new p.Fsys(t);

	b_1 = p.createButton('按人数');
	b_1.position(900, 120);
	b_1.mousePressed(p.s1);
	b_1.addClass("but");
	b_2 = p.createButton('按金额');
	b_2.position(900, 170);
	b_2.mousePressed(p.s2);
	b_2.addClass("but");

}

p.s1=function(){
	sw=false;
}
p.s2=function(){
	sw=true;
}

p.draw=function(){
	// if (!playing) {
	// 	myVideo.play();
	// 	playing = true;
	// }

    p.background(255,255,255);
	chart.run();
	
	if(sw){
		chart.change(5);
	}else{
		chart.change(0);
	}

}

p.Fsys = function(t){
	this.table=t
	this.squ=[];

	this.h=0;

	for (var j = 52; j >= 0; j--) {
		this.squ.push(new p.square(this.table,j*14+100,500+this.h,4,j,"#F97973"));
	}
	for (var j = 52; j >= 0; j--) {
		this.squ.push(new p.square(this.table,j*14+100,500+this.h,3,j,"#FFA476"));
	}
	for (var j = 52; j >= 0; j--) {
		this.squ.push(new p.square(this.table,j*14+100,500+this.h,2,j,"#FFFC80"));
	}
	for (var j = 52; j >= 0; j--) {
		this.squ.push(new p.square(this.table,j*14+100,500+this.h,1,j,"#8BEF73"));
	}
	for (var j = 52; j >= 0; j--) {
		this.squ.push(new p.square(this.table,j*14+100,500+this.h,0,j,"#29CCAD"));
	}	

	this.run=function(){
		for (var i = 0; i < 265; i++) {
		// b[i].update(p.createVector(p.mouseX,p.mouseY));
			this.squ[i].display();
		}
	}

	this.update=function(){
		for (var i = 0; i < 265; i++) {
			this.squ[i].update();
		}
	}

	this.change=function(type){
		for (var i = 0; i < 265; i++) {
			this.squ[i].change(type);
		}
	}
	
}




p.square=function(t,x,y,i,j,c){
	this.scale=1100;
	this.c=c;
	this.i=i;
	this.i_s=i;
	this.j=j;
	this.table=t;
	this.pos_c = p.createVector(x,y);
	// this.pos_o = p.createVector(x,y);
	this.w=13;
	this.h_o=0;
	this.h_c=0;
	// this.b=0;
	// this.s=s;
	this.display=function(){

		if(this.i_s<5){
			this.scale=1100;
		}else{
			this.scale=130000000;
		}

		this.h_c = p.map(this.table.getNum(this.i_s, this.j),0,this.scale,0,150);

		this.h_o=p.lerp(this.h_c,this.h_o, 0.75*p.random(0.9,1.1));
		p.noStroke();
		p.fill(this.c);
		p.rect(this.pos_c.x,this.pos_c.y-this.h_o,this.w,this.h_o);

		// p.print(this.table.getNum(1, 1));
		// p.rect(this.pos_c.x,this.pos_c.y,this.w,this.h);
	}

	this.change=function(type){
		this.i_s=type+this.i;
	}

	this.update=function(){
		// this.pos_c = p.createVector(x,y);
	}

}



}
var p5_commodityChart = new p5(commodityChartCanvas, 'p5_2');



// p.Comchart=function(t,pos_x,pos_y){
// 	this.x=pos_x;
// 	this.y=pos_y;
// 	this.s=0;
// 	this.table=t;

// 	this.c=["#57D3AA","#5264D1","#F9EE67","#ED6979","#F7CE69","#9A76F4","#58E3ED","#FFFFFF"];

// 	this.display=function(type){

// 		// p.print(this.table.getNum(type,1));
// 		p.push();
// 		p.strokeWeight(4);
// 		// p.noStroke();
// 		p.smooth();
// 		p.stroke("#F77272");
// 		p.stroke(this.c[this.table.getNum(type-1,3)]);
// 		var orig=p.map(this.table.getNum(type-1,1),0,10000,0,1200);
// 		var curr=p.map(this.table.getNum(type-1,2),0,10000,0,1200);
// 		p.line(this.x+orig,this.y,this.x+curr,this.y);
// 		this.circle_appear(this.x+orig,this.y,17,0.007,0.3);
// 		this.circle_appear(this.x+curr,this.y,8,0.007,0.1);
// 		p.pop();

// 		p.push();
// 		p.noStroke();
// 		p.rect(this.x+orig+25,this.y-10+5,100,12);
// 		p.fill("#999999");
// 		p.textSize(12);
// 		p.text(this.table.getString(type-1,0),this.x+orig+25,this.y+5);
// 		p.fill(255,255,255);

// 		p.pop();

// 	}


// 	this.circle_appear=function(x,y,r,spd,delay){
// 		var timer = this.s-delay;
// 		if(timer<0){
// 			cr=0;
// 		}else{
// 			cr=r-1/(timer+1/r);
// 		}
// 		p.ellipse(x,y,cr);
// 		this.s+=spd;
// 		// p.print(cr);
// 	}