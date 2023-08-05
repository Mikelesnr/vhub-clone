import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import SideBar from '../common/Sidebar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRefresh, faWifi } from '@fortawesome/free-solid-svg-icons';

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
        <nav className ="navbar navbar-top justify-content-between" style={{textAlign:'right'}}>
            <img className='topnav--logo align-self-left' src='https://lh3.googleusercontent.com/pw/AIL4fc9ctlrTWh0dHuvD0sR4rWykKpOId39rTaU5JlVvurGwOOE8W-e7izR492GWtffidUHilvQLQZMiztwc9Yv714iC6voJ-kg9-BWn6GJluUujSFnLEPiYnteQpGrU1eE6zPqkakbuRIsVOOITRpwXfeRmFySmuXeDwbP5n9-61XmTT8qgiFVdb9Kxfz3j1VHyGCX6lhcICQ5npHPnsjuzbOJR_5XYfAWoZgg5mfO6UG2bgbAyW0nzV5Wggyu53RYOLdhn6uys0N-LGM2O6kCEKsTr9j2h-jECXUWVqlrlzY1XqDHX18GHgPytLgkV-xZ3knOGOh0AokumIIC0mUk3HkJZtYqUtEgVB-u5ybwvYvfzVHvBFfeW-b636j4V5b3YHamjR31WYF8SvC9gJsDntRsr6PGHYjqraT5J1dUT6-hr6MszPZ1AzxSrpnilh8uvMhUnuXZlzG0IqsILaZvhvw30ZkU798JadKxlgHZclf6_TgKJHDBAZusTRI-xUUIPgtTsftzVPUvk_SV2Aq4k4Vumgjr-FR318gBiZ2lQ2D-k8b8J5ur_6S01fJNXHQ50EcN38AsEHnBHyh2Zabge669ghO32nscCmJ97EuU46QF4N0OYHkn4Jl4F9OnsaB028oHYRuHD_EwcwpwiPZw85s7CX2i6p0WN1rliZ3Z3-9VB7I-pIPmXkl2nU7riiujNPrkEB375hNPcJh764Akrzam1sifKQHsswIX6IPZcTf6EQ7TMdi7P3N_g4N8ixH9NKJvdCq5QhrvhWhlQtEvyRq5gukH3OaDq_ZQ6o_2AOPj-ALQXhBUe5Aeku-BTJTJPqbCcz5qxCEV0vIsm9UOaUOCVsyiprp_LodraK0Y06KKgRMO7chNISZn9XMuWOsOkKRAvC7dzuk7gTR8C_FOfbdWhDnOlbCHSB1g99RXWmmUDFpUVWZ9eSKP9RG6KxNctgQTbRZfHrChTVNkBgOZgCWkzp5eub4ppex91VbqQlD82oXmF6d8nfomY2ip8y9aduXhm9cmI0E8O9qz6HSQCmng=w671-h452-no?authuser=0' style={{margin:"10px 20px", width:"80px"}} alt="nav logo"></img>
            <Link to="#home" style={{textDecoration: "none",marginRight:"30px"}}>Michael M</Link>
        </nav>
        <div className="main--content">
            <nav className ="navbar navbar-bottom navbar-expand-lg bg-light justify-content-between">
                <Link to="#" className ="navbar-brand">Users</Link>
                <Link to="#" className ="navbar-brand">Campaign</Link>
                <Link to="#" className ="navbar-brand">Tables</Link>
                <Link to="#" className ="navbar-brand">Lists</Link>
                <Link to="#" className ="navbar-brand"><FontAwesomeIcon icon={faRefresh} style={{fontSize:'24px',color:'black'}} /></Link>
                <button className='btn navbar-brand'><FontAwesomeIcon icon={faDownload} />Download</button>
                <form className ="form-inline">
                    <input type="search" className="form-control mr-sm-2" onChange={(e)=>setKey(e.target.value)} 
                    aria-label="Search" placeholder="search for influencer"></input>
                <a class="" style={{marginLeft:'5px',color:'black'}}  href="#"><FontAwesomeIcon icon={faWifi} style={{marginLeft:'5px',fontSize:'20px',color:'black'}} /></a>
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