const app = new Vue({
    el: "#app",

    data:
    {
        counter: 0,
        images: [
            "./assets/img/img_0.jpg",
            "./assets/img/img_1.jpg",
            "./assets/img/img_2.jpg",
            "./assets/img/img_3.jpg",
            "./assets/img/img_4.jpg",
            "./assets/img/img_5.jpg"
        ]
    },

    methods:
    {
        prev() {
            if (this.counter === 0) {
                return this.counter = this.images.length - 1
            }
            return this.counter -= 1;
        },
        next() {
            if (this.counter === (this.images.length - 1)) {
                return this.counter = 0;
            }
            return this.counter += 1;
        }
    },

    mounted() {
        window.addEventListener("keyup", () => {
            var tasto = event.key;
            if (tasto === "ArrowRight") {
                this.next();
            } else if (tasto === "ArrowLeft") {
                this.prev();
            }
        })
    },

    mounted() {
        setInterval(this.next, 3000)
    }
})