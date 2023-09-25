<template>
    <div>
  
      <main class="box">
        <h2>Register</h2>
        
          <div class="inputBox">
            <label for="userName">Name</label>
            <input type="text" name="userName" v-model="name" id="userName" placeholder="type your username" required/>
          </div>
          <div class="inputBox">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" id="email" placeholder="type your email" required/>
          </div>
          <div class="inputBox">
            <label for="userPassword">Password</label>
            <input type="password" name="userPassword" v-model="password" id="userPassword" placeholder="type your password"
                   required/>
          </div>
          <div class="inputBox">
            <label for="userConfirmPassword">Confirm Password</label>
            <input type="password" name="userPassword" v-model="c_password" id="userConfirmPassword"
                   placeholder="confirm your password"
                   required/>
          </div>
          <div>
          <button style="background-color:  #FDE9E6;"><button type="submit" name="" style="float: left" v-on:click="register">Submit</button></button>
            <button style="background-color:  #FDE9E6;"><router-link class="button" style="float: left" to="/login">Login</router-link></button>
          </div> 
      </main>
      <footer>
      </footer>
    </div>
  </template>
  
  <script>
  
  import axios from "axios";
  export default {
    name: "Register",
    data: function () {
      return {
        
        email: '',
             password: '',
             name:'',
             c_password:''
      };
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
         async register(){
          let result=await axios.post(`http://127.0.0.1:8000/api/auth/register`, {
                     email: this.email,
                     password:this.password,
                     name:this.name,
                     c_password:this.c_password
                 });
                 if(result.status==200){
this.$router.push('/login');
         }else {
      // Gérez le cas où la réponse ne contient pas les données attendues
      // Vous pouvez afficher un message d'erreur ou effectuer d'autres actions ici
      console.error("Réponse inattendue du serveur.");
    }
          console.warn(result)
         }
     }
  }
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    
    z-index: -1;
    
  }
  
  body {
    font-family: sans-serif;
    height: 100vh;
    padding: 0;
  }
  
  header {
    display: none;
  }
  
  .box {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
    
    margin-top: 60px;
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