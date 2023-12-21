<script>
    import axios from 'axios'
    import  useCart  from "../stores/useCart"

    export default {
        
        data() {
            const { addProduct, products } = useCart()
            return {
                product: [],
                addProduct,
                products
            }
        },
        methods: {
            getData() {
                axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
                    .then(response => {
                        this.product = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<template>
    <div class="my-[20px] mx-[150px] flex flex-col gap-[10px] justify-center items-center">
        <div class="w-[45%]">
            <img class="w-100" :src="product.image" alt="">
        </div>
        <h1 class="text-2xl">{{ product.title }}</h1>
        <h3 class="text-xl">price: {{ product.price }} USD</h3>
        <p class="text-center">{{ product.description }}</p>
        <button class="p-[15px] text-white rounded transition bg-blue-600 hover:bg-blue-500" @click="addProduct(product)">Add to the cart</button>
    </div>
</template>
