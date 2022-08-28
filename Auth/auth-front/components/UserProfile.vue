<template>
  <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
    <h2 class="text-2xl text-center leading-7 font-semibold">
      User Profile
    </h2>
    <div class="mx-8 my-4 border-y-2 border-green-600">
      <div class="px-4 py-4">
        <p>
          <strong>Name:</strong>
          {{ loggedInUser.Name }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.Email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>
