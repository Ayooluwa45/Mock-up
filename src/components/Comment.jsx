import {useEffect, useState} from "react";

import { Link } from "react-router-dom";
function Comment({user}) {

const [users, setUsers] = useState([])

useEffect(()=>{
fetchData()

},[])

const fetchData = async()=>{

  const response= await fetch('https://jsonplaceholder.typicode.com/users')
  const data= await response.json()
  setUsers(data)
  
/*  
     await fetch('https://jsonplaceholder.typicode.com/users ')
.then((res)=> res.json())
.then((data)=> setUsers(data))
   .catch((err)=>{
     console.log(err)
   })*/
  }
  console.log(users)
  
 




  return (
    <>
      <div className="commentBackground">
        <div className="comments">Comments</div>
        <div className="createComment">
          <Link to="/create-comment">Create Comment</Link>
        </div>
       {/*  <div className="itemContainer">
        <article>
          <div className="nav">
            <h3>name</h3>
            <h3>emma@gmail</h3>
          </div>
          <div className="comments">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              saepe fugiat minus sint. Non ullam totam placeat quis? Voluptate
              cupiditate laborum non provident rem possimus aliquam perferendis,
              facere ipsa doloremque!
            </p>
          </div>
        </article>
        </div> */}
         <div className="commentContainer">
          <div className="nav">
            <h3>name</h3>
            <h3>emma@gmail</h3>
          </div>
          <div className="comments">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              saepe fugiat minus sint. Non ullam totam placeat quis? Voluptate
              cupiditate laborum non provident rem possimus aliquam perferendis,
              facere ipsa doloremque!
            </p>
          </div>
           
        </div>
        
      </div>
    </>
  );
}

export default Comment;
