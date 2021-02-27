app.component('photo-view', {
    props: ["picture"],
    template:
        /*html*/
        `
        <div class=" flex justify-center" v-show="picture">
        <div class="bg-black px-32 py-16 ">
            <div class="flex flex-row-reverse -mt-10 -mr-16">
                <button class="material-icons text-5xl text-white rounded-full bg-blue-600"
                    @click="closePicture">close</button>
            </div>
            <img class="object-scale-down object-center flex justify-center " v-bind:src="picture">
        </div>
    </div>`,
    methods: {
        closePicture() {
            this.$emit('close-photo')
        },

    }
})