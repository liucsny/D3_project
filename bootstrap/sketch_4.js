var loanChartCanvas=function(p){
var loanChart=[];
var t;

p.preload=function() {
	t = p.loadTable("assets/news.csv", "csv", "header");
}

p.setup=function(){
	myCanvas = p.createCanvas(1170, 1100);
    p.background(255,255,255);
    for(var i=0;i<26;i++){
	    p.append(loanChart,new p.loanChart(t,0,0,1100,500));
    }
}

p.draw=function(){
	p.background(255,255,255);
    for(var i=0;i<20;i++){
    	loanChart[i].display(i+1);
    }
}


p.loanChart=function(t,x,y,w,h){
	this.table=t
	this.pos_x=x
	this.pos_y=y
	this.width=w
	this.height=h

	this.display=function(type){
		// p.text(this.table.getNum(1,0))
		var r_l=p.sqrt(p.map(this.table.getNum(type,7),0,700000,0,15000));
		var r_s=p.sqrt(p.map(this.table.getNum(type,6),0,700000,0,15000));
		var t=p.map(this.table.getNum(type,4),0,10,0,300);
		var h = p.map(this.table.getNum(type,5)-this.table.getNum(type,4),0,10,0,250);

		var x_s=this.pos_x+t-250;
		var y_s=this.pos_y+this.height;

		var x_l=this.pos_x+h+t-250;
		var y_l=this.pos_y+this.height-h;


		p.noFill();
		p.stroke(255);
		p.bezier(x_l,y_l,x_l,y_l+h/3*2 ,x_s,y_s-h/2,x_s,y_s);

		p.noFill();
		p.stroke(100,100,100);
		p.bezier(x_l,y_l,x_l,y_l+h/3*2 ,x_s,y_s-h/2,x_s,y_s);

		p.fill(0,0,0,50);
		p.noStroke();
		p.ellipse(x_l,y_l,r_l,r_l);
		p.ellipse(x_s,y_s,r_s,r_s);

		p.fill(0,0,0);
		p.ellipse(x_l,y_l,4,4);


	}



	// this.circle_appear=function(x,y,r,spd,delay){
	// 	var timer = this.s-delay;
	// 	if(timer<0){
	// 		cr=0;
	// 	}else{
	// 		cr=r-1/(timer+1/r);
	// 	}
	// 	p.ellipse(x,y,cr);
	// 	this.s+=spd;
	// 	// p.print(cr);
	// }

}



}
var p5_loanChart = new p5(loanChartCanvas, 'p5_4');


