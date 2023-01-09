<template>
  <section class="vh-100" style="background-color: #eee">
    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <form @submit.prevent= "register()" class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c"
                          >Your Name</label
                        >
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          v-model="name"
                          @keyup=" register"
                        />
                       
                        <p v-if="error.length">
            
            <ul>
              <li v-for ="e in error" v-bind:key="e.id">
              {{e.namereq}}                  
              </li>
            </ul>
          </p>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c"
                          >Your Email</label
                        >
                        <input
                          type="text"
                          id="form3Example3c"
                          class="form-control"
                          v-model="email"
                          @keyup=" register"
                        />
                        <p v-if="error.length">
            
            <ul>
              <li v-for ="e in error" v-bind:key="e.id">
                {{e.emailReqError}} 
               {{e.emailValid}}          
              </li>
            </ul>
          </p> 
                                            </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                        <input
                          :type="passwordFieldType"
                          id="form3Example4c"
                          class="form-control pwd"
                          v-model="password"
                          @keyup=" register"
                        />
                        <i class="fa-solid fa-eye signup" @click ="switchVisibility"></i>
                        <p v-if="error.length">
            
                  <ul>
              <li v-for ="e in error" v-bind:key="e.id">  
                {{e.password}}        
                {{e.strongPwd}}
             </li>
            </ul>
               </p>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd"
                          >Repeat your password</label
                        >
                        <input
                          type="password"
                          id="form3Example4cd"
                          class="form-control"
                          v-model="confirmPassword"
                          @keyup=" register"
                        />  
                        <p v-if="error.length">
            
            <ul>
              <li v-for ="e in error" v-bind:key="e.id">  
              {{e.confirmPwd}}
             </li>
            </ul>
          </p>
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                        @keyup=" register"
                      />
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button type="submit" class="btn btn-primary btn-lg">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  name: "RegesTration",
    data(){
      return{
      error: [],
      name:null,
      email:null,
      password:null,
      confirmPassword: null,
      passwordFieldType: "Password",
      regEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // regPassword: /^[A-Za-z]\w{7,14}$/,
      regPassword: /^\w{7,14}$/,
      regName: /\d+$/,
    }
  },
  methods: {
    register(e)
    {
     this.error=[];
     if(this.name && this.email && this.regEmail.test(this.email) && this.password && this.confirmPassword==this.password)
     {
      console.warn("no error")
      // this.$router.push("/login");

      // return true
      }
      if(!this.name)
      {
        this.error.push({
          namereq:"Name is required"});
      }
     if(!this.email)
      {
        this.error.push({
          emailReqError: "Email is required"
        });
      }
      else if 
        (!this.regEmail.test(this.email)){
          this.error.push({
            emailValid: "Email is not valid"});
      
      }
     if(!this.password)
      {
        this.error.push({
         password:"password is required"});
      }
      else if
      (!this.regPassword.test(this.password))
      {
        this.error.push({
          strongPwd:"Password should be 7 to 14 words"});
      }
     if(this.confirmPassword!==this.password){
      this.error.push({
        confirmPwd: "Password should match"
      });
     }
      console.warn("Hello",this.error);
      e.preventDefault();
    },
    switchVisibility(){
      this.passwordFieldType = this.passwordFieldType == "password" ? "text" : "password";
    }

    }  
};
</script>
<style>
.form-control pwd{
  position: absolute;
}
.signup{
  position: absolute;
  top: 47%;
  left: 37%;
  transform: translate(-50%, -54%);

}
</style>
