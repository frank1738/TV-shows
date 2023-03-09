import Nav from './Nav';
import Plans from './Plans';
import './Profile.css';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avator"
          />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <h3>Plans</h3>
              <Plans />
              <button onClick={() => auth.signOut()} className="sign-out-btn">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
