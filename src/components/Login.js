import { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import Sign from './Sign';

const Login = () => {
  const [signin, setSignIn] = useState(false);
  return (
    <div className="login-screen">
      <div className="login-background">
        <img className="login-logo" src={logo} alt="logo" />
        <button onClick={() => setSignIn(true)} className="sign-button">
          Sign In
        </button>
        <div className="login-gradient"></div>
      </div>
      <div className="login-body">
        {signin ? (
          <Sign />
        ) : (
          <>
            <h1>Unlimited films,TV programmes and more.</h1>
            <h2>Watch anywhere.Cancel anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="login-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)} className="start-btn">
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
