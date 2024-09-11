<template>
  <ClientOnly>
    <Icon 
      :name="isDark ? 'carbon:moon' : 'carbon:sun'"
      @click="isDark = !isDark"
      class="hover:cursor-pointer"/>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed({
    get () {
      return colorMode.value === 'dark'
    },
    set () {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  })
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #0c0c0c;
  color: #ebf4f1;
}
</style>