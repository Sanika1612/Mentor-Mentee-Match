import React, { useRef } from 'react';
export var c1 = '';
export var d1 = '';

const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry'
];

const hobbies = [
    'sports',
    'arts',
    'poetry',
    'writing',
    'drama',
    'reading',
    'singing',
    'dancing',
    'photography',
    'cooking',
    'others'
];

const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

const careers = ["Engineering","Public Services", "Humanities", "Law", "Commerce", "Medical"];

const Signup = props => {

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const typeInputRef = useRef();
    const nameInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const stateInputRef = useRef();
    const mGenderInputRef = useRef();
    const hobby1InputRef = useRef();
    const hobby2InputRef = useRef();
    const hobby3InputRef = useRef();
    const languageInputRef = useRef();
    const careerInputRef = useRef();
    console.log("printing..");
    const submitHandler = (event) => {
        event.preventDefault();
       
        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;
        const role = typeInputRef.current.value;
        const name = nameInputRef.current.value;
        const phonenumber = phoneNumberInputRef.current.value;
        const state = stateInputRef.current.value;
        const gender_preference = mGenderInputRef.current.value;
        const interest1 = hobby1InputRef.current.value;
        const interest2 = hobby2InputRef.current.value;
        const interest3 = hobby3InputRef.current.value;
        const language = languageInputRef.current.value;
        const career = careerInputRef.current.value;
        console.log("This is role from frontend", role)
        var signUpData = {
            username,
            password,
            role,
            name,
            phonenumber,
            state,
            gender_preference,
            interest1,
            interest2,
            interest3,
            language,
            career
        }

        d1 = signUpData;

        if (role == 'Mentor') {
            console.log("HI");
            const no_of_students = gender_preference;

            signUpData = {
                username,
                password,
                name,
                phonenumber,
                state,
                no_of_students,
                interest1,
                interest2,
                interest3,
                language,
                career
            }
        }

        console.log("This is role", signUpData)
        if (role == 'Mentee') {
            
            fetch(`/signup/mentee`, {
                method : 'POST',
                body: JSON.stringify(signUpData),
                headers: {
                    'Content-Type': 'application/json',
        
                }
            })
            .then(x => x.json())
              .then(res => {
                  if (res.code == 200) {
                      c1 = res.code;
                      props.setIsLoggedIn(true);
                      console.log(res);
                  } else {
                      props.setIsLoggedIn(false);   
                      alert("Username already taken")
                  }
              })

        console.log(signUpData);

    } else {
        console.log("inside mentor query")
        const result = fetch(`/signup/mentor`, {
            method : 'POST',
            body: JSON.stringify(signUpData),
            headers: {
                'Content-Type': 'application/json',
    
            }
        })
        .then(x => x.json())
          .then(res => {
              if (res.code == 200) {
                  c1 = res.code;
                  props.setIsLoggedIn(true);
                  console.log(res);
              } else {
                  props.setIsLoggedIn(false);
                  alert("Username already taken")
              }
          })

        console.log("THis is signupdata at last",signUpData);
    }}

    const blurHandler = (event) => {
        const username = usernameInputRef.current.value;
        console.log(username);
        // props.checkUsername(username);
    }

    return (
        <div className="col-5 my-5 mx-auto">
            <div className="card card-outline-secondary">
                <div className="card-header">
                    <h3 className="mb-0 text-center">Sign Up</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" autocomplete="off" ref={usernameInputRef} onBlur={blurHandler} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" ref={passwordInputRef} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Role</label>
                            <select id="role" className="form-select me-2" ref={typeInputRef}>
                                <option value="Mentor">Mentor</option>
                                <option value="Mentee">Mentee</option>
                            </select>
                        </div>

                        <hr className="my-4" />

                        <h5 className="mb-2 text-center">Additional Details</h5>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="username" autocomplete="off" ref={nameInputRef} onBlur={blurHandler} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile-number" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="mobile-number" ref={phoneNumberInputRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State</label>
                            <select id="state" className="form-select me-2" ref={stateInputRef}>
                                {states.map((state) => <option value={state}>{state}</option>)}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="m-gender" className="form-label">Gender Preference for Mentor</label>
                            <select id="m-gender" className="form-select me-2" ref={mGenderInputRef}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="mb-3" style={{width: "30%"}}>
                                <label htmlFor="hobby-1" className="form-label">Hobby 1</label>
                                <select id="hobby-1" className="form-select me-2" ref={hobby1InputRef}>
                                    {hobbies.map((hobby) => <option value={hobby}>{toTitleCase(hobby)}</option>)}
                                </select>
                            </div>
                            <div className="mb-3" style={{width: "30%"}}>
                                <label htmlFor="hobby-2" className="form-label">Hobby 2</label>
                                <select id="hobby-2" className="form-select me-2" ref={hobby2InputRef}>
                                    {hobbies.map((hobby) => <option value={hobby}>{toTitleCase(hobby)}</option>)}
                                </select>
                            </div>
                            <div className="mb-3" style={{width: "30%"}}>
                                <label htmlFor="hobby-3" className="form-label">Hobby 3</label>
                                <select id="hobby-3" className="form-select me-2" ref={hobby3InputRef}>
                                    {hobbies.map((hobby) => <option value={hobby}>{toTitleCase(hobby)}</option>)}
                                </select>
                        </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="language" className="form-label">Prefered Language</label>
                            <select id="language" className="form-select me-2" ref={languageInputRef}>
                                <option value="Maharashtra">English</option>
                                <option value="Madhya Pradesh">Hindi</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="career" className="form-label">Career Interest</label>
                            <select id="career" className="form-select me-2" ref={careerInputRef}>
                                {careers.map((career) => <option value={career}>{career}</option>)}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
