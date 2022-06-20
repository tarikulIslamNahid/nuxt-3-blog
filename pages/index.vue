<template>
  <web-posts/>
</template>

<script>
import WebPosts from '~/components/WebPosts.vue'
export default {
  components: { WebPosts },
  name: 'IndexPage',
     head(){
return{
  title:'Blogger'
}
 }
}
</script>
<style>
</style>
