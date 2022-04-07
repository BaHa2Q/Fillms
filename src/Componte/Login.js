import {useState} from 'react';
import LoginPage from './LoginPage';

function Login() {
    const adminUser = [{Name :"Bahaa",Email:"bahaaqadan2000@gmail.com",Password:"123"}]
    const [user,setUser] = useState({Name :"",Email:"",Password:""})
    const Login  = details =>{
        console.log(details);
    }
    return (
      <div>
          {(user.Email != "") ? (
              <div>
                  <h1>Welcome, <h2>{user.Name}</h2></h1>
              </div>
          ):(
              <LoginPage Login={Login}/>
          )}
      </div>
    );
  }
  
  export default Login;
  