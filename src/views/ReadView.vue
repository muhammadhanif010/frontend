<template>
    <ul>
        <li v-for="item in items" :key="item.id" class="card card-side w-96 bg-base-100 shadow-xl items-center m-4 p-2">
            <div class="avatar p-4">
                <div class="w-24 rounded">
                    <img :src="item.avatar" alt="">
                </div>
            </div>
            <div class="card-content">
                <p class="card-title">{{`${item.first_name} ${item.last_name}`}}</p>
                <p>{{`ID: ${item.id}`}}</p>
                <p>{{`Email: ${item.email}`}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
import { baseApi } from '../services';
export default {
    data: () => ({
        items: [],
    }),
    mounted() {
        baseApi.get('/users').then(response => {
            this.items = response.data;
        });
    }
}
</script>