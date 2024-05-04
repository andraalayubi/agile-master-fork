import React from 'react'
import { bgprofile } from "../../../assets";
const History = () => {
  return (
    <>
        <div class="flex flex-col w-[320px] h-[300px]">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg rounded overflow-visible shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
        <div class="relative max-w-xl mx-auto">
            <img class="rounded-t-lg" src={bgprofile} alt="" />
            <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div class="absolute inset-0 flex py-4 px-10">
                <div className="border-l-2 border-orange pl-4">
                    <h2 className="text-lg font-semibold text-white">My History</h2>
                </div>
            </div>
        </div>
            <div class="px-5 pt-5">
                <p class="mb-3 font-normal text-gray-600 text-overflow-ellipsis "> Selama magang,halo saya terlibat dalam proyek-proyek menarik yang menggabungkan kecerdasan buatan dengan kebutuhan pelanggan. Satu pengalaman yang tak terlupakan adalah ketika saya terlibat dalam pengembangan fitur baru untuk memudahkan pengguna dalam memesan layanan</p>
                
            </div>
        </div>
        </div>
    </>
  )
}

export default History