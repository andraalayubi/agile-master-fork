import React from "react";

const StudentCard = ({ post }) => {
  return (
    <div className="student-card">
      <div className="max-w-max">
        <div className="photo-card">
          <img src={post.logo} alt="angga" />
        </div>
        <div className="nama-siswa-card">
          <h2 className="nama-siswa-lengkap" style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',}}>{post.nama}</h2>
          <h3 className="perusahaan-divisi-card">
            {post.perusahaan} - {post.posisi}
          </h3>
        </div>
      </div>
      <div className="card-text">{post.deskripsi_magang}</div>
    </div>
  )
}

export default StudentCard