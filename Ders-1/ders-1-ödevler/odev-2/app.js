const app = Vue.createApp({
  data() {
    return {
      value: "",
      valueEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("Warning");
    },
    updateValue(e){
      console.log(e.target.value);
      this.value = e.target.value
    }
  },
});
app.mount("#exercise");
