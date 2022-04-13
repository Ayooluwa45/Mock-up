import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comment from "./components/Comment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateComment from './components/CreateComment'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  console.log(users);

  const onCreate = async (name, email) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
      method: "POST",
      body: JSON.stringify({ 
        name: name, 
        email: email 
      }),
      headers:{
        "Content-type": 'text/html; charset=UTF-8'
      }
    });
    const data = await response.json();
    setUsers((data)=>[...users,data]);
  };

  const onDelete = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method: "DELETE",
    });
    const data = await response.json();
    setUsers(users.filter((user)=>{
      return user.id !== id
    })
  
  )
  }
 /*  const onCreate = async (name, email) => {
     await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ 
        name: name, 
        email: email 
      }),
      headers:{
        "Content-type": 'text/html; charset=UTF-8'
      }
    })
    .then((res)=>{
      if(res.status !== 201){
        return
      }else{
        return res.json()
      }
    })
    .then((data)=>{
      setUsers((users)=>[...users,data])
    })
    .catch((err)=>{
      console.log(err)
    })
   
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
     method: "DELETE",
   })
   .then((res)=>{
     if(res.status !== 201){
       return
     }else{
     setUsers(users.filter((user)=>{
       return user.id !==id
     }))
    }
  })
   .catch((err)=>{
     console.log(err)
   })
   }
 
 */
  return (
    <div className="">
      
       
        <main>
          <div>
            <CreateComment onCreate={onCreate}/>
            {users.map((user) => (
              <Comment
                id={user.id}
                key={user.id}
                name={user.name}
                email={user.email}
                comment={user.comments}
                onDelete={onDelete}
              />
            ))}
          </div>
        </main>
      
    </div>
  );
}

export default App;
