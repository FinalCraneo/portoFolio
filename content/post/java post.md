---
title: "trato de usar java"
date: 2018-11-09T16:09:49-06:00
draft: false
image: "uploads/cuteGirl.jpeg"
---

# Ejemplo de como se usa p5 en Hugo

***

Esta es una descripcion de p5 en Hugo y como trato de ocultar el hecho de que me marca mi codigo en el preview

<script src="https://cdn.jsdelivr.net/gh/liabru/matter-js@master/build/matter.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>

<div id="contenedor">
	<script>
		function setup() {
			createCanvas(720, 400);
  background(200);

  // Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  // A rectangle
  rect(40, 120, 120, 40);
  // An ellipse
  ellipse(240, 240, 80, 80);
  // A triangle
  triangle(300, 100, 320, 100, 310, 80);

  // A design for a simple flower
  translate(580, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
			$("#defaultCanvas0").appendTo("#contenedor");

		}

		function draw() {

		}
	</script>
</div>