import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileForm.css';

function ProfileDisplay() {
    const [userData, setUserData] = useState([]);
    const email = localStorage.getItem("emailid")
    console.log(email)
    useEffect(() => {
        const getEmployeeData = async () => {
            await axios.get(`http://localhost:3002/getProfileData/${email}`).then((response) => {
                setUserData(response.data)
            });
        }
        getEmployeeData();
    }, [])
    console.log(userData)
    return (
        <>
            {userData.map((item) =>
                <div className='profile-form' style={{ margin: 40 }}>

                    <p>Full Name: {item.fullName}</p>

                    <p>Designation: {item.designation}</p>

                    <p>Email: {item.email}</p>

                    <p>Mobile: {item.mobile}</p>

                    <p>Blood Group: {item.bloodGroup}</p>

                    <p>Location: {item.location}</p>

                </div>
            )}
        </>
    );
}
export default ProfileDisplay;