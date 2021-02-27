app.component('photo-list', {
    props: {
        products: Object
    },
    template:
        /*html*/
        `<div class="rounded-xl ">
            <img class="object-cover object-center w-full h-64  rounded-t-xl border-4  shadow-xl hover:border-yellow-500 cursor-pointer"
                v-bind:src="products.image" alt="kobkieaw" key="products.id"
                @click="showPicture(products.image)">
            <span
                class="flex items-center justify-between my-2 text-base font-semibold leading-none text-black ">{{ products.title }}
                <div class="mr-2"><span
                        class="text-2xl text-black font-semibold">฿{{ products.price }}</span>
                    <span class="ml-1 text-xs text-gray-600">/pc</span>
                </div>
            </span>

            <div class="flex flex-row">
                
                <button v-on:click=""
                    class="material-icons w-3/12 px-4 py-1 mr-2 font-medium text-black text-xl bg-yellow-300 border-black border-b-2 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:text-black hover:border-black hover:bg-red-400 hover:scale-105 focus:shadow-outline focus:outline-none">
                    remove
                </button>
                <!--addToCart(index)-->
                <button v-on:click=""
                    class="w-full px-4 py-1 font-medium text-black text-xl bg-yellow-300 border-black border-b-2 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:text-black hover:border-black hover:bg-yellow-500 hover:scale-105 focus:shadow-outline focus:outline-none">
                    Add to cart
                </button>
                <button v-show="!products.done" v-on:click="toggleDone(products.title)"
                    class="material-icons ml-2 w-3/12 px-4 py-1 font-medium text-white text-xl bg-pink-100 border-b-2 border-red-300 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:text-white hover:border-black hover:bg-red-400 hover:scale-105 focus:shadow-outline focus:outline-none">
                    favorite
                </button>
                <button v-show="products.done" v-on:click="toggleDone(products.title)"
                    class="material-icons ml-2 w-3/12 px-4 py-1 font-medium text-pink-700 text-xl bg-pink-100 border-b-2 transition duration-500 ease-in-out transform bg-white border-red-300 rounded-lg shadow-xl hover:text-white hover:border-black  hover:scale-105 focus:shadow-outline focus:outline-none">
                    favorite
                </button>
            </div>
        </div>`,
    methods: {
        toggleDone(product) {
            this.$emit('toggle-done', product)
        },
        showPicture(image) {
            this.$emit('click-photo', image)
        },

    }
})