import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs"));

    if (favs && favs.length > 0) {
      favs.push(props.item);
      localStorage.setItem("favs", JSON.stringify(favs));
    } else {
      localStorage.setItem("favs", JSON.stringify([props.item]));
    }
  };

  return (
    <Link to={`/detail/${props.item.id}`}>
      <div className="card">
        <img className="img" src="./images/doctor.jpg" alt="Doctor" />
        <p>Nombre: {props.item.name}</p>
        <button onClick={addFav} className="favButton">
          {" "}
          Favoritos
        </button>
      </div>
    </Link>
  );
};

export default Card;
