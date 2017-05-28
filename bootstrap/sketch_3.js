var commodityChartCanvas=function(p){
var Comchart=[];
var t;

p.preload=function() {
	t = p.loadTable("assets/comm_sum.csv", "csv", "header");
}

p.setup=function(){
	myCanvas = p.createCanvas(1170, 1100);
    p.background(255,255,255);


    for(var i=0;i<25;i++){
	    p.append(Comchart,new p.Comchart(t,100,90+40*i));
    }
    p.strokeWeight(2);
    p.stroke(220,220,220);
    p.line(100,10,100,1090)

    p.smooth();


}

p.draw=function(){
    for(var i=1;i<25;i++){
		Comchart[i].display(i);
    }

}


p.Comchart=function(t,pos_x,pos_y){
	this.x=pos_x;
	this.y=pos_y;
	this.s=0;
	this.table=t;

	this.c=["#57D3AA","#5264D1","#F9EE67","#ED6979","#F7CE69","#9A76F4","#58E3ED","#FFFFFF"];

	this.display=function(type){

		// p.print(this.table.getNum(type,1));
		p.push();
		p.strokeWeight(4);
		// p.noStroke();
		p.smooth();
		p.stroke("#F77272");
		p.stroke(this.c[this.table.getNum(type-1,3)]);
		var orig=p.map(this.table.getNum(type-1,1),0,10000,0,1200);
		var curr=p.map(this.table.getNum(type-1,2),0,10000,0,1200);
		p.line(this.x+orig,this.y,this.x+curr,this.y);
		this.circle_appear(this.x+orig,this.y,17,0.007,0.3);
		this.circle_appear(this.x+curr,this.y,8,0.007,0.1);
		p.pop();

		p.push();
		p.noStroke();
		p.rect(this.x+orig+25,this.y-10+5,100,12);
		p.fill("#999999");
		p.textSize(12);
		p.text(this.table.getString(type-1,0),this.x+orig+25,this.y+5);
		p.fill(255,255,255);

		p.pop();

	}


	this.circle_appear=function(x,y,r,spd,delay){
		var timer = this.s-delay;
		if(timer<0){
			cr=0;
		}else{
			cr=r-1/(timer+1/r);
		}
		p.ellipse(x,y,cr);
		this.s+=spd;
		// p.print(cr);
	}

// }
}



}
var p5_commodityChart = new p5(commodityChartCanvas, 'p5_3');


