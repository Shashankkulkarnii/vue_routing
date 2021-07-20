<template>
    <h1>developers</h1>
<div class="developers" v-for="dev in devlist" :key="dev.id">
    <router-link :to="{name: 'DeveloperDetailes' , params: {id:dev.id}}" > 
        <p >Name : {{dev.name}} Technology : {{dev.tech}}</p>
        </router-link>

    </div>
</template>
  

<script>
export default {
    name:'developers',
    data(){
        return {
            devlist:[
                {id:1,name:'shashank',tech:'javascript'},
                {id:2,name:'utkarsh',tech:'java'},
                {id:3,name:'mohit',tech:'ruby'},
            ]
        }
    }

}
</script>

<style>
    .developers{
        padding:10px;
        background-color: darkgrey;
    }
</style>