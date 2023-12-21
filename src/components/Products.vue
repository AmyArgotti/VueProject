<script>
    import axios from "axios"
    import { RouterLink } from "vue-router"

    export default {
        data() {
            return {
                products: []
            }
        },
        methods: {
            getData() {
                axios.get('https://fakestoreapi.com/products')
                    .then(response => {
                        this.products = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getLink(product){
                return `/products/${product.id}`
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 place-items-center mx-[20px] gap-[50px] my-[30px]">
        <div class="flex flex-col items-center gap-[10px] p-[15px] border border-slate-300 rounded-lg bg-slate-200" v-for="product in products" :key="product.id">
            <h2>{{ product.title }}</h2>
            <div class="w-100">
                <img :src="product.image" alt="">
            </div>
            <p> price: {{ product.price }} USD</p>
            <RouterLink class="py-[5px] px-[20px] bg-slate-800 hover:bg-slate-700 text-white text-sm rounded transition" :to="getLink(product)">View</RouterLink>
        </div>
    </div>
</template>
