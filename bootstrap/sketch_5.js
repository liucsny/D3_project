var bubbleCanvas=function(p){
var t;
var bs_510,bs_610,bs_710,bs_810,bs_910,bs_1010,bs_1111;
var g_a=[[],[],[],[],[],[],[]];
var g_b=[[],[],[],[],[],[],[]];
var g_c=[[],[],[],[],[],[],[]];
var g_d=[];

var data=[213,197,166,217,210,267,730];

p.preload=function() {
	// t = p.loadTable("assets/all.csv", "csv", "header");
}

p.setup=function(){
	myCanvas = p.createCanvas(1170, 2600);

	// myCanvas.mouseOver(p.loop());
	// myCanvas.mouseOut(p.noLoop());

	bs_510 = new p.ballSys(0,40,data[0]);
	bs_610 = new p.ballSys(data[0],40,data[1]);
	bs_710 = new p.ballSys(data[0]+data[1],40,data[2]);
	bs_810 = new p.ballSys(data[0]+data[1]+data[2],40,data[3]);
	bs_910 = new p.ballSys(data[0]+data[1]+data[2]+data[3],40,data[4]);
	bs_1010 = new p.ballSys(data[0]+data[1]+data[2]+data[3]+data[4],40,data[5]);
	bs_1111 = new p.ballSys(data[0]+data[1]+data[2]+data[3]+data[4]+data[5],40,data[6]);


	p.iniGroup();

}

p.draw=function(){
	// p.print(a);
	p.background(255);

	bs_510.run();
	bs_610.run();
	bs_710.run();
	bs_810.run();
	bs_910.run();
	bs_1010.run();
	bs_1111.run();

	if (p.mouseY<600){
		// p.ellipse(100,100,100,100);
		bs_510.move(g_a[0],200,78,85);
		bs_610.move(g_a[1],200,78,85);
		bs_710.move(g_a[2],200,78,85);
		bs_810.move(g_a[3],200,78,85);
		bs_910.move(g_a[4],200,78,85);
		bs_1010.move(g_a[5],200,78,85);
		bs_1111.move(g_a[6],200,78,85);
	}

	if ((p.mouseY>600)&(p.mouseY<1300)){
		bs_510.move(g_b[0],185,58,82);
		bs_610.move(g_b[1],200,58,82);
		bs_710.move(g_b[2],215,58,82);
		bs_810.move(g_b[3],230,58,82);
		bs_910.move(g_b[4],245,58,82);
		bs_1010.move(g_b[5],260,48,82);
		bs_1111.move(g_b[6],260,48,82);
	}

	if ((p.mouseY>1300)&(p.mouseY<1900)){
		bs_510.move(g_c[0],155,58,82);
		bs_610.move(g_c[1],170,58,82);
		bs_710.move(g_c[2],185,58,82);
		bs_810.move(g_c[3],200,58,82);
		bs_910.move(g_c[4],215,58,82);
		bs_1010.move(g_c[5],240,48,82);
		bs_1111.move(g_c[6],240,58,92);
	}

	if (p.mouseY>1900){
		bs_1111.move(g_d,240,58,92);
	}
	p.push();
	p.rectMode(p.CENTER);
	p.noStroke();
	p.colorMode(p.HSB,100);
	p.fill(0,0,0,40);
	for (var i = 0; i < 3; i++) {
		p.rect(i*12+320,2110,10,10);
	}
	for (var i = 0; i < 3; i++) {
		p.rect(i*12+320,2122,10,10);
	}
	p.rect(320,2134,10,10);
	p.pop();
}

p.ballSys=function(off,w,n){
	this.b=[];

	this.offset=off;
	this.num=n;
	this.w=w;
	this.color;

	// p.print("hi");

	for (var i = this.offset; i < this.num+this.offset; i++) {
		// b.push(new p.ball((i%40*12+10),(Math.floor(i/40)*12)+10));
		this.b.push(new p.ball(   (i%this.w*12+10)   ,   (Math.floor(i/this.w)*12+10)   ,  p.map(i,0,1600,0.8,1)  ));
		// p.print("hi");
	}




	this.run=function(){

		for (var i = 0; i < this.num; i++) {
		// b[i].update(p.createVector(p.mouseX,p.mouseY));
			this.b[i].display();
		}
	}

	this.move=function(tar,c,a,b){
		for (var i = 0; i < this.num; i++) {
			this.b[i].update(tar[i],c,a,b);
			// b[i].display();
		}
	}
}


p.ball=function(x,y,s){

	this.pos_c = p.createVector(x,y);
	this.pos_o = p.createVector(x,y);
	this.c=0;
	this.a=0;
	this.b=0;
	this.s=s;
	// this.i=-s*100;


	this.display=function(){
		// p.print("hello");
		// if(this.i>10){
			this.pos_o = p5.Vector.lerp(this.pos_c, this.pos_o, 0.8*this.s);
		// }

		// this.i+=1;
		// p.print(this.i);
		p.push();
		p.rectMode(p.CENTER);
		p.colorMode(p.HSB,360,100,100);
		p.fill(this.c,this.a,this.b,70);
		p.noStroke();
		p.rect(this.pos_o.x,this.pos_o.y,10,10);
		p.pop();
	}


	// this.managei=function(){
	// 	if(this.i<0){
	// 		return 0;
	// 	}else{
	// 		return this.i;
	// 	}
	// }

	this.update=function(pos,c,a,b){
		// this.pos_o=this.pos_c.copy();
		this.pos_c=pos;
		this.c=c;
		this.a=a;
		this.b=b;
		// this.i=-s*100;

	}

}


p.iniGroup=function(){
	for (var i = 0; i < data[0]; i++) {
		g_a[0].push(p.createVector(((i)%40*12+100),(Math.floor((i)/40)*12)+100));
	}

	for (var i = 0; i < data[1]; i++) {
		g_a[1].push(p.createVector(((i+data[0])%40*12+100),(Math.floor((i+data[0])/40)*12)+100));
	}
	for (var i = 0; i < data[2]; i++) {
		g_a[2].push(p.createVector(((i+data[0]+data[1])%40*12+100),(Math.floor((i+data[0]+data[1])/40)*12)+100));
	}
	for (var i = 0; i < data[3]; i++) {
		g_a[3].push(p.createVector(((i+data[0]+data[1]+data[2])%40*12+100),(Math.floor((i+data[0]+data[1]+data[2])/40)*12)+100));
	}
	for (var i = 0; i < data[4]; i++) {
		g_a[4].push(p.createVector(((i+data[0]+data[1]+data[2]+data[3])%40*12+100),(Math.floor((i+data[0]+data[1]+data[2]+data[3])/40)*12)+100));
	}
	for (var i = 0; i < data[5]; i++) {
		g_a[5].push(p.createVector(((i+data[0]+data[1]+data[2]+data[3]+data[4])%40*12+100),(Math.floor((i+data[0]+data[1]+data[2]+data[3]+data[4])/40)*12)+100));
	}
	for (var i = 0; i < data[6]; i++) {
		g_a[6].push(p.createVector(((i+data[0]+data[1]+data[2]+data[3]+data[4]+data[5])%40*12+100),(Math.floor((i+data[0]+data[1]+data[2]+data[3]+data[4]+data[5])/40)*12)+100));
	}

	//======================

	for (var i = 0; i < data[0]; i++) {
		g_b[0].push(p.createVector((i%15*12+20),(Math.floor(i/15)*12)+700));
	}

	for (var i = 0; i < data[1]; i++) {
		g_b[1].push(p.createVector((i%15*12+210),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[2]; i++) {
		g_b[2].push(p.createVector((i%15*12+400),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[3]; i++) {
		g_b[3].push(p.createVector((i%15*12+590),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[4]; i++) {
		g_b[4].push(p.createVector((i%15*12+780),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[5]; i++) {
		g_b[5].push(p.createVector((i%15*12+970),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[6]; i++) {
		g_b[6].push(p.createVector(((i+data[5])%15*12+970),(Math.floor((i+data[5])/15)*12)+700));
	}

	//======================

	for (var i = 0; i < data[0]; i++) {
		g_c[0].push(p.createVector((i%15*12+60),(Math.floor(i/15)*12)+1200));
	}

	for (var i = 0; i < data[1]; i++) {
		g_c[1].push(p.createVector(((i+data[0]-3)%15*12+60),(Math.floor((i+data[0]-3)/15)*12)+1220));
	}
	for (var i = 0; i < data[2]; i++) {
		g_c[2].push(p.createVector(((i+data[0]+data[1]-5)%15*12+60),(Math.floor((i+data[0]+data[1]-5)/15)*12)+1240));
	}
	for (var i = 0; i < data[3]; i++) {
		g_c[3].push(p.createVector((i%15*12+230+70),(Math.floor(i/15)*12)+1200));
	}
	for (var i = 0; i < data[4]; i++) {
		g_c[4].push(p.createVector(((i+data[3]-7)%15*12+230+70),(Math.floor((i+data[3]-7)/15)*12)+1220));
	}
	for (var i = 0; i < data[5]; i++) {
		g_c[5].push(p.createVector((i%15*12+780),(Math.floor(i/15)*12)+1200));
	}
	for (var i = 0; i < data[6]; i++) {
		g_c[6].push(p.createVector((i%15*12+970),(Math.floor(i/15)*12)+1200));
	}
	// ===================

	for (var i = 0; i < data[6]; i++) {
		g_d.push(p.createVector((i%28*12+570),(Math.floor(i/28)*12)+2000));
	}
	//======================

}
// p.box=function(pos,s){
// 	this.position=pos;
// 	this.r=s;
// 	this.w=300;
// 	this.h=100;

// 	var bd = new box2d.b2BodyDef();
// 	bd.type = box2d.b2BodyType.b2_dynamicBody;
// 	bd.position = scaleToWorld(this.position.x,this.position.y);

// 	// Define a fixture
// 	var fd = new box2d.b2FixtureDef();
// 	// Fixture holds shape
// 	  fd.shape = new box2d.b2PolygonShape();
// 	  fd.shape.SetAsBox(scaleToWorld(this.w/2), scaleToWorld(this.h/2));


// 	fd.density = 1.0;
// 	fd.friction = 0.2;
// 	fd.restitution = 0.90;

// 	this.body = world.CreateBody(bd);
// 	// Attach the fixture
// 	this.body.CreateFixture(fd);

// 	this.display=function(x,y){


// 		var pos = scaleToPixels(this.body.GetPosition());
// 		// this.position=ta;
// 	    p.rectMode(p.CENTER);
// 	    p.push();
// 	    p.translate(pos.x,pos.y);
// 	    // p.rotate(a);
// 	    p.fill(127);
// 	    // p.stroke(200);
// 	    p.strokeWeight(2);
// 	    p.rect(0, 0, this.w, this.h);
// 	    p.pop();

// 	}



// }

// p.bubbleChart=function(){

// }

// p.bubble=function(lo,s){
// 	this.position=lo;
// 	this.target;
// 	this.r=s;


//    // Define a body
// 	var bd = new box2d.b2BodyDef();
// 	bd.type = box2d.b2BodyType.b2_dynamicBody;
// 	bd.position = scaleToWorld(this.position.x,this.position.y);

// 	// Define a fixture
// 	var fd = new box2d.b2FixtureDef();
// 	// Fixture holds shape
// 	fd.shape = new box2d.b2CircleShape();
// 	fd.shape.radius = scaleToWorld(this.r/2);


// 	fd.density = 1.0;
// 	fd.friction = 0.2;
// 	fd.restitution = 0.90;

// 	this.body = world.CreateBody(bd);
// 	// Attach the fixture
// 	this.body.CreateFixture(fd);

// 	// this.body.SetGravity(0,0);

// 	this.display=function(){
// 		this.applyForce();

// 		var pos = scaleToPixels(this.body.GetPosition());
// 		// this.position=ta;
// 		p.push();
// 	    p.translate(pos.x,pos.y);
// 	    p.fill(100,100,100);
// 		p.ellipse(0,0,this.r,this.r);
// 		p.pop();
// 	}

// 	this.applyForce=function(target_pos){
// 		var box_position=this.body.GetWorldCenter();
// 		// p.print(box_position);


// 		var force = p5.Vector.sub(target_pos,box_position);
// 		force.normalize();

// 		this.body.ApplyForce(force,box_position);

// 	}

// }


// p.bubble_m=function(lo,s){
// 	this.position=lo;
// 	this.target;
// 	this.r=s;


//    // Define a body
// 	var bd = new box2d.b2BodyDef();
// 	bd.type = box2d.b2BodyType.b2_staticBody;
// 	bd.position = scaleToWorld(this.position.x,this.position.y);

// 	// Define a fixture
// 	var fd = new box2d.b2FixtureDef();
// 	// Fixture holds shape
// 	fd.shape = new box2d.b2CircleShape();
// 	fd.shape.m_radius = scaleToWorld(this.r);


// 	fd.density = 1.0;
// 	fd.friction = 0.0;
// 	fd.restitution = 0.0;

// 	this.body = world.CreateBody(bd);
// 	// Attach the fixture
// 	this.body.CreateFixture(fd);

// 	// this.body.SetGravity(0,0);

// 	this.display=function(x,y){
// 		// this.applyForce();

// 		var pos = scaleToPixels(this.body.GetPosition());
// 		// this.position=ta;
// 		p.push();
// 	    p.translate(pos.x,pos.y);
// 	    p.fill(100,100,100);
// 		p.ellipse(0,0,this.r,this.r);
// 		p.pop();
// 	}


// }


}

var p5_bubbleChart = new p5(bubbleCanvas, 'p5_5');


