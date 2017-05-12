Dline l;



int i=0;

void setup() {
  size(1440, 760);
  background(255, 255, 255);
  smooth(10);
  //println(orig);
  //println(curr);

  l=new Dline("comm_1.csv");
}

void draw() {
  //print(table);
  if (i>l.curr.size()) {
    i=0;
    noLoop();
    ellipse(100, 300, 300, 300);
    fill(255, 0, 255);
  }


  float or_0=l.orig.get(i);
  float cu_0=l.curr.get(i);

  float or_1=map(or_0, 0, 2000, 700, 0);
  float cu_1=map(cu_0, 0, 2000, 700, 0);

  PVector a=new PVector(100, or_1);
  PVector b=new PVector(200, cu_1);
  i++;

  l.update(a, b);
  l.display();
}


class Dline {
  PVector pos_1;
  PVector pos_2;
  float r=8;
  color c =color(255, 0, 0, 10);
  Table table;
  FloatList orig= new FloatList();
  FloatList curr= new FloatList();

  Dline(String name) {
    table = loadTable(name, "header");
    //print(table.getFloat(0,"原价"));
    //print(table.getFloat(0,"现价"));
    for (int i=0; i<table.getRowCount(); i++) {
      orig.append(table.getFloat(i, "原价"));
      curr.append(table.getFloat(i, "现价"));
    };
    //pos_1=p_1;
    //pos_2=p_2;
  }

  void update(PVector p_1, PVector p_2) {
    pos_1=p_1;
    pos_2=p_2;
  }

  void display() {
    line(pos_1.x, pos_1.y, pos_2.x, pos_2.y);
    //ellipse(pos_1.x, pos_1.y, r, r);
    //ellipse(pos_2.x, pos_2.y, r, r);
    stroke(c);
    fill(c);
    strokeWeight(1);
  }
}