const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello, Vue3',
            myPhotoPhofile: './images/LogoProfile.jpg',
            myBackground: './images/kobkieaw.jpg',
            fullname: 'Tanawat Srijarattanon',
            firstname: 'Tanawat',
            lastname: 'Srijarattanon',
            myJob: 'Data Analysis',
            myFollower: '200k',
            myArticle: '20',
            myRating: '9.9',
            products: [{
                    id: 101,
                    title: 'Cashew',
                    price: 120,
                    qty: 1,
                    image: "./images/kobkieaw.jpg",
                    done: false

                },
                {
                    id: 102,
                    title: 'Kobkieaw Almond',
                    price: 240,
                    qty: 1,
                    image: "./images/kobkieawAlmond.jpg",
                    done: false
                },
                {
                    id: 103,
                    title: 'Kobkieaw Cashew',
                    price: 120,
                    qty: 1,
                    image: "./images/kobkieawCashew.jpg",
                    done: false

                },
                {
                    id: 104,
                    title: 'Sticker',
                    price: 120,
                    qty: 1,
                    image: "./images/kobkieawReview.jpg",
                    done: false

                },
                {
                    id: 105,
                    title: 'Cashew Big Size',
                    price: 240,
                    qty: 1,
                    image: "./images/kobkieawBigone.jpg",
                    done: false
                },
                {
                    id: 106,
                    title: 'Kobkieaw',
                    price: 240,
                    qty: 1,
                    image: "./images/kobkieawWatch.jpg",
                    done: false
                }
            ],
            followed: false,   
            searchProduct: '',
            openSearch: false,
            zoomProduct: '',
            // openCart: false,
            // cartItems: [],
            // rdyToUseCart: false

        }
    },

    methods: {
        toggleDone(text) {
            const index = this.products.findIndex(product => product.title == text)
            this.products[index].done = !this.products[index].done
        },
        toggleFollow() {
            this.followed = !this.followed
        },
        toggleSearch() {
            this.openSearch = !this.openSearch
        },
        cancelSearch() {
            this.searchProduct = ''
        },
        showPicture(image) {
            this.zoomProduct = image
        },
        closePicture() {
            this.zoomProduct = ''
        },
        // addToCart(index) {
        //     let checkAddedToCart = false
        //     if (this.cartItems[0] == null) {
        //         this.cartItems[this.cartItems.length] = this.products[index]
        //     } else {
        //         for (let i = 0; i < this.cartItems.length; i++) {
        //             if (this.cartItems[i] == this.products[index]) {
        //                 this.cartItems[i].qty += 1
        //                 checkAddedToCart = true
        //             }
        //         }
        //         if (checkAddedToCart == false) {
        //             this.cartItems[this.cartItems.length] = this.products[index]
        //         }
        //     }
        // },
        // toggleCart() {
        //     this.openCart = !this.openCart
        // }
    },
    // item in filteredResources
    computed: {
        countDone() {
            return this.products.filter(p => p.done).length
        },

        countPost() {
            return this.products.filter(p => p.image).length
        },

        filteredProducts() {
            if (this.searchProduct) {
                return this.products.filter((item) => {
                    return item.title.toLowerCase().includes(this.searchProduct.toLowerCase())
                })
            } else {
                return this.products;
            }
        },
        notFound() {
            return this.products.filter(item => {
                return item.title.toLowerCase().includes(this.searchProduct.toLowerCase())
            }).length
        },
        // countCart() {
        //     return this.cartItems.filter(c => c.qty).length
        // }
    }

})