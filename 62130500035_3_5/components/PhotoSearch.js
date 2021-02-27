app.component('photo-search', {
    props: {
        button: Boolean,
        field: String
    },
    emits:['update:field'],
    template:
        /*html*/
        `
        <div class="ml-2">
            <button
            class="material-icons text-xl font-bold ml-2 p-2 rounded border-2 border-yellow-100 hover:bg-yellow-300 hover:border-yellow-400 focus:border-yellow-400"
                @click="toggleSearch">search</button>
            <input type="text" :value='field' @input=$emit('update:field',$event.target.value)  placeholder="Search product ... "
                class="items-center ml-2 p-2 w-96 bg-white rounded border-b-2 border-yellow-500 text-xl"
                v-show="button">
            <button @click="cancelSearch"
                class="ml-4 px-4 py-2 rounded border-2 border-yellow-100 font-bold text-black text-base bg-yellow-300 hover:border-yellow-400"
                v-show="field">
                clear
            </button>
        </div>
        `,

    methods: {
        toggleSearch() {
            this.$emit('searching')
        },
        cancelSearch() {
            this.$emit('clear-search')
        }
    }
})