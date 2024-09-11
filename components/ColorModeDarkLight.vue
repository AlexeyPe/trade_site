<template>
    <Icon name="carbon:moon" @click="isDark = false" class="hover:cursor-pointer hidden dark:block"/>
    <Icon name="carbon:sun" @click="isDark = true" class="hover:cursor-pointer block dark:hidden"/>
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