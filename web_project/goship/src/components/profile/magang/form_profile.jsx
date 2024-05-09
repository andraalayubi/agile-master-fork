import React, { useEffect, useState } from 'react'
import Buttonreset from './reset'
import Buttonsave from './save'
import axios from 'axios'
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const Formprofile = (user) => {
    const [fullName, setFullName] = useState('');
    const [nrp, setNrp] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [address, setAddress] = useState('');
    const [studyYear, setStudyYear] = useState('');
    const [studyProgram, setStudyProgram] = useState('');
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setFullName(user.user.nama_siswa)
        setNrp(user.user.nrp)
        setCity(user.user.kota)
        setProvince(user.user.provinsi)
        setAddress(user.user.alamat)
        setStudyYear(user.user.semester)
        setStudyProgram(user.user.prodi)
    }, [])

    useEffect(() => {
        // if (studyProgram !== '' && studyYear !== '' && city !== '' && province !== '' && studyProgram !== '' && address !== '' && nrp !== '' && fullName !== ''){
        // }
        setLoaded(true)
            
    }, [])

    const [formData, setFormData] = useState({
        fullName: '',
        nrp: '',
        city: '',
        province: '',
        address: '',
        studyYear: '',
        studyProgram: ''
    });

    // Function to handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to reset form fields
    const handleReset = () => {
        setFormData({
            fullName: '',
            nrp: '',
            city: '',
            province: '',
            address: '',
            studyYear: '',
            studyProgram: ''
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const credential = ''
        try {
            const response = await axios.post('http://localhost:5000/auth/login', credential);
            Cookies.set('refresh_token', response.data.token, { expires: 10 / (24 * 60) })

            if (response.data.user.is_first_auth === 1) {
                Swal.fire({
                    title: 'Behasil!',
                    text: response.data.message,
                    icon: "success",

                })
            } else {
                Swal.fire({
                    title: 'Berhasil!',
                    text: response.data.message,
                    icon: "success",
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        loaded == false? (<>halo</>):( <>
        <div className=''>
            <div class="flex flex-col w-[620px] max-h-full rounded  overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-black pl-4  ">
                        <span className="text-black">About</span>{" "}
                        <span className="text-orange">Me</span>{" "}
                    </h1>
                </div>
                <div className='pb-10'>
                    <hr class=" h-px w-6/6 mx-4 bg-gray-400 border-0 "></hr>
                </div>
                <form class="w-full" onSubmit={handleSubmit}>
                    <div className='flex flex-col max-h-full py-4 rounded px-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full '>
                        <div class="md:flex flex flex-row md:items-center  mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 text-left" for="inline-full-name">
                                    Nama Lengkap
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="inline-full-name" type="text" ></input>
                            </div>
                        </div>
                        <div class="md:flex flex flex-row  md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 text-left" for="inline-full-name">
                                    NRP
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <div name="nrp" class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="inline-full-name" >{nrp}</div>
                            </div>
                        </div>
                        <div class="md:flex  flex flex-row  md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 text-left" for="inline-full-name">
                                    Kota
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input name="city" value={city} onChange={(e) => setCity(e.target.value)} class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="inline-full-name" type="text" ></input>
                            </div>
                        </div>
                        <div class="md:flex flex flex-row  md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Provinsi
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input name="province" value={province} onChange={(e) => setProvince(e.target.value)} class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="inline-full-name" type="text" ></input>
                            </div>
                        </div>
                        <div class="md:flex flex flex-row  md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Alamat
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input name="address" value={address} onChange={(e) => setAddress(e.target.value)} class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="inline-full-name" type="text" ></input>
                            </div>
                        </div>
                        <div class="md:flex flex flex-row  md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Semester
                                </label>
                            </div>
                            <div class="md:w-2/3 items-start">
                                <div name="studyYear" class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="inline-full-name" type="text" >{studyYear}</div>
                            </div>
                        </div>
                        <div class="md:flex flex flex-row  md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Prodi Kuliah
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <div name="studyProgram" class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="inline-full-name" type="text" >{studyProgram}</div>
                            </div>
                        </div>
                        <div class="md:flex  flex-row md:items-center mb-6">
                            <div className='pr-14'>
                                <Buttonreset handleReset={handleReset} />
                            </div>
                            <Buttonsave />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </>)
    )
}

export default Formprofile