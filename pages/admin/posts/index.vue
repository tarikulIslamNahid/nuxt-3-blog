<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class="w-full  mb-12 xl:mb-0 px-4">
        <card-page-visits :columns="Columns" TableName='Posts List' BtnUrl='/admin/posts/create' BtnText='Add New'>
          <template v-slot:tableRow>
       <tr class='text-center'>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             1
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             this is title
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            <span
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          Technology
        </span>
            <span
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          Modern
        </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             this is content...
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
                 <NuxtLink to="/admin/posts/demo-cat"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Edit
        </NuxtLink>
                 <button
          class=" bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
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
    data: () => ({
    url:process.env.API_URL,
    Columns:['SL','Title','Category','Content','actions'],
form:{
  email:'',
  password:'',
}
  }),
}
</script>
<style lang="">

</style>
