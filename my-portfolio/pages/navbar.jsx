import React from "react";
import Link from "next/link";
function Navbar(){
    const[theme,settheme]=React.useState('light');

    const toggletheme=()=>{
        settheme(theme==='light'?'dark':'light');
    }

    return <div >
        
     
         <div className={theme}>
          <Link href="/"><h1  style={{marginRight:"20px",fontSize:"24px"}}>Profile Page</h1></Link> 
          <Link href="/projects">  <h1 style={{marginLeft:"20px",fontSize:"24px"}}>Projects</h1></Link> 
          <button style={{height:"30px",width:"70px",marginLeft:"15px",backGroundColor:"white",borderRadius:"10px"}} onClick={toggletheme}>{theme}</button>
         </div>
        </div>
}

export default Navbar;