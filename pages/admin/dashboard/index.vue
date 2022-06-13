<template lang="">
<div>
   <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-page-visits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-social-traffic />
      </div>
    </div>
</div>
</template>
<script>
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
export default {
    layout: 'admin',
  // OR
    components: {
    CardPageVisits,
    CardSocialTraffic,
  },
  layout (context) {
    return 'admin'
  },
 head(){
return{
  title:'Dashboad'
}
 }
}
</script>
<style lang="">

</style>
