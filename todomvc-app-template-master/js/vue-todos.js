(function(window){
    
    new Vue({
        el:'#app',
        data:{
            name:'',
            flag:false,
            list:[
                {id:1,name:"我想干嘛就干嘛",is:true}
                // {name:"我想干嘛就干嘛"}
            ]
           
        },
        methods: {
            add(){
                this.list.push({name:this.name})
                this.name=''
            },
            del(i){
                this.list.splice(i,1)
            }
            
        },
        // components:{
        //     myli:{
        //         props:['myprevent'],
        //         template:'#myli',
        //     },
        //    data(){
        //     return {
        //         flag:false
        //     }
        //    },
        //     methods: {
        //         checkBox(i){
        //             this.flag=!this.flag
        //         }
        //     },
    
        // }
        
    })

})(window)