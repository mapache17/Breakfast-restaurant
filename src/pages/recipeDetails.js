import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMealById } from '../services/mealtService';

function RecipeDetails() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        FetchMealById(id)
            .then(data => setMeal(data));
    }, [id]);

    return (
        <div>
            {meal && (
                <div>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <p>{meal.strInstructions}</p>
                </div>
            )}
        </div>
    );
}

export default RecipeDetails;