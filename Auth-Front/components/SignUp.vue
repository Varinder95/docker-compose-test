<template>
  <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
    <h2 class="text-2xl text-center leading-7 font-semibold">
      Fill In Your Details To Sign Up
    </h2>
    <form method="post" name="signupform">
      <div class="form-group mt-2">
        <label class="w-full text-center" for="email">Email</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control w-full border-2 border-slate-500 mt-2 px-4 py-2"
          placeholder="Enter Full Name"
          value=""
        >
      </div>
      <div class="form-group mt-2">
        <label class="w-full text-center" for="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          class="form-control w-full border-2 border-slate-500 mt-2 px-4 py-2"
          placeholder="Enter email"
          value=""
        >
      </div>
      <div class="form-group mt-2">
        <label class="w-full text-center" for="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          class="form-control w-full border-2 border-slate-500 mt-2 px-4 py-2"
          placeholder="*********"
          value=""
        >
      </div>
      <div class="form-group mt-2">
        <label class="w-full text-center" for="password">Retype Password</label>
        <input
          id="password-check"
          type="password"
          name="password-check"
          class="form-control w-full border-2 border-slate-500 mt-2 px-4 py-2"
          placeholder="*********"
          value=""
        >
      </div>
      <div class="flex justify-center w-full mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignUp',
  data () {
    return {}
  }
}
</script>
