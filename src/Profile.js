import React,{useState} from 'react';

import axios from 'axios';

import './ProfileForm.css';

 

function Profile() {

  const [profileData, setProfileData] = useState({

    fullName: '',

    designation: '',

    email: '',

    mobile: '',

    bloodGroup: '',

    location: '',

  });

 

  const handleChange = (event) => {

    setProfileData(prev =>({...prev,[event.target.name]:[event.target.value]}))

  }

 

    // Send the profile data to the server for saving in the database

    const handleSubmit =(event) =>{

        event.preventDefault();

        setProfileData(profileData);

            axios.post('http://localhost:3002/Profile',profileData)

            .then((res) =>{

                console.log(res);

            })

            .catch(err => console.log(err));

            alert('Profile created');

            window.location = '/Login';

    }

 

  return (

    <div className="profile-form">

      <h1>Profile</h1>

      <form onSubmit={handleSubmit}>

        <label>Full Name:</label>

        <input type="text" name="fullName" value={profileData.fullName} onChange={handleChange} className="form-control" required/>

 

        <label>Designation:</label>

        <input type="text" name="designation" value={profileData.designation} onChange={handleChange} className="form-control" required/>

 

        <label>Email:</label>

        <input type="email" name="email" value={profileData.email} onChange={handleChange} className="form-control" required/>

 

        <label>Mobile:</label>

        <input type="text" name="mobile" value={profileData.mobile} onChange={handleChange} className="form-control" required/>

 

        <label>Blood Group:</label>

        <input type="text" name="bloodGroup" value={profileData.bloodGroup} onChange={handleChange} className="form-control" required/>

 

        <label>Location:</label>

        <input type="text" name="location" value={profileData.location} onChange={handleChange} className="form-control" required/>

 

        <button type="submit" className='btn btn-success w-100 rounded-0' style={{ background : '#3F51B5'}}>Save</button>

      </form>

    </div>

  );

}

 

export default Profile;
// import React,{useState} from 'react';
// import axios from 'axios';
// import './ProfileForm.css';

// import { useNavigate } from 'react-router-dom';

// function Profile() {
//   const [profileData, setProfileData] = useState({
//     fullName: '',
//     designation: '',
//     email: '',
//     mobile: '',
//     bloodGroup: '',
//     location: '',
//   });

//   const navigate=useNavigate();

//   const handleChange = (event) => {
//     setProfileData(prev =>({...prev,[event.target.name]:[event.target.value]}))
//   }

//     // Send the profile data to the server for saving in the database
//     const handleSubmit =(event) =>{
//         event.preventDefault();
//         setProfileData(profileData);
//             axios.post('http://localhost:3002/Profile',profileData)
//             .then((res) =>{
//                 console.log(res);
//                 alert('Profile created');
//                 navigate('/Login')

//             })
//             .catch(err => console.log(err));
//     }

//   return (
//     <div className="profile-form">
//       <h1>Profile</h1>
//       <form onSubmit={handleSubmit}>

//         <label>Full Name:</label>
//         <input type="text" name="fullName" value={profileData.fullName} onChange={handleChange} className="form-control" required/>

//         <label>Designation:</label>
//         <input type="text" name="designation" value={profileData.designation} onChange={handleChange} className="form-control" required/>

//         <label>Email:</label>
//         <input type="email" name="email" value={profileData.email} onChange={handleChange} className="form-control" required/>

//         <label>Mobile:</label>
//         <input type="text" name="mobile" value={profileData.mobile} onChange={handleChange} className="form-control" required/>

//         <label>Blood Group:</label>
//         <input type="text" name="bloodGroup" value={profileData.bloodGroup} onChange={handleChange} className="form-control" required/>

//         <label>Location:</label>
//         <input type="text" name="location" value={profileData.location} onChange={handleChange} className="form-control" required/>

//         <button type="submit" className='btn btn-success w-100 rounded-0' style={{ background : '#3F51B5'}}>Save</button>
//       </form>
//     </div>
//   );
// }

// export default Profile;