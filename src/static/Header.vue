<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav class="flex justify-center flex-row-reverse bg-slate-800">
            <RouterLink class="hover:bg-slate-700 py-[20px] px-[10px] text-white" to="/cart">Shopping Cart</RouterLink> 
            <RouterLink class="hover:bg-slate-700 py-[20px] px-[10px] text-white" to="/">Products</RouterLink> 
            </nav>
        </div>
    </header>
</template>
