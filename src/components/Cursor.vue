<template>
  <div class="cursor hidden lg:block">
    <div class="cursor-follow">
      <div class="cursor-inner">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="22" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
.cursor {
  box-sizing: border-box;
  width: 40px;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 999999;
  transform-origin: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.cursor > div {
  mix-blend-mode: exclusion;
}

.cursor-follow {
  transform-origin: 50%;
}

.cursor svg {
  display: block;
  fill: none;
  stroke: rgba(223, 223, 223, 0.5);
  stroke-width: 1;
  stroke-miterlimit: miter;
}
</style>

<script>
export default {
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      let iii = new mouseFollow(".cursor", ".cursor-follow", ".cursor-inner");

      const loop = () => {
        let animation = window.requestAnimationFrame(loop);
        iii.follow();
      };
      loop();
    });

    class mouseFollow {
      constructor(classelem, classfollow, classinner) {
        this.elem = document.querySelector(classelem);
        this.elemOuter = document.querySelector(classfollow);
        this.elemInner = document.querySelector(classinner);
        this.init();
        this.event();
      }

      init() {
        let harlfWidth = {
          x: window.innerWidth >> 1,
          y: window.innerHeight >> 1,
        };
        this.mousePos = { x: harlfWidth.x, y: harlfWidth.y };
        this.exmousePos = { x: harlfWidth.x, y: harlfWidth.y };
        this.move = { x: harlfWidth.x, y: harlfWidth.y };
      }

      event() {
        window.addEventListener(
          "mousemove",
          (e) => {
            this.update(e);
          },
          false
        );
      }

      update(e) {
        this.mousePos = { x: e.clientX, y: e.clientY };
      }

      calcEasing(ex, current, easing) {
        return ex + (current - ex) * easing;
      }

      calc() {
        this.move.x = this.calcEasing(this.exmousePos.x, this.mousePos.x, 0.1);
        this.move.y = this.calcEasing(this.exmousePos.y, this.mousePos.y, 0.1);
        this.exmousePos.x = this.move.x;
        this.exmousePos.y = this.move.y;
        let distance = {
          x: Math.abs(this.mousePos.x - this.exmousePos.x),
          y: Math.abs(this.mousePos.y - this.exmousePos.y),
        };

        let distance_ = Math.sqrt(
          Math.pow(distance.x, 2) + Math.pow(distance.y, 2)
        );

        let base_scale =
          Math.round((distance_ / (window.innerWidth / 6)) * 100) / 100 + 1;
        base_scale = Math.min(base_scale, 1.5);

        this.scale = {
          x: base_scale,
          y: 1 - Math.abs(1 - base_scale),
        };

        if (Math.abs(this.mousePos.x - this.move.x) < 0.0005) {
          this.move.x = this.mousePos.x;
          this.move.y = this.mousePos.y;
        }

        //rotation
        let distanceCircleToMouse = {
          x: Math.round((this.mousePos.x - this.move.x) * 100) / 100,
          y: Math.round((this.mousePos.y - this.move.y) * 100) / 100,
        };

        let radian = Math.atan2(
          distanceCircleToMouse.y,
          distanceCircleToMouse.x
        );
        this.angle = ~~(radian * (180 / Math.PI));
      }

      follow() {
        this.calc();
        this.elemOuter.style.transform = `translate3d(${this.move.x}px, ${this.move.y}px, 0)`;
        this.elemInner.style.transform = `rotate(${this.angle}deg) scale(${this.scale.x}, ${this.scale.y})`;
      }
    }
  },
};
</script>
