<template>
  <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
    <h2 class="text-2xl text-center leading-7 font-semibold">
      Fill In Your Details To Sign Up
    </h2>
    <RegNotification v-if="error" class="my-4 mx-4" :message="error" />
    <form method="post" name="SignUpForm" @submit.prevent="userRegister">
      <div class="form-group mt-2">
        <label class="w-full text-center" for="email">Email</label>
        <input
          id="name"
          v-model="name"
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
          v-model="email"
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
          v-model="password"
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
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import RegNotification from '~/components/RegNotification'
export default {
  name: 'SignUp',
  components: { RegNotification },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      token: '',
      error: null
    }
  },
  methods: {
    async userRegister () {
      try {
        await this.$apollo.mutate({
          mutation: gql`
          mutation (
            $registerInput: RegisterInput
          ) {
            registerUser (
              registerInput: $registerInput
            ) {
              token
            }
          }
          `,
          variables: {
            registerInput: {
              name: this.name,
              email: this.email,
              password: this.password
            }
          }
        })
          .then((response) => {
          // save user token to localstorage
            localStorage.setItem('user-token', response.data.login)
            // redirect user
            this.$router.replace('/dashboard')
          })
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
