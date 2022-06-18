<template>
  <div>
 <admin-sidebar/>
 <div class="relative md:ml-64 bg-blueGray-100">
 <admin-navbar/>
 <admin-header-state/>
 <div class="px-4 md:px-10 mx-auto w-full h-full -m-24">
 <Nuxt />
 <admin-footer/>
 </div>
 </div>
  </div>
</template>
<script>

export default {
   middleware: ["auth"],

}
</script>
<style l
AdminFooterang="">

</style>
