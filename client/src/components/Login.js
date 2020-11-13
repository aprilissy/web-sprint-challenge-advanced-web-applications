import React, { useState, useEffect, } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
 const initialForm = {
    credentials: {
      username:'',
      password:''
    }
  }

  const { push } = useHistory();
  const [form, setForm] = useState(initialForm);

  const changeHandler = ev => {
    console.log('ev',ev);
   console.log('name',ev.target.name);
   console.log('value',ev.target.value);
   
   
    setForm({
      credentials:{
        ...form.credentials,
        [ev.target.name]:ev.target.value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form',form.credentials);
    
    axios
      .post(`http://localhost:5000/api/login`,form.credentials)
      .then(res=>{
        console.log('edit res',res);
        localStorage.setItem('token', res.data.payload)
        push('/protected')
        props.setLoggedIn(true)
      })
      .catch(err=>{console.log('edit err',err);
      })
  }
   

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit} >
        <input 
          type='text'
          name='username'
          placeholder='username'
          value={form.credentials.username}
          onChange={changeHandler}
        />
        <input 
          type='password'
          name='password'
          placeholder='password'
          value={form.credentials.password}
          onChange={changeHandler}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login
