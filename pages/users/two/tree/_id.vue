<template>
<div>
   <p>
     users-tree-id
     {{ id }}
   </p>
 
  </div>
  
</template>

<script>

export default {
   data () {
    return {
      id:0
    }
  },
  //  fetch ({ store, params }) {
    
  //   return new Promise(resolve => {
  //    setTimeout(function(){
  //      resolve();
  //    },500)
  //   })
  // },

//   validate({ params, query }) {
//     console.log(params);
    
//    return false // 如果参数有效
  
// },
  async asyncData ({ app,store, params ,error}) {
      console.log(params);
    return {
      id:params.id
    }
  },
   mounted(){
    this.$myInjectedFunction('test')
  }
}
</script>