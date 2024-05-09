import React, { useEffect, useState } from 'react'
import styles from "../style";
import { Navbar, Identitas, Formprofile, Instruction } from "../components/profile/magang"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loading from '../components/loading';
// import {  } from "react-router-dom";

const Profilemaba = (loggedUser) => {
  let refreshToken = Cookies.get('refresh_token')
  const location = useLocation();
  const [user, setUser] = useState('')
  const state = location.state;
  const navigate = useNavigate();
  
  const id = localStorage.getItem('id');
  useEffect(() => {
    // setUser(data);
    if (!refreshToken) {
      localStorage.clear()
      navigate('/');
    } else if (refreshToken) {
      let name = localStorage.getItem('nama')
      setUser(name)
    }
  }, []);
  
  useEffect( () => {
   async function fetchData(){
    try {
      const response = await axios.get('http://103.127.135.153:5000/api/user/' + id);
      setUser(response.data[0]);
      // console.log(user.nama)

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
   }
   fetchData();
  }, [])

  // useEffect(()=>{
  //   if(loggedUser != null){
  //     setUser(loggedUser);
  //   }
  // },[user])

  return (
    <>
      {user == '' ? <><div className='flex justify-center items-center'><Loading type={'spin'} color={"#aaaaaa"}/></div></> : user === null || user === undefined ? <><p>DATA KOSONG</p></>: <><div className=" pb-20">
        <Navbar nama={user} />
      </div><div className="flex flex-row px-20">
          <Identitas user={user} />
          <div className='px-6'>
            <Formprofile user={user} />
          </div>
          <div className='flex flex-col'>

            <Instruction />
          </div>
        </div><div>
          <div className={`${styles.flexCenter} py-16 `}>

          </div>
        </div></>}
    </>
  )
}

export default Profilemaba;