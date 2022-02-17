<template>
<div>
   <p>
     users-four-id
     {{ id }}
   </p>
 
  </div>
  
</template>

<script>

export default {
  transition: 'test',
  head() {
    return {
        meta: [
          {
            hid: 'description-tree',
            name: 'description-tree',
            content: 'My custom description---tree'
          }
        ]
      }
  },
   data () {
    return {
      id:0
    }
  },
  fetch({ store, params }) {
      // console.log("tree-fetch")
      
    },
   
//   validate({ params, query }) {
//     console.log(params);
    
//    return false // 如果参数有效
  
// },
  async asyncData ({ app,store, params ,error}) {
      console.log(params);
    return {
      id:params.id == undefined ? 0 : params.id 
    }
  },
   mounted(){
    this.$myInjectedFunction('test')
  }
}
</script>