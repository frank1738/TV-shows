import { useRef, useState } from 'react';
import './Sign.css';
import { auth } from '../firebase';

const Sign = () => {
  const [state, setState] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="sign-screen">
      <form>
        <h1>{state ? 'Sign In' : 'Sign Up'}</h1>
        <input type="email" ref={emailRef} placeholder="Email" />
        <input placeholder="Password" ref={passwordRef} type="password" />
        <button type="submit" onClick={state ? signIn : register}>
          {state ? 'Sign In' : 'Sign Up'}
        </button>
        <h4>
          {state ? (
            <div>
              <span className="sign-gray">New to Netflix? </span>
              <span className="sign-link" onClick={() => setState(false)}>
                Sign Up Now.
              </span>
            </div>
          ) : (
            <span className="sign-link" onClick={() => setState(true)}>
              Sign In.
            </span>
          )}
        </h4>
      </form>
    </div>
  );
};

export default Sign;
