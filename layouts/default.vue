<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {

watch: {
    $route (to, from) {
     
     this.$nextTick(function(){
        this.updateRouteActive();
      })
    },

},
 mounted () {
  this.updateRouteActive();
  },
  methods: {
    updateRouteActive() {
      // var els = $("a.nuxt-link-exact-active").siblings("a");
      // for (var i = 0; i < els.length;i++){
      //   $(els[i]).removeClass("nuxt-link-active")
      // }
      var els = document.querySelectorAll('a.nuxt-link-exact-active')
      for (var i = 0; i < els.length;i++) {
        var item = els[i];
         var p = item.parentNode.children;
         for (var j = 0, pl = p.length; j < pl; j++) {
           if (p[j] !== item) {
             p[j].classList.remove("nuxt-link-active")
            //  
           }
         }
      }
      
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
