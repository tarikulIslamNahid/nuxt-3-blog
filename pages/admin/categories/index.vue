<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class="w-full  mb-12 xl:mb-0 px-4">
        <card-page-visits />
        <h2>Category</h2>
      </div>

    </div>
</div>
</template>
<script>
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
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
 }
}
</script>
<style lang="">

</style>
