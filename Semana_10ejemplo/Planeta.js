class Planeta{
        constructor(refEstrella){
            this.refEstrella=refEstrella;
            this.x = refEstrella.getX()+35;
            this.y = refEstrella.getY();
            this.angulo = 0,0;
            this.refLuna = undefined;
        }
show(){ 
    fill(0,0,255);
    this.x = this.refEstrella.getX() + (80*sin(this.angulo));
    this.y = this.refEstrella.getY() + (80*cos(this.angulo));
    ellipse(this.x,this.y,20,20);
    this.girar();

}
girar(){
this.angulo+=Math.PI/180



}

girar(){
    this.angulo+=Math.PI/180;

}


getX(){
    return this.x;
}
getY(){
    return this.y;
}
getAngulo(){
    return this.angulo;
}



}