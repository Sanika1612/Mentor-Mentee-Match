import React from 'react';
import logo from '../Assets/circle-cropped-removebg-preview.png';
import classes from './Home.module.css';

const Home = props => {
    return (
        <main className={`${classes.main}`}>
            <div className={classes.con}>
                <img src={logo} alt = "Ngo Logo" style={{height: "80px"}} className="mb-3"/>
                <p  className={classes.text}><b>Claylab Education Foundation is a Non-Profit 
                  Organisation working towards providing quality education to our children, 
                  the leaders of the future, during their higher secondary grades.</b>
                  <br/><br/>
                  We provide after school support to high school students from less privileged 
                  backgrounds at a very affordable price. We, not only provide academic support,
                   but also support students towards development of 21st century skills like 
                   Critical thinking, Collaboration, Ownership, Resilience and Empathy. 
                   All our structures are online and students from any part of the country can join 
                   us.</p>
            </div>
        </main>
    )
}

export default Home;
