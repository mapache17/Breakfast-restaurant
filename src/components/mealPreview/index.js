import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const MealPreviw = ({ meal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${meal.idMeal}`);
  };

  return (
    <div className='meal-previw' onClick={handleClick}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
};

export default MealPreviw;
