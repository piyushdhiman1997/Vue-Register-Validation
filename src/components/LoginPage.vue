<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
      
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="register()">
            <div
              class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
            >
              <p class="lead fw-normal mb-0 me-3">Sign in with</p>
              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-linkedin-in"></i>
              </button>
            </div>
          
            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
           
            
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3"
                >Email address</label
              > 
              <input
                type="text"
                id="email"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                v-model ="email"
                 @keyup ="login"
              />
              <p v-if="error.length">
            
          
            <ul>
          
              <li v-for ="e in error" v-bind:key="e.id">
              {{e.emailReqError}} 
              {{ e.emailValid }}
            
              </li>
            </ul>
          </p>
              
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <label class="form-label" for="form3Example4">Password</label>
              <input
                :type="passwordFieldType"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Enter password"
                v-model="password"
                @keyup ="login"
              />
              <i class="fa-solid fa-eye login" @click ="showpwd"></i>
            
              <p v-if="error.length">
            
          
            <ul>
          
              <li v-for ="e in error" v-bind:key="e.id">
            
              {{ e.password }}
              </li>
            </ul>
          </p>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" class="text-body">Forgot password?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              
              >
                Login
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <button type ="submit" class="btn btn-primary btn-sm">Register</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
    >
      <!-- Copyright -->
      <div class="text-white mb-3 mb-md-0">
        Copyright ?? 2020. All rights reserved.
      </div>
      <!-- Copyright -->

      <!-- Right -->
      <div>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="#!" class="text-white">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <!-- Right -->
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  data()
  {
    return{
      error: "",
      email:null,
      password:null,
      passwordFieldType: "Password",
       regEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ,
      //regName: /\d+$/g,
    }
  },
  methods: {
    // validateEmail() {
    // if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
    //     alert('Please enter a valid email address');
    // } else {
    //     // this.msg['email'] = '';
    // }

    login(e)
    {
     this.error=[];
     if(this.email && this.password && this.regEmail.test(this.email))
     {
      console.warn("no error")
      // this.$router.push("/signup");

      // return true
      } 
     if(!this.email)

      {
    
        this.error.push({
          emailReqError: "Email is required"
        });

      }
     else if(!this.regEmail.test(this.email))
      {
        this.error.push({
          emailValid: "Email is not valid"
        });
      }
     if(!this.password)
      {
        this.error.push({
          password: "password is required"
        });
      }
     
       
     
      
      console.warn("Hello",this.error); 
      e.preventDefault();
    },
    register() {
      this.$router.push("/signup");
    },
    showpwd(){
      this.passwordFieldType = this.passwordFieldType == "password" ? "text" : "password";
    }

  }
};
</script>
<style>
<!-- .divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
} -->
li{
 list-style: none;
}
.form-control pwd{
  position: absolute;
}
.login{
    position: absolute;
    top: 59%;
    left: 89%;
    transform: translate(-10%, -50%);
}
</style> 
