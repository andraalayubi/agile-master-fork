import React from "react";
import image_1 from '../assets/image-1.png'
import image_2 from '../assets/image-2.png'

const StudentCard = ({ post }) => {
  let image = '';
  if (post.jenis_kelamin === 'Laki-laki') {
    image = image_2;
  }else {
    image = image_1;
  }

  return (
    <div className="student-card">
      <div className="max-w-max">
        <div className="photo-card">
          <img src={image} alt="angga" style={{width: '100px', height: '100px'}}/>
        </div>
        <div className="nama-siswa-card">
          <h2 className="nama-siswa-lengkap" style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: '16px'}}>{post.nama}</h2>
          <h3 className="perusahaan-divisi-card" style={{ color: '#605B57', fontSize: '20px', marginTop: '10px'}}>
            {post.perusahaan} - {post.posisi}
          </h3>
        </div>
      </div>
      <div className="card-text" style={{ lineHeight: '28px', overflow: 'hidden', textOverflow: 'ellipsis', wordWrap: 'break-word'}}>{post.deskripsi_magang}</div>
    </div>
  )
}

export default StudentCard