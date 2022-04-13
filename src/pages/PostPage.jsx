import { useLocation } from "react-router";
import {useState, useEffect} from 'react';

export function CommentList({ comments }) {
   var i = 40
    return (
      <div>
      <table className="table">
        <tbody>
      {comments.map((comment) => (
        

 <tr className="innerbox" style={{ backgroundColor:`lightblue`}} ><td> {<CommentItem value={comment} /> }</td></tr>
        ))}
        </tbody>
      </table>
        
      </div>
    );
  }
  
  export function CommentItem({ value }) {
    return (
      <>
        <li>

        name: {value.name}
        <br/>  
        email: {value.email}
        <br/>  
        <b>body: </b>{value.body}
          
        </li>
      </>
    );
  }
  
export function Post(){
    let data = useLocation();
    const [comments, setComments] = useState([]);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${data.state.value.id}/comments`)
        .then((response) => response.json())
        .then((json) => setComments(json));
    }, [data.state.value.id]);
  
    console.log(comments);
    return (<>
    
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
      <h3 style={{color:'white'}}>{data.state.value.title}</h3></nav>
         <div className="postbody">
         <h2 style={{ backgroundColor:`aqua`}}>{data.state.value.body} </h2>
         </div>
    <h2 style={{ color:`blue`}}>comments:</h2>
    <CommentList
        comments={comments}
        
      />
    </>
    );
    }