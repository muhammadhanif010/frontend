<script>
import { baseApi } from '../services';

export default {
    data: () => ({
        success: false,
        input: {
            id: '',
            name: '',
            job: '',
        },
    }),
    methods: {
        create() {
            baseApi.put(`/users/${this.id}`, this.input).then(response => {
                console.log(response);
                this.success = true;
            setInterval(() => {
                this.success = false;
            }, 5000);
            this.input = {
                id: '',
                name: '',
                job: '',
            };
            });
        }
    }
}
</script>

<template>
    <form @submit.prevent="create" class="form-control m-5">
        <label for="name" class="input-group py-2">
            <span>ID:</span>
            <input required type="number" id="name" class="input input-bordered" v-model="input.id" />
        </label>

        <label for="name" class="input-group py-2">
            <span>Name:</span>
            <input required type="text" id="name" class="input input-bordered" v-model="input.name" />
        </label>

        <label for="name" class="input-group py-2">
            <span>Job:</span>
            <input required type="text" id="name" class="input input-bordered" v-model="input.job" />
        </label>

        <button type="submit" class="btn btn-primary bg-violet-800">Update</button>
    </form>

    <div class="alert alert-success shadow-lg" v-if="success">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Data successfully updated!</span>
        </div>
    </div>
</template>
