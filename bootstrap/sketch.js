var r_1=[0.020,0.023,0.028,0.033,0.047,0.151];
var r_2=[0.30,0.36,0.46,0.5,0.64,2.41];

// var square_1;
var line_1;

function preload() {
	t = loadTable("assets/all.csv", "csv", "header");
	img_1 = loadImage("assets/b_bg.png");

}

function setup(){
	textAlign(CENTER);
	var sel = createSelect();
		sel.parent("p5");
		sel.position(100, -80);
		sel.option('女性');
		sel.option('男性');
		sel.changed(mySelectEvent);

	var	button = createButton('click me');
    	button.parent("p5");
    	button.mousePressed(addLchart);

	var myCanvas = createCanvas(1170, 600);
	    myCanvas.parent("p5");

    background(255,255,255);


    // square_1 = new Dsquare(t,r_1,100,100); 
    line_1 = new Lchart(t,img_1,310,30,732,148);
}

function draw() {
	strokeWeight(1);
	stroke("#DDDDDD");
	noFill();
	rect(70,8,1030,220);
	rect(70,248,1030,220);
	// square_1.display();
	line_1.display();
}











function mySelectEvent() {

}

function addLchart() {

}


function Lchart(t,img,p_x,p_y,w,h){
	this.bg=img;
	this.table=t;
	this.i=0;
	this.scale=0.08;
	this.width=w;
	this.height=h;
	this.x=p_x;
	this.y=p_y;
	this.l=w/183;

	this.display=function(){
		// rect(100,100,200,200);
		fill(255,255,255);
		noStroke();
		rect(this.x,this.y,this.width,this.height);
		image(this.bg, this.x, this.y,758,178);
		noFill();
	    strokeWeight(1.5);
	    stroke("#4B5C66");

	    beginShape();
	    for(var j=0;j<=this.i;j++){
	    	// rect(this.x,this.y,this.width,this.height);
			curveVertex(this.x+j*this.l,this.y+this.floatMap(this.table.getNum(1, j)));
    	    // print(this.table.getNum(1, j));
	    }
	    endShape();
	    // rect(this.x,this.y,this.width,this.height);

	    this.update();
	}

	this.update=function(){
	    if(this.i<184){
	      this.i++;
	    }else{
	      this.i=0;
	      noLoop();
	    }
	}


	this.floatMap=function(v) {
    var r = map(v, 0, this.scale, this.height, 0);
    if (r>0) {
      return r;
    } else {
      return 0;
    }
  }	
}



function Dsquare(t,r,x,y){
	this.i=0;
	this.table=t;
	this.range=r;
	this.x=x;
	this.y=y;

	this.c=["#1962CC","#6697DD","#B8CFEF","#EDEDED","#E29595","#C83434","#BA0202","#FFFFFF"];


	this.display=function(){
		// background(255,255,255);
		noStroke(); 
	    if(this.i==0){
	      rect(x,y,120,420);
	    }
		fill(this.c[this.selectColor(this.table.getNum(2,this.i))]);
		rect(this.x+((this.i+3)%7+1)*14,this.y+(floor((this.i+3)/7)+1)*14,12,12);
		// text(str(this.table.getNum(1,this.i)),100,50);
		this.update();
	}

	this.update=function(){
	    if(this.i<184){
	      this.i++;
	    }else{
	      this.i=0;
	      noLoop();
	    }
	}

	this.selectColor=function(v){
    if(v==0){
      return 7;
    }else if(v<this.range[0]){
      return 0;
    }else if(v<this.range[1]){
      return 1;
    }else if(v<this.range[2]){
      return 2;
    }else if(v<this.range[3]){
      return 3;
    }else if(v<this.range[4]){
      return 4;
    }else if(v<this.range[5]){
      return 5;
    }else{
      return 6;
    }
  }
}














