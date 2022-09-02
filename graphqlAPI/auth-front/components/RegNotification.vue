<template>
  <div class="flex w-full bg-red-500 justify-center px-4 py-4">
    <p class="text-center text-white">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'RegNotification',
  props: ['message']
}
</script>
