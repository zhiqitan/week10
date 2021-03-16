/*
import {Bar} from 'vue-chartjs';
import database from "./firebase.js"

export default {
    extends: Bar,
    data:()=>({
        datalist:[],
        chartdata: {
            labels: [],
            datasets:[
                {
                    label: 'Sales',
                    data:this.dataList,
                    backgroundColor:'#AA6',
                    borderWidth:1.0,
                    borderColor:"#000"
                }
            ]
        },
        options:{
            title:{
                display:true,
                text:'Bar Chart BT3103',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                position:'top'
            },
            layout:{
                padding:{
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 5
                }
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }
                }]
            }            
        }
    }),
    mounted() {
        this.renderChart(this.chartdata,this.options)
    },
    methods: {
        fetchItems:function(){
            database.collection('orders').get().then((querySnapShot)=>{
            let item={}
            querySnapShot.forEach(doc=>{
                item=doc.data()
                item.show=false
                
                this.dataList.push(item) 
                })})    
            }
    },
    created(){
        this.fetchItems()    
    }
}
*/