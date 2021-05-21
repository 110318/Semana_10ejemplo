let sistemaSolar;


function setup() {
  createCanvas(400, 400);
  sistemaSolar = new SistemaSolar();
}

function draw() {
  background(220);
  sistemaSolar.show();
}
