<template>
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://i.postimg.cc/8cM31QCS/Screenshot-2023-07-01-122816.png"
              id="logo"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <a class="offcanvas-title" id="offcanvasNavbarLabel"
                ><img
                  src="https://i.postimg.cc/8cM31QCS/Screenshot-2023-07-01-122816.png"
                  alt="logo"
              /></a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/about">About</router-link>
                </li>
               
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/users"
                    >Users</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/products"
                    >Products</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/contact"
                    >Contact</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="">Login / Register</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .navbar {
    background-color: #ddf1f4;
    border: 2px solid #1b4965;
    border-radius: 5px;
  }
  .navbar-toggler {
    border: 2px ridge #1b4965;
  }
  #logo {
    height: 6rem;
    background-color: #cae9ff;
  }
  .offcanvas-body {
    background-color: #ddf1f4;
  }
  .offcanvas-header {
    background-color: #ddf1f4;
  }
  img {
    height: 6rem;
  }
  #navbarNav {
    display: flex;
    justify-content: end;
    text-align: center;
  }
  
  .nav-link {
    color: grey;
    font-weight: 700;
  }
  .nav-link:hover {
    color: #5fa8d3;
  }
  
  li {
    color: #1b4965;
  }
  </style>