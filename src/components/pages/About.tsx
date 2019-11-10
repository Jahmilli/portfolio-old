import React from 'react';
import styles from "./Pages.module.css";
import Title from '../presentational/Title/Title';

type AboutProps = {
    position: string;
    handleSetInactive: Function;
}

const About: React.FunctionComponent<AboutProps> = ({ position, handleSetInactive }) => {
    return (
        <div className={styles.lockup}>
            <Title title="About" position={position} handleSetInactive={handleSetInactive} />
            <h2>Who am I?</h2>
            <p>
                I am a full-time student and software engineer based in Sydney. I have a strong interest in learning all types of skills particularly in 
                all areas of Information Technology.
                <br /><br />
                My biggest interests right now revolve around full-stack development and I really enjoy using React, Typescript as well as Java. I'm also extremely interested 
                in devops. I find concepts drawn from devops such as Continuous Integration and Continuous Deployment (CICD) are fascinating and I have really enjoyed working 
                on building pipelines to enable faster and more 
efficient software development.
                <br /><br />
                Other things I am trying to get more active with include learning the piano and going to the gym. Hopefully at some point i'll begin cooking and learn a new
                language but I can only be so hopeful.
            </p>
            <h2>My Time at the Univeristy of Technology Sydney (UTS)</h2>
            <p>
                I am currently a software engineering student at the University of Technology Sydney and started there in 2016 where I also began learning how to code,
                beginning with HTML, CSS and Java. Through the early stages of university I primarily developed my skills in Java learning a range of software design 
                patterns, principles and algorithms in subjects. Since then I have had the opportunity to build two Android applications (which can be found on my Github).
                <br /><br />
                During my time at university, I have also had the opportunity to help establish the 'Professional Aeronautics & Astronautics Society' (PAAS) as 
                vice-president for 2 years. PAAS is a society which aims to spark conversation and skill development into all matters related to Aerospace. 
                This was something I was strongly passionate about as I believed that students deserved the opportunities to work together, meet other 
                like-minded students and help develop their skills. 
                <br /><br />
                I also supported UTS Programmer's Society as Treasurer and then Secretary where during my time, we ran programming workshops, two hackathons, 
                competitive programming competitions and the occasional meetup. I was really excited about this society as having the opportunity to help other 
                students, particularly those interested in programming is a very rewarding experience. It is something I had often wished I had in my first year
                of univeristy where I first began learning how to code and so I enjoy being able to provide help to people in the same position.
            </p>
            <h2>My First Internship/Development Job</h2>
            <p>
                I began working at MLC in 2018 as part of National Australia Bank's (NAB) Industry Based Learning (IBL) program as a devops engineering intern. 
                Through this, I developed skills in Linux, AWS, Jenkins/Teamcity, Ansible, Terraform and a range of other tools/frameworks/languages. 
                I also learned how to work with a development team understanding basics in enabling more efficient development practices. This also exposed 
                me to working in a production environment, including developing release plans to take my team's applications to production, being "on-call" 
                for production incidents, supporting a disaster recover exercise as well as overall development of applications and services that I took to production. 
            </p>
        </div>
    );
}

export default About;