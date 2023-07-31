import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import SideBar from '../common/Sidebar';
import { Link } from 'react-router-dom';

function Home() {

    let list=[{name:"",username:"",email:"",website:""}];
    const[data,setData] = useState([]);
    const [key,setKey] = useState("");

    //checks if search string is contained in sring and returnd boolean
    function filter(key, string){
        return String(string).toLowerCase().includes(String(key).toLowerCase())
    }

    if (!key) list = data;

    if (key){
        for (let i =0; i < data.length; i++){
            const bool = filter(key,data[i].name)||filter(key,data[i].username)||
            filter(key,data[i].email)||filter(key,data[i].website);
            if (i === 0) list = [];
            if (bool){
                list.push(data[i])
            }
        }
        if (list === []) list = [{name:"",username:"",email:"",website:""}];
    }

    useEffect(()=>{
        retrieve();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

    async function retrieve(){

        let result= await fetch("https://jsonplaceholder.typicode.com/users");
        result = await result.json();
        console.log(result);
        setData(result);
    }    
    

    return (
        <>
        <SideBar/>

        <div className="main--content">
            <nav className ="navbar navbar-top">
                <img className='topnav--logo' src='../../public/logo192.png' alt="nav logo"></img>
            </nav>
            <nav className ="navbar navbar-bottom bg-light justify-content-between">
                <Link to="#" className ="navbar-brand">Users</Link>
                <Link to="#" className ="navbar-brand">Campaign</Link>
                <Link to="#" className ="navbar-brand">Tables</Link>
                <Link to="#" className ="navbar-brand">Lists</Link>
                <button className='btn navbar-brand'><i className="bi bi-download"></i>Download</button>
                <form className ="form-inline">
                    <input type="search" className="form-control mr-sm-2" onChange={(e)=>setKey(e.target.value)} 
                    aria-label="Search" placeholder="search"></input>
                </form>
            </nav>
            <br/>
        <div className="table--container">
            <Table className="mb ">
            <thead className=''>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
                {
                    list !== undefined ?
                    list.map((data)=>
                    <tr>
                        <td className=''><h4>{data.name}</h4></td>
                        <td className=''><h4>{data.username}</h4></td>
                        <td className=''><h4>{data.email}</h4></td>
                        <td className=''><h4>{data.website}</h4></td>
                    </tr>    
                    ):<></>
                }
            </tbody>            
        </Table>
        </div>
        </div>
        </>
    )
}

export default Home;