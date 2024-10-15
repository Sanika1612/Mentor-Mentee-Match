import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
export var c = '';
export var d = '';

export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const typeRef = useRef();
  const history  = useHistory();

  const submitHandler = e => {
    e.preventDefault();

      const loginDetails = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        type: typeRef.current.value,
      }

      d = loginDetails;

      const loginInfo = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }

      if(loginDetails.type == 'Mentee') {
        fetch(`/login/mentee`, {
          method : 'POST',
          body: JSON.stringify(loginInfo),
          headers: {
              'Content-Type': 'application/json',
  
          }
      })
      .then(x => x.json())
        .then(res => {
            if (res.code == 200) {
                c = res.code;
                props.setIsLoggedIn(true);
                history.push('/');
                console.log(res);
            } else {
                props.setIsLoggedIn(false);
                alert("Username already taken")
            }
        })
      } else {
        fetch(`/login/mentor`, {
          method : 'POST',
          body: JSON.stringify(loginInfo),
          headers: {
              'Content-Type': 'application/json',
  
          }
      })
      .then(x => x.json())
        .then(res => {
            if (res.code == 200) {
                c = res.code;
                props.setIsLoggedIn(true);
                history.push('/');
                console.log(res);
            } else {
                props.setIsLoggedIn(false);
                alert("Username already taken")
            }
        })
      }

    console.log("in side of login props are..", props);
  }


  return (
    <div className="col-4 my-5 mx-auto">
            <div className="card card-outline-secondary">
                <div className="card-header">
                    <h3 className="mb-0 text-center">Log In</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" autocomplete="off" ref={usernameRef} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" ref={passwordRef} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Role</label>
                            <select id="role" className="form-select me-2" ref={typeRef}>
                                <option value="Mentor">Mentor</option>
                                <option value="Mentee">Mentee</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary mt-1">Submit</button>
                    </form>
                </div>
            </div>
        </div>
  )
}