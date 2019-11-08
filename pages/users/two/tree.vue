<template>
<div>
   <p>users-two-three</p>
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