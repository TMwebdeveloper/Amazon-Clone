import React, { useContext, useState } from "react";
import Classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {auth} from "../../Utility/Firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from "../../Components/DtaProvider/DtaProvider";
import { Type } from "../../Utility/ActionType";
import { ClipLoader } from "react-spinners";
const Auth = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword] =useState("");
  const [error, setError] =useState("")
  const [loading,setLoading] =useState({
    signIn:false,
    signUp:false
  })

  const [{user,}, dispatch] =useContext(DataContext)
  const navigate=useNavigate()
  
  const navStateData = useLocation()
  console.log(navStateData)
// console.log(user)

const authHundler =async(e)=>{
e.preventDefault()
console.log(e.target.name);
if (e.target.name =="signin"){
//firebase auth
    setLoading({...loading, signIn:true})
    signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
      
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user
      })
      setLoading({...loading, signIn:false})
      navigate(navStateData?.state?.redirect ||"/");
    })
    .catch((err)=>{
      setError(err.message)
      setLoading({ ...loading, signUp: false });
    });
    
  }else{
createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
setLoading({...loading,signUp:true})
  dispatch({
    type: Type.SET_USER,
    user: userInfo.user,
  });
  setLoading({ ...loading, signUp: false });
  navigate(navStateData?.state?.redirect || "/");

})
.catch((err)=>{
  setError(err.message);});
  setLoading({ ...loading, signUp: false });
}
};


// console.log(password, email)
  return (
    <section className={Classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={Classes.login__container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
              display: "block",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHundler}
            name="signin"
            className={Classes.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* create bckground btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHundler}
          className={Classes.login__registorButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {/* to display error when insert incorrect password */}
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
