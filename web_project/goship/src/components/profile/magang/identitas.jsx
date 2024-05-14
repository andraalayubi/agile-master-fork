import React from 'react'
import {Profile_lanang, telpon, email, gender} from "../../../assets";
import Buttonlogout from './button_logout';

const Identitas = (user) => {
    console.log(user.user);
  return (
    <>
    <div className='flex flex-col items-center  '>
        <div class="flex flex-col w-60 h-72 items-center  max-w-sm rounded overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className='w-50 m-6 bg-white border rounded-lg shadow'>
                <img className=' object-contain border rounded-lg' src={Profile_lanang} alt="asjndajkdnasjdandjasni" />
            </div>
            <h2 className='font-bold box-fill '>{user.user.nama_siswa}</h2>
        </div>
        <div className='pt-4'>
            <div class="flex flex-row w-60 p-2 max-w-sm rounded  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <a href=""><h1 className='pl-3 text-[14px] text-ellipsis overflow-hidden '>Tentang Saya </h1></a>  
            </div>
        </div>
        <div className='pt-4'>
            <div class="flex flex-row w-60 p-2 max-w-sm rounded  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <a href="#instruction"><h1 className='pl-3 text-[14px] text-ellipsis overflow-hidden '>Pengantar KP</h1></a>  
            </div>
        </div>
        
        <div className='pt-10'>
            <div class=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <Buttonlogout user={user}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Identitas