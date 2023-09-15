import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + props.id)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
        setLoading(false);
      });
  }, []);
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs"));

    if (favs && favs.length > 0) {
      favs.push(data);
      localStorage.setItem("favs", JSON.stringify(favs));
    } else {
      localStorage.setItem("favs", JSON.stringify([data]));
    }
  };
  if (loading) {
    return <p>Cargando datos...</p>;
  } else {
    return (
      <div className="card">
        <h1>Detail Dentist id </h1>
        <p>ID: {data.id}</p>
        <p>Nombre: {data.name}</p>
        <p>Usuario: {data.username}</p>
        <p>Email: {data.email}</p>
        <p>Telefono: {data.phone}</p>
        <p>Sitio web: {data.website}</p>
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </div>
    );
  }
};

export default Card;
