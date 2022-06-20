<!-- Please remove this file from your project -->
<template>
<div>
  <div v-for='(post,index) in posts' :key='index' class="mb-8 border-dotted border-b pb-8 border-gray-300">
                <h2>
                    <NuxtLink class="block" :to="`/posts/${post.slug}`">{{post.title}}</NuxtLink>
                </h2>

                <p class="excerpt">{{post.description | truncate}}</p>

                <NuxtLink v-for='(cat,indexCat) in post.category' :key='indexCat' class="tag spirituality" :to="`/category/${cat.cat_slug}`">{{cat.cat_name}}</NuxtLink>

            </div>
            </div>
</template>

<script>
import {mapActions}  from "vuex";

export default {
  name: 'categpryposts',
       head(){
return{
  title:this.$route.params.slug
}
 },
     data: () => ({
    url:process.env.API_URL,
posts:[],
check:'hello',
  }),
      filters: {
            truncate: function(value) {
                if (value.length > 120) {
                    value = value.substring(0, 120) + '...';
                }
                return value
            }
        },
  methods:{
...mapActions(["WebCategoriesPost"]),

 },
      async mounted() {
    await this.WebCategoriesPost(this.$route.params.slug);
    this.posts=this.$store.state.WebCategoryPosts[0].blogs;

   }
}
</script>
