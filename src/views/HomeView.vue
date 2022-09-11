<script>
import d$auth from '@/stores/auth.d';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'HomeView',
  data: () => ({
    input: {
      username: '',
      password: '',
    },
    area: [
      {
        id: 1,
        name: 'Satu',
      },
      {
        id: 2,
        name: 'Dua',
      },
    ],
  }),
  computed: {
    ...mapState(d$auth, ['g$user']),
  },
  methods: {
    ...mapActions(d$auth, ['a$login']),
    async login() {
      try {
        await this.a$login(this.input);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <main>
    <form class="m-5" v-if="g$user.id === undefined" @submit.prevent="login">
        <label for="name" class="input-group py-2">
            <span>Username:</span>
            <input required type="text" id="username" class="input input-bordered" v-model="input.username" />
        </label>

        <label for="password" class="input-group py-2">
            <span>Password:</span>
            <input required type="password" id="password" class="input input-bordered" v-model="input.password" />
        </label>

        <button type="submit" class="btn btn-primary bg-violet-800">Log In</button>
    </form>

        <div class="alert alert-success shadow-lg m-5" v-else>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>You have successfully login!</span>
        </div>
    </div>
  </main>
</template>
