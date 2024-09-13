
const Card = ({name, username, id}) => {
    const addFav = () => {
        // Aquí la lógica para agregar la Card en el localStorage
    }

    return (
        <div>
            {/* En cada card deberán mostrar en name - username y el id  */}

            {/* No debes olvidar que la Card a su vez servirá como Link hacia la página de detalle */}
            
            {/* Además deberán integrar la lógica para guardar cada Card en el localStorage */}
            <button onClick={addFav} className="favButton">Add fav</button>
        </div>
    )
};

export default Card;