<script>
    import  useCart  from "../stores/useCart"
    export default{

       setup(){
            const { products , removeProduct  } = useCart()

            const calculatePrice = () => {
                return products.map(product => product.price)
                               .reduce((a, b) => a + b)
            }

            return {
                products,
                removeProduct,
                calculatePrice
            }
       }
    }

</script>

<template>
    <h1 class="text-3xl text-center mt-[20px]">Your Shopping cart</h1>
    <div class="grid grid-cols-2 place-items-center mx-[20px] gap-[50px] my-[30px]">
        <div class="flex flex-col items-center gap-[10px] p-[15px] border border-slate-300 rounded-lg bg-slate-100" v-for="product in products" :key="product.id">
            <h2>{{ product.title }}</h2>
            <div class="w-[200px]">
                <img :src="product.url" class="w-100" alt="">
            </div>
            <p> price: {{ product.price }} USD</p>
            <button class="py-[10px] px-[20px] bg-blue-500 text-white rounded-lg transition hover:bg-blue-400 hover:cursor-pointer" @click="removeProduct(product)">remove</button>
        </div>
    </div>

    <h2 class="bg-slate-600 text-white text-xl text-center font-bold py-[50px]">Total price: {{ calculatePrice() }} USD </h2>
</template>
