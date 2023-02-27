import './Sign.css';

const Sign = () => {
  return (
    <div className="sign-screen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="sign-gray">New to Netflix? </span>
          <span className="sign-link">Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
};

export default Sign;
