// export default Profile;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile({ email }) {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const email=JSON.stringify(localStorage.getItem("email"))
    // Fetch the user's profile data based on the provided email
    axios.get(`http://localhost:3002/profile/${email}`) // Replace with your server URL and endpoint
      .then((response) => {
        setProfileData(response.data);
        console.log(response.data);
        console.log(email);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Profile Details</h1>
      <p>Full Name: {profileData.fullName}</p>
      <p>Designation: {profileData.designation}</p>
      <p>Email: {profileData.email}</p>
      <p>Mobile: {profileData.mobile}</p>
      <p>Blood Group: {profileData.bloodGroup}</p>
      <p>Location: {profileData.location}</p>
    </div>
  );
}

export default Profile;