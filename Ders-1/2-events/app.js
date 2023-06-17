const app = Vue.createApp({
  data() {
    return {
      fullName: "Ad..",
    };
  },
  methods: {
    updateValue(event) {
      this.fullName = event.target.value;
    },
  },
}).mount("#app");
