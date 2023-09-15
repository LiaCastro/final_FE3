import React, { useEffect, useState } from 'react';
import Card from '../Card';

const ApiData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((result) => {
        setData(result);
        setLoading(false);
        })
        .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
        setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Cargando datos...</p>;
    }
    if (data) {
        return (
        <div className="container">
            <div className="row">
            {data.map((user) => (
                <div key={user.id}>
                <Card item={user} />
                </div>
            ))}
            </div>
        </div>
        );
    }
}

    

export default ApiData;