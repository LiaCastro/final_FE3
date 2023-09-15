import React, { useEffect, useState } from "react";
import Card from "../Components/Card";



const Favs = () => {
  const [favs,setFavs] = useState([])
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs'))
    setFavs(favs)
  }, [])
    
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="container">
            <div className="row">
            {favs.map((user) => (
                <div key={user.id}>
                <Card item={user} />
                </div>
            ))}
            </div>
        </div>
    </>
  );
};

export default Favs;
