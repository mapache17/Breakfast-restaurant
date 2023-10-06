import React from 'react';
import MealPreview from '../mealPreview';
import './index.css';

const MealPreviwGrid = ({meals}) => {

	return (
		<div className='meal-grid'>
			{meals.map(meal => <MealPreview key={meal.idMeal} meal={meal} />)}
		</div>
	);
};

export default MealPreviwGrid;
