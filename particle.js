class particle{
 constructor(x,y){
    this.xBase = x;
    this.yBase = y; 
    this.f; 
    this.magnitude;
    this.x = x;
    this.y = y;
    this.d = 15;
 }

 stand(){
    this.x = lerp(this.x, this.xBase, 0.1);
    this.y = lerp(this.y, this.yBase, 0.1);
 }


 swing(f,m){
   this.f = f;
   this.magnitude = m;
    this.x = lerp(this.x, this.x + random(-this.magnitude, this.magnitude),this.f);
    this.y = lerp(this.y, this.y + random(-this.magnitude, this.magnitude),this.f);
    this.x = lerp(this.x, this.xBase, 0.01);
    this.y = lerp(this.y, this.yBase, 0.01);
 }


 show(){
    noStroke();
    fill(230,200,360);
    circle(this.x,this.y,this.d);
 }

}