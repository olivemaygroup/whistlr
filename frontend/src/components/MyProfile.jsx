import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import moment from 'moment'

const MyProfile = () => {
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(['']);

  useEffect(() => {
    const getProfile = async () => {
      try {
        if (!user) {
          setError('You must sign in to view your profile');
          return;
        }

        const response = await fetch(`http://localhost:3003/profile/getprofile`, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });

        const json = await response.json();
        if (response.ok) {
          setProfile(json);
          setError(null);
        } else {
          setError(json.error);
        }
      } catch (error) {
        setError('An error occurred while fetching your profile');
      }
    };

    getProfile();
  }, [user]);

  return (
    <div className="profile-container">
      {profile && (
        <div className="profile-info">
          <h2>Personal info</h2>
          <h4> {profile[0].firstname} {profile[0].surname}</h4>
          <p>dob: {moment(profile[0].dateofbirth).format('Do MMM YYYY')}</p>
          <p>mob: {profile[0].phonenumber}</p>
          <p>email: {user.email}</p>
          <h2>Company info</h2>
          <p>Company name: {profile[0].companyname}</p>
          <p>CEO name: {profile[0].ceoname}</p>
          <p>HR Director name: {profile[0].hrname}</p>
          <p>Website: {profile[0].companywebsite}</p>
          <p>Twitter: {profile[0].companytwitter}</p>
          <button><Link to='/mycases'><h3>save</h3></Link></button>
          {error && <div className="error">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default MyProfile;
