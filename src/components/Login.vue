<template>
    <div>
  
      <main class="box">
        <h2>Login</h2>

          <div class="inputBox">
            <ul>
        <li v-for="error in errors" :key="error" style="color:#FDE9E6; list-style: none;">{{ error }}</li>
      </ul>
            <label for="email">Email</label>
            <input type="email" v-model="email" placeholder="type your email" required/>
          </div>
          <div class="inputBox">
            <label for="userPassword">Password</label>
            <input type="password" v-model="password" placeholder="type your password"
                   required/>
          </div>
          <div>
            <button style="background-color:  #FDE9E6;" v-on:click="login"><button type="submit" name="" style="float: left" v-on:click="login">Submit</button></button>
            <button style="background-color:  #FDE9E6;"><router-link class="button" style="float: left" to="/register">Register</router-link></button>
          </div>
      </main>
      <footer>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from "axios";
 
 export default {
  
  name: "Login",
     data() {
         return {
             email: '',
             password: '',
             errors:[]
         }
     },

     methods: {
         // Pushes Posts to the Server When Called.
         postPost() {
             axios
                 .post(`http://127.0.0.1:8000/api/auth/login`, {
                     body: this.postBody
                 })
                 .then((response) => {})
                 .catch((e) => {
                     this.errors.push(e)
                 })
         },
         async login(){
          try {
            let result= await axios.post(`http://127.0.0.1:8000/api/auth/login`, {
      email: this.email,
      password: this.password
    });
         if(result.status==200){
      localStorage.setItem("user.info",JSON.stringify(result.data));
      const token = result.data.token; // Extract the token from the response
      localStorage.setItem('authToken', token); // Store the token in local storage

      this.$router.push({name:'Home'})
         }else if (result.data.errors) {
        // Populate the errors array with error messages
        this.errors = response.data.errors;
      } else{
      // Gérez le cas où la réponse ne contient pas les données attendues
      // Vous pouvez afficher un message d'erreur ou effectuer d'autres actions ici
      console.error("Réponse inattendue du serveur.");
    }
          } catch (error) {
            this.errors =['erreur sur information']
          }
          
     }
    },
    mounted(){
      let user= localStorage.getItem("user.info");
      if(user){
        this.$router.push({name:'Home'}) 
      }
     }}
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    
    z-index: -1;
  }
  
  body {
    font-family: sans-serif;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  
  header {
    display: none;
  }
  
  .box {
    
    margin-top: 40px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
    margin: auto auto;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
  }
  
  .box h2 {
    margin: 0 0 30px 0;
    padding: 0;
    color: #fff;
    text-align: center;
  }
  
  .box .inputBox label {
    color: #fff;
  }
  
  .box .inputBox input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    outline: none;
    padding: 10px 0;
    width: 100%;
  }
  
  .box input[type="submit"], .box button[type="submit"], a.button {
    font-family: sans-serif;
    background: #F11C0E;
    font-size: 11px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    padding: 10px 20px;
    letter-spacing: 2px;
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    margin: 2px 10px 2px 0;
    display: inline-block;
  }
  
  .box input[type="submit"]:hover, .box button[type="submit"]:hover, a.button:hover {
    opacity: 0.8;
  }
  
  #tsparticles {
    position: fixed;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 767px) {
    body {
      width: 100%;
    font-family: sans-serif;
    height: auto;
    margin: 0;
    padding: 0;
    z-index: -1;
  }
  .box {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
    margin: 0%;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
  }
  * {
    box-sizing: border-box;
    
    z-index: -1;
    width: 100%;
  }
  }
  </style>