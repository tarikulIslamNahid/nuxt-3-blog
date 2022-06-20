<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class="w-full  mb-12 xl:mb-0 px-4">
        <card-page-visits :columns="Columns" TableName='Posts List' BtnUrl='/admin/posts/create' BtnText='Add New'>
          <template v-slot:tableRow>
       <tr v-for='(post,index) in $store.state.posts' :key='index' class='text-center'>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             1
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             {{post.title | truncate}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            <span v-for='(cat,indexCat) in post.category' :key='indexCat'
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          {{cat.cat_name}}
        </span>

            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            {{post.description | truncate}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
                 <NuxtLink :to="`/admin/posts/${post.slug}`"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Edit
        </NuxtLink>
                 <button  type="button" :class="post.status ==1 ? 'active:bg-emerald-600 bg-emerald-500' : 'bg-red-500 active:bg-red-600' "
          class="  text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          @click="StatusPost(post.id) ">
         {{post.status ==1 ? 'Active' : 'Deactive'}}
        </button>
                 <button  type="button" id="PostDelBtn"
          class=" bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          @click="destroyPost(post.id) ">
          Delete
        </button>
            </td>

          </tr>
           </template>
        </card-page-visits>
      </div>

    </div>

</div>
</template>
<script>
import CardPageVisits from "~/components/Cards/TableDate.vue";
import {mapActions}  from "vuex";

export default {
    layout: 'admin',
  // OR
    components: {
    CardPageVisits,
  },
  layout (context) {
    return 'admin'
  },
   head(){
return{
  title:'Posts'
}
 },
    filters: {
            truncate: function(value) {
                if (value.length > 20) {
                    value = value.substring(0, 17) + '...';
                }
                return value
            }
        },
    data: () => ({
    url:process.env.API_URL,
    Columns:['SL','Title','Category','Content','actions'],
form:{
  email:'',
  password:'',
}
  }),

  methods:{
...mapActions(["getPosts","deletePost","statuspost"]),
    destroyPost(id) {
      this.deletePost(id);
      this.getPosts();
    },
    StatusPost(id) {
      this.statuspost(id);
      this.getPosts();
    },
 },
     async mounted() {
    await this.getPosts();
   }
}
</script>
<style lang="">

</style>
