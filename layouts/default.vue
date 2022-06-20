<template lang="">
<div class="frontWrapper flex flex-col min-h-screen">
  <web-header/>
 <main class="container mx-auto max-w-3xl p-8 grow">
   <Nuxt />
   </main>
</div>
</template>
<script>
export default {

}
</script>

<style lang="postcss">
.frontWrapper {
  @apply antialiased text-blueGray-300 bg-blueGray-900;
  font-family: 'Open Sans', sans-serif;
}
.frontWrapper h1,
.frontWrapper h2,
.frontWrapper h3,
.frontWrapper h4,
.frontWrapper h5,
.frontWrapper h6 {
  @apply font-bold leading-tight mt-3;
}

.frontWrapper h1,
.frontWrapper h2,
.frontWrapper h3,
.frontWrapper h4,
.frontWrapper h5,
.frontWrapper h6,
.frontWrapper h1 > a,
.frontWrapper h2 > a,
.frontWrapper h3 > a,
.frontWrapper h4 > a,
.frontWrapper h5 > a,
.frontWrapper h6 > a,
.frontWrapper a {
  @apply text-white;
}

.frontWrapper h1 {
  @apply text-5xl;
}

.frontWrapper h2 {
  @apply text-3xl;
}

.frontWrapper h3 {
  @apply text-2xl;
}

.frontWrapper h4 {
  @apply text-xl;
}

.frontWrapper a {
  @apply font-bold;
}

.frontWrapper a:hover {
  @apply underline;
}

.frontWrapper p {
  @apply text-lg my-2;
}

.frontWrapper pre {
  @apply my-2 text-sm tracking-wider break-words;
  border-radius: 25px;
}

.frontWrapper hr {
  @apply mt-4 mb-2 border-dotted border-b border-gray-300;
}
@keyframes tag-hover {
  100% {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
}

.tag {
  @apply inline-block px-4 py-2 mr-2 mb-2 text-xs font-bold rounded lowercase text-white;
  border: 1px solid transparent;
}

.tag:hover {
  animation: tag-hover 500ms both;
}

.tag:before {
  content: "#";
}

.tag.cats {
  @apply bg-red-500;
}

.tag.enchiladas {
  @apply text-gray-900 bg-yellow-500;
}

.tag.beer {
  @apply bg-blue-500;
}

.tag.spirituality {
  @apply bg-indigo-500;
}

.tag.orcas {
  @apply bg-purple-500;
}

.tag.stoicism {
  @apply bg-pink-500;
}
</style>
