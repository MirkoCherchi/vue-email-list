"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
    };
  },
  methods: {},

  beforeMount() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.emailList.push(response.data.response);
        });
    }
  },
}).mount("#app");
