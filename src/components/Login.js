import './Login.css';
import logo from '../assets/logo.png';

const Login = () => {
  return (
    <div className="login-screen">
      <div className="login-background">
        <img className="login-logo" src={logo} alt="logo" />
        <button className="sign-button">Sign In</button>
        <div className="login-gradient"></div>
      </div>
      <div className="login-body">
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
              <button className="start-btn">GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
