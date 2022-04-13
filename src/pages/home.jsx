import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Author} from './author';

export function AuthorList({ authors }) {
  var i =1

  return (
    <div className="row">
    <div className="col-8">   
    </div>
    <div className="col-12"> 
    <table className="table">
      <tbody>{  
        authors.map((author) => (
        <tr class="inner-box">
          <td>
          <div >  
                 <img className="images" width="200" height="200" src={`https://bootdey.com/img/Content/avatar/avatar${i=i<8?++i:1}.png` } alt="" />
              </div>
          </td>
            <td>
      <h3>
        { <AuthorItem value={author} />}
      </h3>
    </td>
    </tr>
    ))}
    </tbody>
    
    </table>
    </div>
    </div>

  );
}

export function AuthorItem({ value }) {

  return (
    < >
      <li >
        <Link to={ `/authors/${value.id}` }
          state={{
            value,
          }}
          style={{ textDecoration: 'none' }} >{value.name}</Link>
      </li>
    </>
  );
}

export function Home() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setAuthors(json));
  }, []);
 
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-primary navbar-primary sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://cdn-icons-png.flaticon.com/512/7260/7260034.png" alt="Avatar Logo" style={{width:'80px'}} class="rounded-pill"/> 
        </a>
      </div>
    </nav>
      <AuthorList
        authors={authors}
      />
    </>
  );
}
