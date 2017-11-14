import Vue from 'vue';

Vue.component('my-com', {
  props: {
    height: Number,
    age: {
      type: Number,
      default: 10,
      required: true,
      validator(val) {
        return val > 10;
      },
    }
  },
  template: `<div>height: {{height}}, age: {{age}}</div>`,
});

new Vue({
  el: '#index',
  template: `<my-com></my-com>`,
});
