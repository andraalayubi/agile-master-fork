import React from "react";
import StudentCard from "./StudentCard";
import { useEffect, useState } from "react";

const StudentList = () => {
  const [data, setData] = useState(null);

  useEffect( () => {
    // Mengambil data dari API
    async function fetchData(){
      await fetch('http://103.127.135.153:5000/api/major-data/')
      .then(response => response.json())
      .then(data => setData(data));
    }
    fetchData()
  }, []);
  
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" , overflow: "hidden"}}>
      {Object.entries(data.posts).map(([key, post]) => (
          <StudentCard post={post} key={key} />
        ))}
    </div>
  )
}

export default StudentList