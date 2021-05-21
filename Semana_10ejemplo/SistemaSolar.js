class SistemaSolar {
    constructor(){
        this.sol = new Estrella(200,200); // Clase Estrella
        this.tierra = new Planeta(this.sol);
        this.luna = new Luna(this.tierra);
    }
     
    show(){
        this.sol.show();
        this.tierra.show();
        this.luna.show();
        

    }
}