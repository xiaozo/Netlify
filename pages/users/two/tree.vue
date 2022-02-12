<template>
<div>
   <p>users-two</p>
   <nuxt-link to="/users/two/tree/6" >tree首 页</nuxt-link>
   <nuxt-link to="/users/two/tree/7" >tree2首 页</nuxt-link>
    <nuxt-child/>
  </div>
  
</template>

<script>

export default {
   data () {
    return {
      scrollStatus: true,
      entries: []
    }
  },
  async asyncData ({ store, params }) {
    console.log(params);
    
    return {
      
    }
  },
}
</script>