<template>
<div>
   <p>users-two</p>
   <nuxt-link to="/" >首 页</nuxt-link>
   <nuxt-link to="/welcom" >首 页</nuxt-link>
   <nuxt-child/>
  </div>
  
</template>

<script>
export default {
   head() {
    return {
        meta: [
          {
            hid: 'description-two',
            name: 'description-two',
            content: '111My custom description-two'
          }
        ]
      }
  },
    // fetch({ store, params }) {
    //   console.log("two-fetch")
      
    // }
}
</script>