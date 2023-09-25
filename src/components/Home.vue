<template>
    <div>
      <!-- component matched by the route will render here -->
      <h1>Welcome To CRM</h1>
      <div>
    <h1>User List</h1>
    <ul v-if="userList.length > 0" v-for="user in userList" :key="user.id">
  <li>{{ user.name }}</li>
  <li>{{ user.email }}</li>
</ul>
  </div>

    </div>
  </template>
  
  <script>
  
  import axios from "axios";
  import HelloWorld from "./HelloWorld.vue";
  
  export default {
    name: "Home",
    data(){
return{
  userList: [],
}
    },
    components: {
      HelloWorld
    },

    mounted() {
    // Fetch user data from the API
    this.fetchUserData();
  },
    methods:{
      async fetchUserData() {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });
        if (response.status === 200) {
          console.log(response.data);
          this.userList = response.data; // Update the user list with the fetched data
        }else{
          this.userList =[];
        }// Update the user list with the fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
  },
    
  }
  </script>
  
  <style scoped>
  
  </style>