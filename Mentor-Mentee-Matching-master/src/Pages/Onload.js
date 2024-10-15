import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import MentorDashboard from '../Components/MentorDashboard';
import MenteeDashboard from '../Components/MenteeDashboard';
import MenteeDetails from '../Components/MenteeDetails';
import MentorDetails from '../Components/MentorDetails';
import ViewMentees from '../Components/ViewMentees';
import ViewMentor from '../Components/ViewMentor';
import Login from '../UI/Login'
import Signup from '../UI/Signup'
import Home from '../UI/Home'
import './Onload.module.css'
import Header from '../UI/Header'

const Onload = (props) => {
    
    return (
        <div className="onload">
            
            <Router>
            <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType}/>
                <Switch>
                    <Route path ='/' exact>
                        <Home />
                    </Route>
                    <Route path ='/login'>
                        <Login isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType} />
                    </Route>
                    <Route path ='/signup'>
                        <Signup isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType} />
                    </Route>
                    <Route path ='/dashboard' exact>
                        {(props.type === 'Mentor') && <MentorDashboard isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType}/>}
                        {(props.type === 'Mentee') && <MenteeDashboard isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType}/>}
                    </Route>
                    <Route path ='/dashboard/mentees'>
                        {console.log(props.type)}
                        {(props.type === 'Mentor') && <ViewMentees isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType}/>}
                        {(props.type === 'Mentee') && <ViewMentor isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType}/>}
                    </Route>
                    <Route path ='/dashboard/mentee-details'>
                        {(props.type === 'Mentor') && <MenteeDetails isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType}/>}
                        {(props.type === 'Mentee') && <MentorDetails isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} type={props.type} setType={props.setType} />}
                    </Route>
                </Switch>
            </Router>
        </div>           
    )
}

export default Onload;
