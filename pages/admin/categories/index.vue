<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class="w-full  mb-12 xl:mb-0 px-4">
        <card-page-visits TableName='Category List' BtnUrl='/admin/categories/create' BtnText='Add New'>
          <template v-slot:tableRow>
       <tr v-for='(cat,index) in $store.state.categories' :key='index' class='text-center'>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             {{index+1}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            {{cat.cat_name}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
                 <NuxtLink :to="`/admin/categories/${cat.cat_slug}`"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Edit
        </NuxtLink>
                 <button id="catDelBtn"
          class=" bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="delCategory(cat.id)"
        >
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
  title:'Categories'
}
 },
 methods:{
...mapActions(["getCategory"]),
   ...mapActions(["deleteCategory"]),
    delCategory(id) {
      this.deleteCategory(id);
      this.getCategory();
    },
 },
   async mounted() {
    await this.getCategory();
   }
}
</script>
<style lang="">

</style>
