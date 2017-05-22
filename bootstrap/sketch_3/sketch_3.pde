Dline l_1;
Dline l_2;
Dline l_3;
//Dline l_4;
//Dline l_5;
//Dline l_6;
//Dline l_7;
//Dline l_8;
//Dline l_9;
//Dline l_10;
//Dline l_11;
//Dline l_12;
//Dline l_13;
//Dline l_14;
//Dline l_15;
//Dline l_16;
//Dline l_17;
//Dline l_18;
//Dline l_19;
//Dline l_20;
//Dline l_21;
//Dline l_22;
//Dline l_23;
//Dline l_24;
//Dline l_25;


void setup() {
  size(10000, 750);
  background(255, 255, 255);
  smooth(10);

  l_1=new Dline("comm_1.csv", color(200,0,0,100));
  l_2=new Dline("comm_2.csv", color(0,200,0,100));
  l_3=new Dline("comm_3.csv", color(0,0,200,100));
  //l_4=new Dline("comm_4.csv", 4);
  //l_5=new Dline("comm_5.csv", 5);
  //l_6=new Dline("comm_6.csv", 6);
  //l_7=new Dline("comm_7.csv", 7);
  //l_8=new Dline("comm_8.csv", 8);
  //l_9=new Dline("comm_9.csv", 9);
  //l_10=new Dline("comm_10.csv", 10);
  //l_11=new Dline("comm_11.csv", 11);
  //l_12=new Dline("comm_12.csv", 12);
  //l_13=new Dline("comm_13.csv", 13);
  //l_14=new Dline("comm_14.csv", 14);
  //l_15=new Dline("comm_15.csv", 15);
  //l_16=new Dline("comm_16.csv", 16);
  //l_17=new Dline("comm_17.csv", 17);
  //l_18=new Dline("comm_18.csv", 18);
  //l_19=new Dline("comm_19.csv", 19);
  //l_20=new Dline("comm_20.csv", 20);
  //l_21=new Dline("comm_21.csv", 21);
  //l_22=new Dline("comm_22.csv", 22);
  //l_23=new Dline("comm_23.csv", 23);
  //l_24=new Dline("comm_24.csv", 24);
  //l_25=new Dline("comm_25.csv", 25);
}

void draw() {
  l_1.update();
  l_2.update();
  l_3.update();
  //l_4.update();
  //l_5.update();
  //l_6.update();
  //l_7.update();
  //l_8.update();
  //l_9.update();
  //l_10.update();
  //l_11.update();
  //l_12.update();
  //l_13.update();
  //l_14.update();
  //l_15.update();
  //l_16.update();
  //l_17.update();
  //l_18.update();
  //l_19.update();
  //l_20.update();
  //l_21.update();
  //l_22.update();
  //l_23.update();
  //l_24.update();
  //l_25.update();
}

class Dline {
  Table table;
  FloatList orig= new FloatList();
  FloatList curr= new FloatList();
  int i;
  color c;

  Dline(String name, color x) {
    table = loadTable(name, "header");
    for (int i=0; i<table.getRowCount(); i++) {
      orig.append(table.getFloat(i, "原价"));
      curr.append(table.getFloat(i, "现价"));
    };

    c=x;
  };

  void display() {
    stroke(c);
    strokeWeight(1);
    float x_1=map(orig.get(i), 0, 10000, 0, 300);
    float x_2=map(curr.get(i), 0, 10000, 0, 300);
    
    line(i,x_1,i,x_2);

    //stroke(255, 0, 0, 5);
    //strokeWeight(1);

    //line(x_2, order+15, x_2, order+25);
  }

  void update() {
    if (i<table.getRowCount()) {
      display();
    }else if(i==table.getRowCount()){
      //println(order/30+1);
    }
    i++;

  }
}