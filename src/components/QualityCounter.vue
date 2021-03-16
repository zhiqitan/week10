<template>
    <div>
        <button v-on:click="minus()">-</button>  
        <span>
        {{counter}}      
        </span>
        <button v-on:click="plus()">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0 
        }
    },
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        minus: function() {
            if(this.counter>0) {
                this.counter = this.counter - 1;
                this.$emit('counter', this.item, this.counter)
            }
        },

        plus: function() {
            if (this.counter<10) {
                this.counter = this.counter + 1;
                this.$emit('counter', this.item, this.counter)
            } else {
                alert("You cannot buy more than 10 items.");
                this.$emit('counter', this.item, this.counter)
            }
        }
    }
}
</script>

<style scoped>
    button {
        background-color: rgb(136, 145, 223);
        text-align: center;
        font-size: 20px;
        border-radius: 6px;
        width: 35px;
    }

</style>