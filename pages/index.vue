<template>
<div>
  <web-posts/>
<div class="grid grid-flow-row grid-cols-3 gap-4 mb-2">
    <a class="tag cats mx-auto" href="/11r/tag/cats">cats</a>
    <a class="tag enchiladas mx-auto" href="/11r/tag/enchiladas">enchiladas</a>
    <a class="tag beer mx-auto" href="/11r/tag/beer">beer</a>
    <a class="tag spirituality mx-auto" href="/11r/tag/spirituality">spirituality</a>
    <a class="tag orcas mx-auto" href="/11r/tag/orcas">orcas</a>
    <a class="tag stoicism mx-auto" href="/11r/tag/stoicism">stoicism</a>
</div>
</div>

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
