<template>
    <div >{{msg}}</div>
</template>
<script>
  export default{
    name:"SelfInput",
    mounted(){
      this.changeArr();
    },
    data(){
      return {
        msg:"this s is  SelfInput components",
        arr:[]
      }
     },
    methods:{
      changeArr(){
        setTimeout(()=>{
          this.msg="333";
          console.log(this.msg);
        },2000);
      }
    }
  }
</script>
