import React from "react"; // Menambahkan impor React
import styles from "../style";
import "../DetailMahasiswa.css";
import { profile } from "../assets";
import { Navbar, Footer } from "../components";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faGraduationCap, faBuilding, faCalendarAlt, faMapMarkerAlt, faStar, faBook, faTrophy } from '@fortawesome/free-solid-svg-icons';

const profileData = {
  student_name: "Anantasya Aghni",
  phoneNumber: "081336730560",
  email: "anantasya12@gmail.com",
  department: "D3 Teknik Informatika",
  internship: "PT. GOJEK",
  internship_location:
    "Jl. Ngagel No.75 No.77a-b, Ngagel, Wonokromo, Surabaya, East Java 60246",
  divisions: "UI UX",
  internship_duration: "6 bulan",
  privilege: "mendapatkan hikmah",
  title_of_internship_report: "apa hayo",
  history_date: "20 April 2024",
};

const DetailMahasiswa = () => {
  return (
    <>
      <div className="w-full bg-orange-gradient-navbar">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-bg">
          <h1 className="profile-name">{profileData.student_name}</h1>
        </div>
        <img src={profile} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <p>
            <i className="fas fa-phone"></i> Number Phone:{" "}
            <span style={{ color: "#605B57" }}>
            {profileData.phoneNumber}
            </span>
            
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email: {""} 
            <span style={{ color: "#605B57" }}>{profileData.email}</span>
          </p>
          <p>
            <i className="fas fa-graduation-cap"></i> Prodi:{" "}
            <span style={{ color: "#605B57" }}>{profileData.department}</span>
          </p>
        </div>
      </div>

      {/* Internship Information */}
      <div className="internship-info">
        <div className="internship-info-detail">
          <h2>
            Information about my{" "}
            <span style={{ color: "#F77D00" }}>internship activities</span>
          </h2>
          <div className="info-row">
            <div className="info">
              <i className="fas fa-building"></i>
              <div className="details">
                <h3>Tempat Magang</h3>
                <p>{profileData.internship}</p>
              </div>
            </div>
            <div className="info">
              <i className="fas fa-calendar-alt"></i>
              <div className="details">
                <h3>Durasi Magang</h3>
                <p>{profileData.internship_duration}</p>
              </div>
            </div>
          </div>
          <div className="info-row-special">
            <div className="info">
              <i className="fas fa-map-marker-alt"></i>
              <div className="details">
                <h3>Lokasi Magang</h3>
                <p>{profileData.internship_location}</p>
              </div>
            </div>
            <div className="info">
              <i className="fas fa-star"></i>
              <div className="details">
                <h3>Privilage</h3>
                <p>{profileData.privilege}</p>
              </div>
            </div>
          </div>
          <div className="info-row">
            <div className="info">
              <i className="fas fa-book"></i>
              <div className="details">
                <h3>Devisi Magang</h3>
                <p>{profileData.divisions}</p>
              </div>
            </div>
            <div className="info">
              <i className="fas fa-trophy"></i>
              <div className="details">
                <h3>Title of internship report</h3>
                <p>{profileData.title_of_internship_report}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Requirements */}
      <div className="internship-requirements">
        <div className="internship-requirements-detail">
          <h2>
            Internship <span style={{ color: "#F77D00" }}>requirements</span>
          </h2>
          <ul>
            <li>Menguasai skill Javascript, CSS.</li>
            <li>Lebih disukai: vuejs, nuxtjs, reactjs, nextjs.</li>
            <li>Mengikuti standar coding yang baik;</li>
            <li>Menambahkan komentar pada kode untuk memudahkan pemahaman;</li>
            <li>Menulis kode yang mudah diuji.</li>
          </ul>
        </div>
      </div>

      {/* Profile Footer */}
      <div className="profile-footer">
        <div className="profile-footer-detail">
          <h2>My History</h2>
          <div className="history-date">
            <span>{profileData.history_date}</span>
          </div>
          <p>
            Selama magang, saya terlibat dalam proyek-proyek menarik yang
            menggabungkan kecerdasan buatan dengan kebutuhan pelanggan. Satu
            pengalaman yang tak terlupakan adalah ketika saya terlibat dalam
            pengembangan fitur baru untuk memudahkan pengguna dalam memesan
            layanan…
          </p>
          
        </div>
      </div>

      <div className={`bg-white ${styles.flexCenter} pt-80 `}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DetailMahasiswa;
