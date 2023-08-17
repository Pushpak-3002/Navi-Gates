import React,{useState} from 'react';
//import signpic from "../Navi-Gates/registration2.png";
import { useNavigate } from 'react-router-dom';
const Signup =() =>{
  const history=useNavigate();
  const [user,setUser] = useState({name:'',email:'',phone:'',pwd:'',cpwd:''});


  const handleInputs=(e) =>{
      const { name, value } = e.target;

      setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const PostData = async (e)=>{
      e.preventDefault();
      const {name,email,phone,pwd,cpwd}= user;

      const res = await fetch("/register",{
        method:"POST",
        headers:{
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-credentials":"*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          name,email,phone,pwd,cpwd,
        }),
      });

      console.log(user);
      console.log(res);
      const data = await res.json();
      if(data.status === 422 || !data ){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }else{
        window.alert("Registration Done");
        console.log("Registration Done");

        history("/login");
      }
  }


  return(
    <>
      <div class="container">
  <div class="row justify-content-center">
  <div class="col-md-4">
   <div class="card" >
     <h2 class="card-title text-center">Register </h2>
      <div class="card-body py-md-4">
       <form _lpchecked="1" method="POST">

          <div class="form-group">
            <input type="text" class="form-control" id="name" name="name" value={user.name} onChange={handleInputs} placeholder="Name"/>
          </div>

          <div class="form-group">
            <input type="email" class="form-control" id="email" name="email" value={user.email} onChange={handleInputs} placeholder="Email"/>
          </div>

          <div class="form-group">
            <input type="tel" class="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={user.phone} onChange={handleInputs} placeholder='Phone mumber'/>
          </div>                         
                          
          <div class="form-group">
            <input type="password" class="form-control" id="password" name="pwd" value={user.pwd} onChange={handleInputs} placeholder="Password"/>
          </div>

          <div class="form-group">
            <input type="password" class="form-control" id="confirm-password" name="cpwd" value={user.cpwd} onChange={handleInputs} placeholder="confirm-password"/>
          </div>

          <div class="d-flex flex-row align-items-center justify-content-between">
            <button class="btn btn-primary"><a href="/login">Login</a></button>
            <button class="btn btn-primary" onClick={PostData}>Submit</button>
          </div>

       </form>
     </div>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default Signup