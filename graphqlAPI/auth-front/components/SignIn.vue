<template>
  <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
    <h2 class="text-2xl text-center leading-7 font-semibold">
      Fill In Your Details To Sign In
    </h2>
    <RegNotification v-if="error" class="my-4 mx-4" :message="error" />
    <form method="post" name="SignInForm" @submit.prevent="userLogin">
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
      <div class="flex justify-center w-full mt-4">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import RegNotification from '~/components/RegNotification'

export default {
  name: 'SignIn',
  components: {
    RegNotification
  },

  data () {
    return {
      email: '',
      password: '',
      token: '',
      error: null
    }
  },

  methods: {
    async userLogin () {
      try {
        await this.$apollo.mutate({
          mutation: gql`
          mutation (
            $loginInput: LoginInput
          ) {
            loginUser (
              loginInput: $loginInput
            ) {
              token
            }
          }
          `,
          variables: {
            loginInput: {
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
