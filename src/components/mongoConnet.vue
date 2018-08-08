<template>
  <div>
    <p>
        这是接口返回的数据
    </p>
    <div>{{list}}</div>
  </div>
</template>
<script>
   import axios from "axios"
  export default{
    name:'VueBasic', data() {
        return {
         list:[]
        }
    },
    mounted(){
    var that =this;
      axios.get('/api/goods').then(function(res){
        if(res.data.status =='0'){
        console.log(res.data.result.list);
            that.list =res.data.result.list;
        }
      });
    }


  }
</script>
<style>

</style>
