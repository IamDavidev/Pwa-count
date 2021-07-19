const app = new Vue({
  el: "#app",
  data() {
    return {
      title: "Vue acount",
      count: 1,
    };
  },
  methods: {
    multi() {
      this.count *= 2;
    },
    divi() {
      this.count /= 2;
    },
    cuad() {
      this.count *= this.count;
    },
  },
});

