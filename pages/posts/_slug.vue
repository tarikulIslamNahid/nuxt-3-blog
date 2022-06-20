<!-- Please remove this file from your project -->
<template>
<div>
  <div v-for='(post,index) in $store.state.webSinglePost' :key='index' class="mb-8 pb-8">
                <h2 class="mb-3">
                    <NuxtLink class="block" :to="`/posts/${post.slug}`">{{post.title}}</NuxtLink>
                </h2>
   <NuxtLink v-for='(cat,indexCat) in post.category' :key='indexCat' class="tag spirituality" :to="`/category/${cat.cat_slug}`">{{cat.cat_name}}</NuxtLink>
                <p class="excerpt">{{post.description}}</p>

            </div>
            </div>
</template>

<script>
import {mapActions}  from "vuex";

export default {
  name: 'singleposts',
     head(){
return{
  title:this.$route.params.slug
}
 },

  methods:{
...mapActions(["WebPostGetBySlug"]),

 },
      async mounted() {
    await this.WebPostGetBySlug(this.$route.params.slug);
   }
}
</script>
