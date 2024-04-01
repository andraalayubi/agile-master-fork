import React, { useState } from 'react';
import { gojek, shopee, telkomsel, grab, halodoc, lazada, comp, plus, comki } from "../assets";

const CardCompany = () => {
    const [showMore, setShowMore] = useState(false);

    const data = [
        {
            id: 1,
            name: "Gojek",
            image: gojek
        },
        {
            id: 2,
            name: "Shopee",
            image: shopee
        },
        {
            id: 3,
            name: "Company",
            image: comp
        },
        {
            id: 4,
            name: "Telkomsel",
            image: telkomsel
        },
        {
            id: 5,
            name: "Grab",
            image: grab
        },
        {
            id: 6,
            name: "Halodoc",
            image: halodoc
        },
        {
            id: 7,
            name: "Show more",
            image: plus
        },
        {
            id: 8,
            name: "Lazada",
            image: lazada
        },
        {
            id: 9,
            name: "Comki",
            image: comki
        },
        
    ];

    const handleCardClick = (name) => {
        if (name === "Show more") {
            setShowMore(true);
        } else {
            alert(`You clicked on ${name} card`);
            // Ganti dengan aksi yang sesuai saat kartu dipencet
        }
    };

    return (
        <div className="card--container">
          <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
            {data.map((item, index) => (
              <div key={item.id} className="card" style={{ display: index > 6 && !showMore ? 'none' : 'block', width: '100px', height: 'auto' }}>
                <button onClick={() => handleCardClick(item.name)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {item.image && (
                      <img src={item.image} alt={item.name} className="card-image" style={{ width: '100%', height: 'auto', maxWidth: '100%', borderRadius: '8px' }} />
                    )}
                    <div style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '20px', lineHeight: '24px', color: 'black', textAlign: 'center', marginTop: '20px' }}>{item.name}</div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
    );
};

export default CardCompany;
