Dline l;
Dline m;



int i=0;

void setup() {
  size(1440, 760);
  background(255, 255, 255);
  smooth(10);
  //println(orig);
  //println(curr);

  l=new Dline("comm_3.csv",color(255,0,0,10));
  m=new Dline("comm_4.csv",color(0,255,0,10));
}

void draw() {
  //print(table);
  if (i>=1977) {
    i=0;
    noLoop();
    fill(255, 0, 255);
    print(i);
  }


  float or_l_0=l.orig.get(i);
  float cu_l_0=l.curr.get(i);
  
  float or_m_0=m.orig.get(i);
  float cu_m_0=m.curr.get(i);

  float or_1=map(or_l_0, 0, 10000, 700, 0);
  float cu_1=map(cu_l_0, 0, 10000, 700, 0);
  
  float or_2=map(or_m_0, 0, 10000, 700, 0);
  float cu_2=map(cu_m_0, 0, 10000, 700, 0);

  PVector a=new PVector(100, or_1);
  PVector b=new PVector(150, cu_1);
  
  PVector c=new PVector(200, or_2);
  PVector d=new PVector(250, cu_2);
  i++;

  l.update(a, b);
  l.display();
  
  m.update(c,d);
  m.display();
  
}


class Dline {
  PVector pos_1;
  PVector pos_2;
  float r=8;
  color c;
  Table table;
  FloatList orig= new FloatList();
  FloatList curr= new FloatList();

  Dline(String name,color c_1) {
    table = loadTable(name, "header");
    //print(table.getFloat(0,"原价"));
    //print(table.getFloat(0,"现价"));
    for (int i=0; i<table.getRowCount(); i++) {
      orig.append(table.getFloat(i, "原价"));
      curr.append(table.getFloat(i, "现价"));
    };
    
    c=c_1;
    //pos_1=p_1;
    //pos_2=p_2;
  }

  void update(PVector p_1, PVector p_2) {
    pos_1=p_1;
    pos_2=p_2;
  }

  void display() {

    //ellipse(pos_1.x, pos_1.y, r, r);
    //ellipse(pos_2.x, pos_2.y, r, r);
    
    //fill(255,255,255,3);
    //noStroke();
    //rect(0,0,1440, 760);
    
    stroke(c);
    fill(c);
    strokeWeight(1);
    line(pos_1.x, pos_1.y, pos_2.x, pos_2.y);

  }
}