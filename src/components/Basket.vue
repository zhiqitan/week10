<template>
<div>
    <h3>Menu:</h3> 
    <ul>
        <li v-for= "order in selectedItems" v-bind:key= "order[0]">
            {{order[0]}} x {{order[1]}} <br>
        </li>
    </ul>
    <button v-on:click= "findTotal()" >Calculate Total</button>
    <p id="prices" v-show= "show">Subtotal: ${{total}} </p>
    <p id="prices" v-show= "show">Grand Total: ${{netTotal.toFixed(2)}}</p>    

</div>
    
</template>



<script>
export default {
    props: {
        selectedItems: {
            type:Array
        }
    },
    data() {
        return {
            total: 0,
            netTotal: 0,
            show: false,
        }
    },
    methods: {
        findTotal: function() {
            this.show = true;
            this.total= 0; 
            for(let i = 0; i < this.selectedItems.length; i++) {
                this.total += this.selectedItems[i][1] * this.selectedItems[i][2];
            }
            return this.total;
        }
    },
    watch: {
        total: function() {
            this.netTotal = (this.total*1.07);
        }
    }
}
</script>

<style scoped>
    button {
        text-align: center;
        background-color: rgb(207, 185, 212);
        font-size: 15px;
        border-radius: 8px;
        padding: 5px 10px;
    }

</style>    
