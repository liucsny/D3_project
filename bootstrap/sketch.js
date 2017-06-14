
var lineChartCanvas=function(p){


var line_p;
var line_f;

var t;

var gender='女';
var age='18~25岁';
var img_1;
var img_2;

p.preload=function() {
	t = p.loadTable("assets/all.csv", "csv", "header");
	img_1 = p.loadImage("assets/bg1.png");
	img_2 = p.loadImage("assets/bg2.png");

}

p.setup=function(){
	p.textAlign(p.CENTER);

	myCanvas = p.createCanvas(1170, 1000);

    p.background(255,255,255);

    line_p=new p.Lchart(t,50,28,1030,510);
    line_f=new p.Lchart(t,50,28,1030,510);


    // myDiv = p.createDiv('this is some text');


	sel = p.createSelect();
	sel.class("gender")
	sel.position(100, 10);
	sel.option('女');
	sel.option('男');
	sel.changed(p.mySelectEvent_g);

	sel_a = p.createSelect();
	sel_a.class("gender")
	sel_a.position(260, 10);
	sel_a.option('18~25岁');
	sel_a.option('25～30岁');
	sel_a.option('30～35岁');
	sel_a.option('35～40岁');
	sel_a.option('40～50岁');
	sel_a.option('大于50岁');
	sel_a.changed(p.mySelectEvent_g);

}

p.mySelectEvent_g=function(){
	gender = sel.value();
	age = sel_a.value();
	// p.print(gender,"   ",age);
}

p.draw=function(){
	// p.print(gender,"   ",age);
	p.background(255);
	// p.print(t);



	
	// line.update(1);
	if(gender=='女'){
		p.image(img_1, 150, 80,900,490);
	}else{
		p.image(img_2, 150, 80,900,490);
	}

	line_p.display(1.5);
	line_f.display(1);

	if((gender=='女')&(age=='18~25岁')){
		line_p.update(0,"#FFA4A4");
		line_f.update(1,"#918686");
	}else if((gender=='女')&(age=='25～30岁')){
		line_p.update(2,"#FFA4A4");
		line_f.update(3,"#918686");
	}else if((gender=='女')&(age=='30～35岁')){
		line_p.update(4,"#FFA4A4");
		line_f.update(5,"#918686");
	}else if((gender=='女')&(age=='35～40岁')){
		line_p.update(6,"#FFA4A4");
		line_f.update(7,"#918686");
	}else if((gender=='女')&(age=='40～50岁')){
		line_p.update(8,"#FFA4A4");
		line_f.update(9,"#918686");
	}else if((gender=='女')&(age=='大于50岁')){
		line_p.update(10,"#FFA4A4");
		line_f.update(11,"#918686");
	}else if((gender=='男')&(age=='18~25岁')){
		line_p.update(12,"#47C4C4");
		line_f.update(13,"#868B91");
	}else if((gender=='男')&(age=='25～30岁')){
		line_p.update(14,"#47C4C4");
		line_f.update(15,"#868B91");
	}else if((gender=='男')&(age=='30～35岁')){
		line_p.update(16,"#47C4C4");
		line_f.update(17,"#868B91");
	}else if((gender=='男')&(age=='35～40岁')){
		line_p.update(18,"#47C4C4");
		line_f.update(19,"#868B91");
	}else if((gender=='男')&(age=='40～50岁')){
		line_p.update(20,"#47C4C4");
		line_f.update(21,"#868B91");
	}else{
		line_p.update(22,"#47C4C4");
		line_f.update(23,"#868B91");
	}


	p.noStroke();
	p.fill(255);
	p.rect(800,0,800,80);

	p.strokeWeight(1.5);
	p.stroke("#DDDDDD");
	p.noFill();
	p.rect(70,65,1030,520);


}



p.Lchart=function(t,pos_x,pos_y,width,height){
	this.c="#000000";
	this.range=185;
	this.scale=0.21;
	this.table=t;
	this.x=pos_x;
	this.y=pos_y;
	this.w=width;
	this.h=height;
	this.l=width/200;	
	this.vex_c=[];
	this.vex_o=[];
	this.type=-1;

	for (var j =0 ; j <= this.range; j++) {
		this.vex_o.push(p.createVector(this.x+j*this.l,p.map(0, 0, this.scale, this.h, 0)));
	}
	for (var j =0 ; j <= this.range; j++) {
		this.vex_c.push(this.vex_o[j]);
	}

	this.display=function(weight){
		p.stroke(this.c);
		p.strokeWeight(weight);
		p.noFill();
		// this.pos_o = p5.Vector.lerp(this.pos_c, this.pos_o, 0.75*this.s);
		p.beginShape();
		for (var j =0 ; j <= this.range; j++) {
			this.vex_o[j] = p5.Vector.lerp(this.vex_c[j], this.vex_o[j], 0.78);
			p.curveVertex(this.vex_o[j].x+this.x,this.vex_o[j].y+this.y,2,2);
		}
		p.endShape();
	}

	this.update=function(t,color){

		if(this.type == t){
		}else{
			this.c=color;
			this.type=t;
			for (var j =0 ; j <= this.range; j++) {
				var point_x=this.x+j*this.l;
				var point_y=this.y+this.floatMap(this.table.getNum(t, j));
				this.vex_c[j]=p.createVector(point_x,point_y);

				// p.print(p.map(this.table.getNum(t, j), 0, this.scale, this.h, 0));
			}
		}
	}

	this.floatMap=function(v) {
	    var r = p.map(v, 0, this.scale, this.h, 0);
	    if (r>0) {
	      return r;
	    } else {
	      return -100;
	    }
	}	



	// this.floatMap=function(v) {
	//     var r = p.map(v, 0, this.scale, this.height, 0);
	//     return r;
	//     // if (r>0) {
	//     //   return r;
	//     // } else {
	//     //   return 0;
	//     // }
	// }
}





// p.mySelectEvent_g=function() {
// 	gender = sel_gender.value();
// 	age = sel_age.value();
// 	// print(gender,"   ",age);
// 	p.addLchart
// }




// p.mySelectEvent_a=function() {
// 	gender = sel_gender.value();
// 	age = sel_age.value();
// 	// print(gender,"   ",age);
// 	p.addLchart
// }

// p.getIndex=function(g,a){
// 	var numg;
// 	var numa;

// 	if (g=='女性') {
// 		numg=0;
// 	}else{
// 		numg=1;
// 	}

// 	if (a=='18－24岁') {
// 		numa=0;
// 	}else if(a=='25－29岁'){
// 		numa=1;
// 	}else if(a=='30－34岁'){
// 		numa=2;
// 	}else if(a=='35－39岁'){
// 		numa=3;
// 	}else if(a=='40－49岁'){
// 		numa=4;
// 	}else if(a=='大于50岁'){
// 		numa=5;
// 	}

// 	p.print(g);
// 	p.print(numg,"   ",numa);

// 	var r=(numg*6+numa)*2;
// 	return r;
// }

// p.addLchart=function() {
// 	// if(type.includes(p.getIndex(gender,age))){
// 	// }else{
// 	// 	type[2]=type[1]
// 	// 	type[1]=type[0]
// 	// 	type[0]=p.getIndex(gender,age);
// 	// 	line_1.refresh();
// 	// 	line_2.refresh();
// 	// 	line_3.refresh();
// 	// 	p.print(type);
// 	// }
// 	// print(getIndex(gender,age));
// }










	// this.bg_1=img_1;
	// this.bg_2=img_2;
	// this.table=t;
	// this.i=0;
	// this.scale=0.15;
	// this.width=w;
	// this.height=h;
	// this.x=p_x;
	// this.y=p_y;
	// this.l=w/this.range;

	// this.display=function(type){
	// 	p.push();
	// 	// rect(100,100,200,200);
	// 	p.fill(255,255,255);
	// 	p.noStroke();
	// 	p.rect(this.x,this.y,this.width,this.height);
	//     if (type>11) {
	// 	    p.image(this.bg_1, this.x, this.y-60,758,250);
	// 	}else{
	// 		p.image(this.bg_2, this.x, this.y-60,758,250);
	// 	}
		
	// 	p.noFill();
	//     p.strokeWeight(1.5);
	    

	//     if (type>11) {
	// 	    p.stroke("#8EA8BA");
	// 	}else{
	// 		p.stroke("#AA9494");
	// 	}

	//     p.beginShape();
	//     for(var j=0;j<=this.i+1;j++){
	//     	// rect(this.x,this.y,this.width,this.height);
	// 		p.curveVertex(this.x+j*this.l,this.y+this.floatMap(this.table.getNum(type, j)));
 //    	    // print(this.table.getNum(1, j));
	//     }
	//     p.endShape();

	//     if (type>11) {
	// 	    p.stroke("#46A2E0");
	// 	}else{
	// 		p.stroke("#FF5050");
	// 	}

	//     p.beginShape();
	//     for(var j=0;j<=this.i+1;j++){
	//     	// rect(this.x,this.y,this.width,this.height);
	// 		p.curveVertex(this.x+j*this.l,this.y+this.floatMap(this.table.getNum(type+1, j)));
 //    	    // print(this.table.getNum(1, j));
	//     }
	//     p.endShape();
	//     // rect(this.x,this.y,this.width,this.height);
	//     p.pop();

	//     this.update();
	// }

	// this.update=function(){
	//     if(this.i<181){
	//       this.i++;
	//     }else{
	//       this.i=181;
	//     }
	// }


	// this.floatMap=function(v) {
	//     var r = p.map(v, 0, this.scale, this.height, 0);
	//     return r;
	//     // if (r>0) {
	//     //   return r;
	//     // } else {
	//     //   return 0;
	//     // }
	// }	

	// this.refresh=function(){
	// 	this.i=0
	// 	p.loop();
	// 	p.noStroke();
	// 	p.fill(255,255,255);
	// 	p.rect(this.x, this.y-100,788,288)
	// }
// }



// function Dsquare(t,r,x,y){
// 	this.i=0;
// 	this.table=t;
// 	this.range=r;
// 	this.x=x;
// 	this.y=y;

// 	this.c=["#1962CC","#6697DD","#B8CFEF","#EDEDED","#E29595","#C83434","#BA0202","#FFFFFF"];


// 	this.display=function(){
// 		// background(255,255,255);
// 		noStroke(); 
// 	    if(this.i==0){
// 	      rect(x,y,120,420);
// 	    }
// 		fill(this.c[this.selectColor(this.table.getNum(2,this.i))]);
// 		rect(this.x+((this.i+3)%7+1)*14,this.y+(floor((this.i+3)/7)+1)*14,12,12);
// 		// text(str(this.table.getNum(1,this.i)),100,50);
// 		this.update();
// 	}

// 	this.update=function(){
// 	    if(this.i<184){
// 	      this.i++;
// 	    }else{
// 	      this.i=0;
// 	      noLoop();
// 	    }
// 	}

// 	this.selectColor=function(v){
//     if(v==0){
//       return 7;
//     }else if(v<this.range[0]){
//       return 0;
//     }else if(v<this.range[1]){
//       return 1;
//     }else if(v<this.range[2]){
//       return 2;
//     }else if(v<this.range[3]){
//       return 3;
//     }else if(v<this.range[4]){
//       return 4;
//     }else if(v<this.range[5]){
//       return 5;
//     }else{
//       return 6;
//     }
//   }
// }
}
var p5_lineChart = new p5(lineChartCanvas, 'p5');











