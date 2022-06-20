<!-- Please remove this file from your project -->
<template>
<div>
  <div v-for='(post,index) in $store.state.postsforweb' :key='index' class="mb-8 border-dotted border-b pb-8 border-gray-300">
                <h2>
                    <NuxtLink class="block" :to="`/posts/${post.slug}`">{{post.title}}</NuxtLink>
                </h2>

                <p class="excerpt">{{post.description | truncate}}</p>

                <NuxtLink v-for='(cat,indexCat) in post.category' :key='indexCat' class="tag spirituality" :to="`/category/${cat.cat_slug}`">{{cat.cat_name}}</NuxtLink>

                <span class="block md:inline md:float-right md:pt-4 pt-2 created-date" datetime="Sat Oct 08 2016 20:00:00 GMT-0400 (Eastern Daylight Time)">
                    October 9, 2016
                </span>
            </div>
            </div>
</template>

<script>
import {mapActions}  from "vuex";

export default {
  name: 'posts',
      filters: {
            truncate: function(value) {
                if (value.length > 120) {
                    value = value.substring(0, 120) + '...';
                }
                return value
            }
        },
  methods:{
...mapActions(["getPostsForWeb"]),

 },
      async mounted() {
    await this.getPostsForWeb();
   }
}
</script>
