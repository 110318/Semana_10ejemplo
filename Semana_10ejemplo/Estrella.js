class Estrella{

    constructor(x,y){
    this.x = x;
    this.y = y; 


}
    show(){
        noStroke();
        fill(255,255,0);
        ellipse(this.x,this.y,50,50);
    }
getX(){
    return this.x;
}
getY(){
    return this.y;
}



}