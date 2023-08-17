import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');

  const loginUsers = async (e) => {
    e.preventDefault();
    
  const res= await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,pwd
      })
    })
  
  const data=res.json();

  if(res.status===400||!data){
    window.alert("Invalid credentials")
  }
  else{
    window.alert("Login Succesful")
    history("/");
  }
};
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <h2 className="card-title text-center">Login</h2>
            <div className="card-body py-md-4">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="pwd"
                    className="form-control"
                    id="pwd"
                    value={pwd}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>

                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button className="btn btn-primary" onClick={loginUsers}>
                    Submit
                  </button>
                  <button className="btn btn-primary" onClick={() => history('/signup')}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
