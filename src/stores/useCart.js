import { defineStore } from "pinia";

const setLocalStorage = (key, value)=> localStorage.setItem(key, JSON.stringify(value)) 
const getFromLocalStorage = (key)=> JSON.parse(localStorage.getItem(key))

const useCart = defineStore('cart', {

    state: ()=> ({
        products: getFromLocalStorage("products") || []
    }),
    getters: {
        getAllProducts(state){
            return state.products
        }
    },
    actions: {
        addProduct(p){
            this.products.push({id: p.id, title: p.title, price: p.price, description: p.description, url: p.image })
            setLocalStorage("products", this.products)
            alert("your product was added sucessfully")
        },
        removeProduct(p){
            this.products.pop(p)
            setLocalStorage("products", this.products)
            alert("you deleted sucessfully")
        }
    }

})

export default useCart;
