import React from "react";
import Head from "next/head";
function Profile(props){

    // console.log(props.data)
    const[user,setUser]=React.useState({});
    

    React.useEffect(()=>{

        setUser(props.data)
    },[])
    console.log(user)


    return<div style={{height:"800px",width:"100%",backgroundColor:"#ffffff",marginTop:"30px"}}>
     <div className="homeintro" style={{height:"500px",marginTop:"60px",width:"80%",margin:"auto",backgroundColor:"#ffffff"}}>
         <Head>
           <title>Profile Page</title>
         </Head>
     <div style={{display:"flex",alignItems:"center"}} className="intro">
        <div  style={{border:"3px solid #ffb301",margin:"auto",width:"80%",height:"80%",borderRadius:"10px"}}>
        { <img style={{height:"200px",width:"200px",borderRadius:"50%",marginLeft:"30%",marginTop:"15px"}} src= {user.avatar_url} alt="avatar"/>}
       <h1 style={{textAlign:"center"}}>{user.name}</h1>
      <a href="https://github.com/Karmitverma29"> <h2 style={{fontSize:"18px",textAlign:"center"}}>{user.login}</h2></a>
      <p  style={{textAlign:"center",marginTop:'10px'}}>{user.bio}</p>
     <a href={user.blog}><button style={{height:"30px",width:"100px",border:"2px solid #ffb301",backgroundColor:"#ffffff",borderRadius:"10px",cursor:"pointer",marginLeft:"130px",marginTop:"10px",marginRight:"10px"}}>Resume</button></a> 
     <a href="https://github.com/Karmitverma29"><button style={{height:"30px",width:"100px",border:"2px solid #ffb301",backgroundColor:"#ffffff",borderRadius:"10px",cursor:"pointer"}}>Follow</button></a> 
        </div>
       

     </div>
     <div  className="others">
<h1 style={{textAlign:"center",marginTop:"80px"}} >Tech Stack</h1>
<div className="tech">
<div style={{height:"30px",width:"80%",backgroundColor:"#ffb301",borderRadius:"10px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700"}}>HTML</div>
<div style={{height:"30px",width:"80%",backgroundColor:"#ffb301",borderRadius:"10px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700"}}>CSS</div>
<div style={{height:"30px",width:"80%",backgroundColor:"#ffb301",borderRadius:"10px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700"}}>JavaScript</div>
<div style={{height:"30px",width:"80%",backgroundColor:"#ffb301",borderRadius:"10px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700"}}>TypeScript</div>
<div style={{height:"30px",width:"80%",backgroundColor:"#ffb301",borderRadius:"10px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700"}}>React.js</div>
<div style={{height:"30px",width:"80%",backgroundColor:"#ffb301",borderRadius:"10px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700"}}>Redux</div>
<div style={{height:"30px",width:"80%",backgroundColor:"#ffb301",borderRadius:"10px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700"}}>Next.js</div>
<div style={{height:"30px",width:"80%",backgroundColor:"#ffb301",borderRadius:"10px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700"}}>Chakra UI</div>

</div>


     </div>
        
        </div>
        </div>
}

export default Profile;

export async function getStaticProps(){

    let res=await fetch(`https://api.github.com/users/Karmitverma29`);
    let data=await res.json();
    return{
        props:{
data,
        }
    }
}