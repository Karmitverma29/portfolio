import React from "react";

function Projects(props){
    const[repos,setRepos]=React.useState([]);
    console.log(repos)
    React.useEffect(()=>{
        setRepos(props.data.items)
          },[])
    return <div  style={{height:"800px",width:"100%",backgroundColor:"#ffffff"}}>

<h1 style={{textAlign:"center"}}>Projects</h1>

<div  className="repos">
    {
        repos.map((elem,id)=>{

         return   <div style={{border:"2px solid #ffb301",borderRadius:"10px",padding:'15px'}} key={id}>
                      <a href={elem.clone_url}>  <h1 style={{cursor:"pointer"}}>{elem.full_name}</h1></a>
                      <h3>Forks: {elem.forks_count}</h3>
                      <h4>{elem.language}</h4>

</div>
        })
    }
</div>
    </div>
}

export default Projects;


export async function getStaticProps(){

    let res=await fetch(`https://api.github.com/search/repositories?q=user:Karmitverma29+fork:true&sort=updated&per_page=10&type=Repositories`);
    let data=await res.json();
    return{
        props:{
  data,
        }
    }
  }