<template>
  <app-header />
  <div class="container">
    <h3>CLI Uygulaması</h3>
    <p>
      Contents will be extracted and passed on to @vue/compiler-dom,
      pre-compiled into JavaScript render functions, and attached to the
      exported component as its render option
    </p>
  </div>
  <!-- <CounterItem></CounterItem> -->
  <!-- <bu-bir-sayac></bu-bir-sayac> -->
  <CounterItem />
</template>

<script>
import CounterItem from "@/components/CounterItem";

export default {
  components: {
    CounterItem
    // "bu-bir-sayac": CounterItem, //key-value; key=değiştirilebilir. value ise gelen value ismi olmalı.
  },
};
</script>
