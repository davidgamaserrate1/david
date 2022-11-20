import React from "react";
import './styles.css'
import { Avatar } from "@mui/material";

const Description = () =>{
    return(
    <div className="Description">
        <div id="descLeft">        
            "Meus interesses variam de Matemática a Música, 
            Linguagem de Máquina a Filosofia, de Física a Poesia. 
            Apaixonado pela ideia de criar "coisas", encontrei na computação os meios para dar vazão a minha criatividade em forma de soluções computadorescas".                        
             <div> _ </div>
           <div id="redFont"> Ocupação atual : </div>
            Programador na Grupo Card
        </div>  

        <Avatar 
            id="avatar"
            alt="David G Serrate" 
            src="https://www.github.com/davidgamaserrate1.png" 
            sx={{ width: 300, height: 300 }}
            />
           
        <div id="descRight">        
        <div id="redFont"> Olá !!! </div>  
            Sou David Gama Serrate, desenvolvedor  de Software, entusiasta em Front-End. Especialista em React, com formação em Engenharia de Software.
            Possuo participação em diversos projeto, que se encontram no meu repositório do Github.
            Amo desafios e resolver problema de forma simples e prática.
        </div>
       

    </div>
    )
    
        
}

export default Description