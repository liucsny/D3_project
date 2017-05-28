
var lineChartCanvas=function(p){


var type=[0,2,4];
var line_1,line_2,line_3;
var gender="女性";
var age="18－24岁";
var t;

p.preload=function() {
	t = p.loadTable("assets/all.csv", "csv", "header");
	img_1 = p.loadImage("assets/b_bg.png");
	img_2 = p.loadImage("assets/r_bg.png");

}

p.setup=function(){
	p.textAlign(p.CENTER);
	sel_gender = p.createSelect();
	sel_gender.parent("p5");
	sel_gender.position(100, -80);
	sel_gender.option('女性');
	sel_gender.option('男性');
	sel_gender.changed(p.mySelectEvent_g);

	sel_age = p.createSelect();
	sel_age.parent("p5");
	sel_age.position(200, -80);
	sel_age.option('18－24岁');
	sel_age.option('25－29岁');
	sel_age.option('30－34岁');
	sel_age.option('35－39岁');
	sel_age.option('40－49岁');
	sel_age.option('大于50岁');
	sel_age.changed(p.mySelectEvent_a);

	button = p.createButton('添加');
	button.parent("p5");
	button.mousePressed(p.addLchart);

	myCanvas = p.createCanvas(1170, 1000);

    p.background(255,255,255);


    // square_1 = new Dsquare(t,r_1,100,100); 
    line_1 = new p.Lchart(t,img_1,img_2,310,100,725,148);
    line_2 = new p.Lchart(t,img_1,img_2,310,430,725,148);
    line_3 = new p.Lchart(t,img_1,img_2,310,770,725,148);

    // p.print(type);
}

p.draw=function(){
	// p.print(t);

	p.strokeWeight(1);
	p.stroke("#DDDDDD");
	p.noFill();
	p.rect(70,8,1030,310);
	p.rect(70,338,1030,310);
	p.rect(70,668,1030,310);
	// square_1.display();
	line_1.display(type[0]);
	line_2.display(type[1]);
	line_3.display(type[2]);
}







p.mySelectEvent_g=function() {
	gender = sel_gender.value();
	age = sel_age.value();
	// print(gender,"   ",age);
	p.addLchart

}




p.mySelectEvent_a=function() {
	gender = sel_gender.value();
	age = sel_age.value();
	// print(gender,"   ",age);
	p.addLchart

}

p.getIndex=function(g,a){
	var numg;
	var numa;

	if (g=='女性') {
		numg=0;
	}else{
		numg=1;
	}

	if (a=='18－24岁') {
		numa=0;
	}else if(a=='25－29岁'){
		numa=1;
	}else if(a=='30－34岁'){
		numa=2;
	}else if(a=='35－39岁'){
		numa=3;
	}else if(a=='40－49岁'){
		numa=4;
	}else if(a=='大于50岁'){
		numa=5;
	}

	p.print(g);
	p.print(numg,"   ",numa);

	var r=(numg*6+numa)*2;
	return r;
}

p.addLchart=function() {
	if(type.includes(p.getIndex(gender,age))){
	}else{
		type[2]=type[1]
		type[1]=type[0]
		type[0]=p.getIndex(gender,age);
		line_1.refresh();
		line_2.refresh();
		line_3.refresh();
		p.print(type);
	}
	// print(getIndex(gender,age));
}







p.Lchart=function(t,img_1,img_2,p_x,p_y,w,h){
	this.bg_1=img_1;
	this.bg_2=img_2;
	this.table=t;
	this.i=0;
	this.scale=0.15;
	this.width=w;
	this.height=h;
	this.x=p_x;
	this.y=p_y;
	this.l=w/183;

	this.display=function(type){
		p.push();
		// rect(100,100,200,200);
		p.fill(255,255,255);
		p.noStroke();
		p.rect(this.x,this.y,this.width,this.height);
	    if (type>11) {
		    p.image(this.bg_1, this.x, this.y-60,758,250);
		}else{
			p.image(this.bg_2, this.x, this.y-60,758,250);
		}
		
		p.noFill();
	    p.strokeWeight(1.5);
	    

	    if (type>11) {
		    p.stroke("#8EA8BA");
		}else{
			p.stroke("#AA9494");
		}

	    p.beginShape();
	    for(var j=0;j<=this.i+1;j++){
	    	// rect(this.x,this.y,this.width,this.height);
			p.curveVertex(this.x+j*this.l,this.y+this.floatMap(this.table.getNum(type, j)));
    	    // print(this.table.getNum(1, j));
	    }
	    p.endShape();

	    if (type>11) {
		    p.stroke("#46A2E0");
		}else{
			p.stroke("#FF5050");
		}

	    p.beginShape();
	    for(var j=0;j<=this.i+1;j++){
	    	// rect(this.x,this.y,this.width,this.height);
			p.curveVertex(this.x+j*this.l,this.y+this.floatMap(this.table.getNum(type+1, j)));
    	    // print(this.table.getNum(1, j));
	    }
	    p.endShape();
	    // rect(this.x,this.y,this.width,this.height);
	    p.pop();

	    this.update();
	}

	this.update=function(){
	    if(this.i<181){
	      this.i++;
	    }else{
	      this.i=181;
	    }
	}


	this.floatMap=function(v) {
	    var r = p.map(v, 0, this.scale, this.height, 0);
	    return r;
	    // if (r>0) {
	    //   return r;
	    // } else {
	    //   return 0;
	    // }
	}	

	this.refresh=function(){
		this.i=0
		p.loop();
		p.noStroke();
		p.fill(255,255,255);
		p.rect(this.x, this.y-100,788,288)
	}
}



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











