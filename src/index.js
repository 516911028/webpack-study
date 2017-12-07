import Vue from 'vue';

Vue.component('my-com', {
  data(){
    return {
      a: '',
    };
  },
  props: {
    height: Number,
    age: {
      type: Number,
    }
  },
  render(createElement){
    let self = this;
    return createElement('input', {
      domProps: {
        value: self.a
      },
      on: {
        input(e){
          self.a = e.target.value;
          self.$emit('input', e.target.value);
        }
      },
    });
  },
});

window.app = new Vue({
  el: '#index',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    showMessage(){
      let vm = this;
      alert(vm.message);
    },
    tracked(){
      console.log('input');
    },
  },
});
