<template>
  <div class="home">
    <input
      v-model="input"
      type="number"
      placeholder="Enter the id of the window you are looking for"
    >
    <b-button size="sm" @click="toggle" v-on:click="search">Search</b-button>
    <p>Window name: {{window_data.name}}</p>
    <p>Window id : {{window_data.id}}</p>
    <p>Window Status : {{window_data.windowStatus}}</p>
    <p>Room Id : {{window_data.roomId}}</p>
    <p>Room name : {{window_data.roomName}}</p>  

    <b-alert
    class="mt-3"
    dismissible  >
    Hello {{ window_data.name }}!
  </b-alert>  
  </div>
</template>

<style scoped>
</style>




<script>
// @ is an alias to /src
import axios from "axios";


export default {
  name: "Window",
  components: {
    
  },

  data() {
    return {
      window_data:{
        json_data:null,
        id:null,
        name:null,
        windowStatus:null,
        roomName:null,
        roomId:null,
        

      },
      
      input: null,
    };
  },

  methods: {
     toggle() {
      console.log('Toggle button clicked')
    },
    
    search() {
      axios
        .get(
          "https://app-ddb00d24-3cab-4d55-9cb6-d9d53eaa8f98.cleverapps.io/api/windows/" +this.input
            
        )
        .then((response) => {
          (this.window_data.json_data = response.data), console.log(this.window_data.json_data);
          if (response.data == "") {
            alert("This window does not exist");
          }else{
            this.window_data.id=response.data.id;
            this.window_data.name=response.data.name;
            this.window_data.windowStatus=response.data.windowStatus;
            this.window_data.roomId=response.data.roomId;
            this.window_data.roomName=response.data.roomName;
          }
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
          this.showAlert();
        })
        .finally(() => (this.loading = false));
    },

    
  },
};
</script>