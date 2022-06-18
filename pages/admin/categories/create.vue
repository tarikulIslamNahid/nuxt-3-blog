<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class=" w-3/5 m-auto  mb-12 xl:mb-0 px-4">
       <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Create Category</h6>

      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="CategoryStore">

        <div class="flex flex-wrap">

          <div class="w-full mt-4 px-4">
            <div class="relative w-6/12 m-auto mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
               Category Name
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.cat_name"
                value="Enter Category Name"
              />
            </div>
          </div>

        </div>

         <div class="text-right mt-4">
   <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Create
        </button>
      </div>
      </form>
    </div>
  </div>
  </div>
  </div>
  </div>
</template>
<script>
import {mapActions}  from "vuex";

export default {
    layout: 'admin',

  layout (context) {
    return 'admin'
  },
   head(){
return{
  title:'Category Create'
}
 },
   data: () => ({
    url:process.env.API_URL,
form:{
  cat_name:''
}
  }),
  methods: {
     ...mapActions(["StoreCategory"]),
    CategoryStore() {
      if (!this.form.cat_name) {

         Toast.fire({
              icon: 'error',
              title: 'Please fill the field',
            })
      } else {

        this.StoreCategory(this.form);
      }
    }
  },
}
</script>
<style lang="">

</style>
