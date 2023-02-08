<template>
  <div
      class="container d-flex flex-row mb-6 bg-surface-variant">
    <canvas class="relative" ref="canvas">
    </canvas>
    <div class="absolute ">
      <v-card height="300px" width="70%" @mouseenter="mouseIn" @mouseleave="mouseOut"
              class="d-flex flex-column justify-center align-center ms-12 gradient rounded-bs-pill animate__animated animate__fadeIn animate__faster">
        <v-card-title>Cybersecurity Titel</v-card-title>
        <v-card-text>Wir sind cool und so!</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "HeaderComponent",
  data() {
    return {
      mouseDown: false,
    };
  },
  methods: {
    mouseIn() {
      this.mouseDown = true;
      console.log("MOUSE IN: " + this.mouseDown )
    },
    mouseOut() {
      this.mouseDown = false;
      console.log("MOUSE OUT: " + this.mouseDown)
    },
  },
  mounted() {
    const vm = this;
    const canvas = this.$refs.canvas;
    canvas.width = innerWidth;
    canvas.height = 2000;
    const c = canvas.getContext("2d");

    //Cool Green
    //const colors = ["#3fc521", "#bbfd7e", "#FFF6E5", "#283f1f"]
    const colors = ["#85009A", "#DB0DFF", "#FFF6E5", "#7D0077"]


    class Particle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.shadowColor = this.color;
        c.shadowBlur = 15;
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      }

      update() {
        this.draw();
      }

    }

    let particles;

    function init() {
      particles = [];

      for (let i = 0; i < 1000; i++) {
        const canvasWidth = canvas.width + 1000;
        const canvasHeight = canvas.height + 2000;

        const x = Math.random() * canvasWidth - canvasWidth / 2;
        const y = Math.random() * canvasHeight - canvasHeight / 2;
        const radius = 2 * Math.random();

        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x , y, radius, color));

      }
    }

    let radians = 0;
    let alpha = 1;

    function animate() {
      requestAnimationFrame(animate);

      c.fillStyle = `rgba(10,10,10,${alpha}`;
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.save();
      c.translate(canvas.width / 2, canvas.height / 2);
      c.rotate(radians);

      particles.forEach((particle) => {
        particle.update();
      })

      c.restore();

      radians += 0.001;
      if (vm.mouseDown && alpha >= 0.03) {
        alpha -= 0.01;
      } else if (!vm.mouseDown && alpha < 1) {
        alpha += 0.01;
      }
    }

    init();
    animate();

  }
}

</script>

<style scoped>
.animate__pulse {
  animation-duration: 20s;
}

.container {
  position: relative;
}

.relative {
  position: relative;
}

.absolute {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gradient {
  background-color: transparent;
  background-image: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 60%, rgba(255, 255, 255, 0.4) 100%);
}
</style>
