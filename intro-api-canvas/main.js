function draw_cuadrado() {
    const canvas = document.getElementById("canvas_cuadrado");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.fillStyle= "rgb(10,56,93)"; //dark blue
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }

  function draw_path() {
    const canvas = document.getElementById("canvas_path");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 100);
      ctx.lineTo(100, 25);
      ctx.fill();
    }
  }

function draw_house() {
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

// Establecer ando de linea
ctx.lineWidth = 10;

// Muro
ctx.strokeRect(75, 140, 150, 110);

// Puerta
ctx.fillRect(130, 190, 40, 60);

// Techo
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
}

function draw_linea(){
const canvas = document.getElementById("canvas_linea");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(100, 100);
ctx.stroke();
}

function draw_w(){
const ctx = document.getElementById("canvas_w").getContext("2d");
ctx.lineWidth = 10;

["round", "bevel", "miter"].forEach((join, i) => {
  ctx.lineJoin = join;
  ctx.beginPath();
  ctx.moveTo(-5, 5 + i * 40);
  ctx.lineTo(35, 45 + i * 40);
  ctx.lineTo(75, 5 + i * 40);
  ctx.lineTo(115, 45 + i * 40);
  ctx.lineTo(155, 5 + i * 40);
  ctx.stroke();
});
}

function draw_punto(){
const canvas = document.getElementById("canvas_punto");
const ctx = canvas.getContext("2d");

ctx.setLineDash([10, 20]);
console.log(ctx.getLineDash()); // [10, 20]

// Draw a dashed line
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();
}

function draw_ruta(){
const canvas = document.getElementById("canvas_ruta");
const ctx = canvas.getContext("2d");

// First sub-path
ctx.lineWidth = 26;
ctx.strokeStyle = "orange";
ctx.moveTo(20, 20);
ctx.lineTo(160, 20);
ctx.stroke();

// Second sub-path
ctx.lineWidth = 14;
ctx.strokeStyle = "green";
ctx.moveTo(20, 80);
ctx.lineTo(220, 80);
ctx.stroke();

// Third sub-path
ctx.lineWidth = 4;
ctx.strokeStyle = "pink";
ctx.moveTo(20, 140);
ctx.lineTo(280, 140);
ctx.stroke();
}
function draw_imagen(){
var canvas = document.getElementById("canvas_imagen");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");

ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
}

function draw_edicion(){
const canvas = document.getElementById("canvas_edicion");
const ctx = canvas.getContext("2d");
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  // Draw unfiltered image
  ctx.drawImage(image, 0, 0, image.width * 0.6, image.height * 0.6);

  // Draw image with filter
  ctx.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)";
  ctx.drawImage(image, 400, 0, -image.width * 0.6, image.height * 0.6);
});
}

const canvas = document.getElementById("canvas_suavizado");

const ctx = canvas.getContext("2d");
ctx.font = "16px sans-serif";
ctx.textAlign = "center";

const img = new Image();
img.src =
  "https://interactive-examples.mdn.mozilla.net/media/examples/star.png";
img.onload = () => {
  const w = img.width,
    h = img.height;

  ctx.fillText("Source", w * 0.5, 20);
  ctx.drawImage(img, 0, 24, w, h);

  ctx.fillText("Smoothing = TRUE", w * 2.5, 20);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(img, w, 24, w * 3, h * 3);

  ctx.fillText("Smoothing = FALSE", w * 5.5, 20);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, w * 4, 24, w * 3, h * 3);
};


  draw_cuadrado();
  draw_path();
  draw_house();
  draw_linea();
  draw_w();
  draw_punto();
  draw_ruta();
  draw_imagen();
  draw_edicion();