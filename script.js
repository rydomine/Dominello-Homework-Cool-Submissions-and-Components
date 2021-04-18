Vue.component('codenames',{
  data:function(){
    return{
      flipped: false
    }
  },
  props: ['name','codename'],
  template: '<div v-on:click="flip"><h1 v-bind:class="{clear:flipped}">{{name}}</h1> <h1 v-bind:class="{clear:!flipped}">{{codename}}</h1></div>',
  methods:{
    flip:function(){
        this.flipped=!this.flipped;
      }
    }
})



var app = new Vue({
  el: "#app",
  data: {
    nameError: "",
    emailError: "",
    name: "",
    email: "",
    submit: ""
  },

  
  methods: {
    validate: function () {
      if (this.nameError == null && this.emailError == null) {
        this.submit = "Submitted";
      } else {
        this.submit = "Please fill out name and email information. ";
      }
    }
  },

  
  
  watch: {
    name: function (name) {
      if (this.name.length < 2) {
        this.nameError = "Name must be greater than 2 characters.";
      } else {
        this.nameError = null;
      }
    },

    
    //email crap
    email: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email)) {
        this.emailError = null;
      } else{
        this.emailError="Please input a valid email address. "
      }
    }
  }
})



var app2 = new Vue({
  el: "#app2",
  data: {
    codenames:[
      {name: "Protagonist", codename: "Joker"},
      {name: "Anne", codename: "Panther"},
      {name: "Ryuji", codename: "Skull"}
    ]
  
}
})