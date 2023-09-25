<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <a class="navbar-brand" href="#">
          <img src="/images/logo.png" alt="Logo" width="300" height="60" class="d-inline-block align-text-top">
        </a>
        <!-- Navbar Toggler Button (for mobile) -->
        <button class="navbar-toggler ml-auto" type="button" @click="toggleMobileMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div :class="['collapse', 'navbar-collapse', { 'show': isMobileMenuOpen }]" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item d-lg-block" v-if="!showNavbar">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item d-lg-block" v-if="showNavbar">
            <router-link class="nav-link" to="/Login"> Login</router-link>
          </li>
          <li class="nav-item d-lg-block" v-if="showNavbar">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item d-lg-block" v-if="!showNavbar">
            <button type="button" v-on:click="logout">
          Logout
        </button>  
        </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>

import axios from "axios";
export default {data() {
    return {
      isMobileMenuOpen: false
    };
  },
  computed: {
    showNavbar() {
      // Utilisez Vue Router pour vérifier si la route actuelle nécessite une authentification
      return !this.$route.meta.requiresAuth;
    },
  },
  methods: {
    async logout() {
        try {
      // Make a POST request to your API's logout endpoint
      const token = localStorage.getItem('authToken');
      await axios.get('http://127.0.0.1:8000/api/logout', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });
      
      // After successful logout, perform client-side cleanup
      this.handleLogoutSuccess();
    } catch (error) {
      // Handle any errors that occur during the logout request
      console.error('Logout failed:', error);
      // You can display an error message to the user here
    }
      // Mettez en œuvre la logique de déconnexion ici

// Supprimez les informations de l'utilisateur du stockage local (localStorage)
localStorage.removeItem('user.info');
localStorage.removeItem('authToken');
// Redirigez l'utilisateur vers la page de connexion ou une autre page appropriée
this.$router.push('/login');
    },
    handleLogoutSuccess() {
    // Client-side cleanup (e.g., resetting authentication state, clearing tokens, etc.)
    // Redirect the user to the login page or another appropriate page
    this.$router.push('/login');
  },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
};
</script>
<style>
@media (max-width: 767px) {
    #navbarNavDropdown .navbar-nav{
        z-index: 1000;
        position: relative;
    }}
</style>