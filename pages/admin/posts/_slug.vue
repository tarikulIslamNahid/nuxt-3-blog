<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class=" w-4/5 m-auto mb-12 xl:mb-0 px-4">
       <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Edit Post {{slug}} </h6>

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
                value="Lucky"
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
              <select class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                <option value="">category</option>
                <option value="">table</option>
                <option value="">fasion</option>
                <option value="">Technology</option>
              </select>

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
                rows="4"
              >
                    A beautiful UI Kit and Admin for VueJS & Tailwind CSS. It is Free
                    and Open Source.
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
export default {
    layout: 'admin',

  layout (context) {
    return 'admin'
  },
   async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    },
   head(){
return{
  title:'Category Create'
}
 }
}
</script>
<style lang="">

</style>
