import { useState } from "react";

const SignUp = ()=>{

    const [formData, setData] = useState({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: ""

    })
    return(
  <>
  <form action="input-control">
    <div>

      <label>firstName</label>
      <br />
        <input type="text" placeholder="Name" value ={formData.firstName} />
    </div>
        
    <div className="form-control">
            <label>lastName</label>
            <br></br>
            <input name="lastName" placeholder="Your lastName"  value = {formData.lastName} type="email" />

    </div>

    <div className="form-control">
            <label>userName</label>
            <br></br>
            <input name="userName" placeholder="Your useerName"  value = {formData.userName} type="email" />

    </div>

      <div className="form-control">
            <label>Gender</label>
            <br></br>
            <select name="gender" ></select>
            <option value=""></option>

      </div>

      <div className="form-control">
            <label>Email</label>
            <br></br>
            <input name="email" placeholder="Your Email"  value = {formData.email} type="email" />
    </div>

    <div className="form-control">
            <label>password</label>
            <br></br>
            <input name="password" placeholder="Your password"  value = {formData.password} type="email" />

    </div>
  
      <button onclick=()=>{} >Submit</button>
  
  </form>
   

  </>
  )
}

export default SignUp