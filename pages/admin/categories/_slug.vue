<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class=" w-3/5 m-auto  mb-12 xl:mb-0 px-4">
       <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Edit Category</h6>

      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="update">

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
                v-model="form.cat_name"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

        </div>

         <div class="text-right mt-4">
   <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Update
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
import { mapActions } from "vuex";
export default {
    layout: 'admin',

  layout (context) {
    return 'admin'
  },
   async asyncData({ params }) {
      const Catslug = params.slug // When calling /abc the slug will be "abc"
      return { Catslug }
    },
   head(){
return{
  title:'Category Create'
}
 },
    data: () => ({
    url:process.env.API_URL,
form:{
  cat_name:'',
  id:'',
}
  }),
    methods: {
    ...mapActions(["updateCategory"]),
    ...mapActions(["SlugCategory"]),
    update() {
       if (!this.form.cat_name) {
         Toast.fire({
              icon: 'error',
              title: 'Please fill the field',
            })
      } else {
        this.updateCategory(this.form);
      }
    },
    },
       async mounted() {
    await this.SlugCategory(this.$route.params.slug);
    this.form.cat_name=this.$store.state.slugCat.cat_name;
    this.form.id=this.$store.state.slugCat.id;
   }
}
</script>
<style lang="">

</style>
