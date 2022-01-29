// IMPORT STATE
import { Link } from 'react-router-dom';

import './Show.scss'

const Show = (props) => {
    if(!props.foods) {
        return <h1>Loading...</h1>
    } else {
    //SET UP VARIABLES
    const id = props.match.params.id;
    const foods = props.foods;
    console.log(foods);
    const eachFood = foods.find(f => f._id === id);

    
        return (
            <div className="show-box">
                <div className="inner-show-box">
                    <h1>{eachFood.title}</h1>
                    <img src={eachFood.image} alt={eachFood.title} />
                    <h2>{eachFood.description}</h2>
                    <Link to={`/food/edit/${eachFood._id}`}><button>EDIT</button></Link>
                </div>
            </div>
        );
    
}
};

export default Show;