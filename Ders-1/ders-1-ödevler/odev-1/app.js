const app = Vue.createApp({
  data() {
    return {
      name: "",
      age: 24,
      imageUrl: "https://cdn.bhdw.net/im/john-wick-movie-series-lead-actor-and-his-dog-wallpaper-107784_w635.webp",
    };
  },
  methods: {
    randomNumber() {
      return Math.random() * (1 - 2) + 2;
    },
  },
}).mount("#exercise");
