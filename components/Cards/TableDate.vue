<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            {{ TableName }}
          </h3>
        </div>
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <NuxtLink
:to="BtnUrl"
          id="categoryBtn"
            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
           {{BtnText}}
          </NuxtLink>

        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th v-for="column in columns" :key="column"
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
            >
            {{column}}
            </th>

          </tr>
        </thead>
        <tbody>
        <slot name="tableRow" ></slot>


        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
      TableName: {
      type: String,
      default: "Table Name",
    },
      BtnUrl: {
      type: String,
      default: "/admin",
    },
      BtnText: {
      type: String,
      default: "button",
    },

    columns: {
      type: [String, Array],
  default: function () {
    return ['SL','Name','actions']
  },
    },
  },

     data: () => ({
      isOpen: false

  }),
    methods: {
    // toggle () {
    //   this.isOpen = !this.isOpen
    // }
  }
}

</script>
