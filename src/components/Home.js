import React from 'react'
import Vody from '../img/ciroc.jpeg';

function Home(props) {
    return (
        <div>
            <h1>My name is {props.name} and I'm from {props.city}</h1>
            <h1>The year is {props.year}</h1>
            <img src={Vody} alt="Ciroc" />
        </div>
    )
}

export default Home;