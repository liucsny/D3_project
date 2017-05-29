var loanChartCanvas=function(p){

var timer=0;
var loanChart=[];
var t;

p.preload=function() {
	t = p.loadTable("assets/news.csv", "csv", "header");
}

p.setup=function(){
	myCanvas = p.createCanvas(1170, 1100);
    p.background(255,255,255);
    for(var i=0;i<26;i++){
	    p.append(loanChart,new p.loanChart(t,0,0,1100,500, p.map(i,0,26,0.9,1),p.random(20)));
    }
}

p.draw=function(){
	p.background(255,255,255);

	if(p.mouseY>200){
		for(var i=0;i<20;i++){
	    	loanChart[i].update(i+1,7,6,4,5,4,1);
	    }
	}else{
		for(var i=0;i<20;i++){
	    	loanChart[i].update(i+1,8,8,4,4,0);
	    }
	}


	if(((p.pmouseY-200)*(p.mouseY-200))<0){
		timer=0;
	}

    for(var i=0;i<20;i++){
    	loanChart[i].display(timer);
    }

    timer++;
    p.print(timer);
}


p.loanChart=function(t,x,y,w,h,s,clock){

	this.table=t
	this.pos_x=x
	this.pos_y=y
	this.width=w
	this.height=h

	this.r_l_o=0;
	this.r_s_o=0;
	this.x_s_o=0;
	this.y_s_o=0;
	this.x_l_o=0;
	this.y_l_o=0;

	this.r_l_c=0;
	this.r_s_c=0;
	this.x_s_c=0;
	this.y_s_c=0;
	this.x_l_c=0;
	this.y_l_c=0;
	this.t;
	this.h_o=0;
	this.h_c=0;

	this.s=s;

	this.clock=clock;

	this.core_o=0;
	this.core_c=0;
	// this.timer=timer;

	this.display=function(t){
		// p.print(timer);
		if(t>this.clock){
		// 	p.print("      ",this.timer);

			this.r_l_o = p.lerp(this.r_l_c, this.r_l_o, 0.8*this.s);
			this.r_s_o = p.lerp(this.r_s_c, this.r_s_o, 0.75*this.s);
			this.x_l_o = p.lerp(this.x_l_c, this.x_l_o, 0.75*this.s);
			this.y_l_o = p.lerp(this.y_l_c, this.y_l_o, 0.75*this.s);
			this.x_s_o = p.lerp(this.x_s_c, this.x_s_o, 0.75*this.s);
			this.y_s_o = p.lerp(this.y_s_c, this.y_s_o, 0.75*this.s);
			this.h_o = p.lerp(this.h_c, this.h_o, 0.75*this.s);
			this.core_o = p.lerp(this.core_c, this.core_o, 0.75*this.s);
		}


			p.noFill();
			p.stroke(255);
			p.bezier(this.x_l_o,this.y_l_o,this.x_l_o,this.y_l_o+this.h_o/3*2 ,this.x_s_o,this.y_s_o-this.h_o/2,this.x_s_o,this.y_s_o);

			p.noFill();
			p.stroke(100,100,100);
			p.bezier(this.x_l_o,this.y_l_o,this.x_l_o,this.y_l_o+this.h_o/3*2 ,this.x_s_o,this.y_s_o-this.h_o/2,this.x_s_o,this.y_s_o);

			p.fill(0,0,0,50);
			p.noStroke();
			p.ellipse(this.x_l_o,this.y_l_o,this.r_l_o,this.r_l_o);
			p.ellipse(this.x_s_o,this.y_s_o,this.r_s_o,this.r_s_o);

			p.fill(0,0,0);
			p.ellipse(this.x_l_o,this.y_l_o,this.core_o,this.core_o);

		// }
	}

	this.update=function(type,debt,ori,t_loan,t_repay,core){
		// this.timer=t;
		this.core_c=core;
		this.r_l_c=p.sqrt(p.map(this.table.getNum(type,debt),0,700000,0,15000));
		this.r_s_c=p.sqrt(p.map(this.table.getNum(type,ori),0,700000,0,15000));
		this.t=p.map(this.table.getNum(type,t_loan),0,10,0,300);
		this.h_c = p.map(this.table.getNum(type,t_repay)-this.table.getNum(type,t_loan),0,10,0,250);

		this.x_s_c=this.pos_x+this.t-250;
		this.y_s_c=this.pos_y+this.height;

		this.x_l_c=this.pos_x+this.h_c+this.t-250;
		this.y_l_c=this.pos_y+this.height-this.h_c;


		// p.print(this.x_s_o);

	}
}



}
var p5_loanChart = new p5(loanChartCanvas, 'p5_4');


