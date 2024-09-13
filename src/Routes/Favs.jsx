// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../Components/Card";

const Favs = () => {

    return (
        <>
            <h1>Dentist favs</h1>
            <div className="card-drid">
                {/* este componente debe consumir los destacados del localStorage */}
                {/* Deberan renderizar una Card por cada uno de ellos */}
            </div>
        </>
    )
}

export default Favs;