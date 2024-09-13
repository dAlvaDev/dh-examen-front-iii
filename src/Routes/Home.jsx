// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './components/Card';

// este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    return (
        <main className="">
            <h1>Home</h1>
            <div className='card-grid'>
                {/* Aquí deberías renderizar las cards */}
            </div>
        </main>
    )
}

export default Home;