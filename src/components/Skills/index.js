import React from "react";
import './styles.css'
import { Avatar } from "@mui/material";

const skil = {
    "name" : "HTML5",
    "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

    "name" : "JavaScript",
    "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

    "name" : "CSS5",
    "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",     
    
    "name" : "Node.js",
    "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" ,
    "name" : "SQL",
    "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

}

const Skills = () =>{
    return (
        <div className="Container">
        <div className="skils">
            <img className="SkilImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>   
            <img className="SkilImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
            <img className="SkilImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>         
            <img className="SkilImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
            <img className="SkilImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/>
        </div>

        <div id="skillDescription">
            <a>HTML5 </a>
            <a>JavaScript</a>
            <a>CSS</a>
            <a>Node</a>
            <a>Mysql</a>
        </div>
        </div>
    )
}

export default Skills