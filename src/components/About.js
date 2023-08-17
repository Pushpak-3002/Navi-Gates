import React, { useEffect } from 'react'
import satyaki from "../Navi-Gates/satyaki2.jpg";
import pushpak from "../Navi-Gates/pushpak1.jpg";
import sohom from "../Navi-Gates/sohom.jpg";

const About =() =>{
  
    const callAboutPage= async ()=>{
        try{
            const res=await fetch('/about',{
                
            })
        }catch(err){
            console.log(err);
        }
    }
  useEffect(()=>{
    callAboutPage();
  },[]);
  
    return(
    
    <div>
      <header>
        <h1>Team NaviGates</h1>
        <p>Building the Future of Ground Personnel Monitoring</p>
    </header>

    <div class="containur">
        <h2>About Us</h2>
        <p>
            Welcome to Team NaviGates! We are a dedicated group of technology enthusiasts working on building the
            next-generation Ground Personnel Monitoring Tool. Our mission is to enhance safety and efficiency in
            various industries by providing real-time monitoring and tracking solutions for ground personnel.
        </p>
        <p>
            At Team NaviGates, we believe that every worker deserves a safe and secure environment. Our tool aims to
            mitigate risks and improve incident response by leveraging cutting-edge technologies and data-driven
            insights.
        </p>
        <p>
            Our team consists of three driven friends from computer science backgrounds.
            Together, we bring a unique set of skills and experiences to tackle
            the challenges faced in the monitoring and tracking domain.
        </p>

        <h2>Meet Our Team</h2>
        <div class="team-members">
            <div class="team-member">
                <img src={satyaki} alt="Team Member 1"/>
                <h3>Satyaki Mukhopadhyay</h3>
                <p>Role</p>
            </div>
            <div class="team-member">
                <img src={pushpak} alt="Team Member 2"/>
                <h3>Pushpak Pallob</h3>
                <p>Role</p>
            </div>
            <div class="team-member">
                <figure><img src={sohom} alt="Team Member 3"/></figure>
                <h3>Soham Das</h3>
                <p>Role</p>
            </div>
        </div>
    </div>

    <footer>
        <p>Contact us: contact@teamnavigates.com | Follow us on Twitter: @TeamNaviGates</p>
    </footer>
    </div>
  )
}

export default About