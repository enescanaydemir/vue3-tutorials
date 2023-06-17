const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: { //computedlar method gibi tanımlanır ama değişken gibi davranırlar. Return etmemiz gerekiyor çünkü değişken gibi kullanbilmek için.
    getCounterResult() {
      console.log("Counter 1 Çalıştı");
      return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
    getCounter2Result() {
      console.log("Counter 2 Çalıştı");
      return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
  },
  watch: {
    counter(newValue, oldValue){
        console.log(oldValue, "=>", newValue);
    }
  }
  //   methods: {
  //     inc() {
  //       this.counter++;
  //     },
  //     dec() {
  //       this.counter--;
  //     },
  //   },
}).mount("#app");
