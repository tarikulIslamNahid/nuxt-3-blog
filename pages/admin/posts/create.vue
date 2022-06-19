<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class=" w-4/5 m-auto  mb-12 xl:mb-0 px-4">
       <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Create Post</h6>

      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>

        <div class="flex flex-wrap">

          <div class="w-full mt-4 px-4">
            <div class="relative w-4/5 m-auto mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
               Title
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="form.title"
              />
            </div>
          </div>
          <div class="w-full mt-4 px-4">
            <div class="relative w-4/5 m-auto mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
               Select Category
              </label>


<multiselect v-model="values" @remove="onChange" :allow-empty="false" @select="onSelect" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :search="true" :preserve-search="true" placeholder="Select Category" label="cat_name" track-by="id" :preselect-first="true">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
  </multiselect>

            </div>
          </div>
          <div class="w-full mt-4 px-4">
            <div class="relative w-4/5 m-auto mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
               Content
              </label>
  <textarea
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                rows="4" v-model="form.content" placeholder="Enter Blog Content"
              >

                  </textarea
              >
            </div>
          </div>

        </div>

         <div class="text-right mt-4">
   <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
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
import { mapActions } from "vuex";
import Multiselect from 'vue-multiselect'
export default {
    layout: 'admin',

  layout (context) {
    return 'admin'
  },
  components: { Multiselect },

   head(){
return{
  title:'Post Create'
}
 },
    data: () => ({
    url:process.env.API_URL,
form:{
  title:'',
  content:'',
  cat_id:'',
},
   options: [],
    values: [],
  }),
  methods:{
...mapActions(["getCategory"]),

 onSelect (option) {
            var ids = option.id + ',';
this.form.cat_id+=ids.split(',');
    },
  onChange (removedOption) {
  var value = this.form.cat_id;
var removeID = removedOption.id+',';
this.form.cat_id=value.replace(removeID,'');
    },
  },
     async mounted() {
    await this.getCategory();
    this.options=this.$store.state.categories
   }
}
</script>
<style lang="postcss">

</style>
