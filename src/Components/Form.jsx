import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
