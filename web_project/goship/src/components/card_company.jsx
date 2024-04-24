import React, { useState } from 'react';
import { telkomsel, aksamedia, plus, mitra, teknologi, gamelab, lenindustri, otakanan, panasonic, pjb, ptedi, social } from "../assets";

const CardCompany = () => {
    const [showMore, setShowMore] = useState(false);

    const data = [
        {
            id: 1,
            name: "Mitra Informatika",
            image: mitra 
        },
        {
            id: 2,
            name: "PT Divistant Teknologi",
            image: teknologi
        },
        {
            id: 3,
            name: "Gamelab Indonesia",
            image: gamelab
        },
        {
            id: 4,
            name: "PT Len Industri",
            image: lenindustri
        },
        {
            id: 5,
            name: "PT Otak Kanan",
            image: otakanan
        },
        {
            id: 6,
            name: "PT Panasonic",
            image: panasonic
        },
        {
            id: 7,
            name: "PT PJB",
            image: pjb
        },
        {
            id: 8,
            name: "PT Aksamedia",
            image: aksamedia
        },
        {
            id: 9,
            name: "Show more",
            image: plus
        },
        {
            id: 10,
            name: "PT Telkom",
            image: telkomsel
        },
        {
            id: 11,
            name: "PT EDII",
            image: ptedi
        },
        {
            id: 12,
            name: "PT Sosial",
            image: social
        }
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
            <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(9, minmax(100px, 1fr))', gap: '10px', gridRowGap: '100px' }}>
                {data.slice(0, showMore ? data.length : 9).map((item) => (
                    <div key={item.id} className="card" style={{ width: '100px', height: '100px' }}>
                        <button onClick={() => handleCardClick(item.name)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="card-image" style={{ width: '100px', height: '100px', maxWidth: '100%', borderColor: 'whitesmoke', borderWidth: '2px', borderRadius: '8px' }}>
                            {item.image && (
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                            )}
                    </div>
                                <div style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '17px', lineHeight: '24px', color: 'black', textAlign: 'center', marginTop: '20px' }}>{item.name}</div>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardCompany;
