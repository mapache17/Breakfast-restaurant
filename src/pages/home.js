import React, { useEffect, useState } from 'react';
import MealPreviwGrid from '../components/mealPreviwGrid';
import { FetchMealByFirstLetter } from '../services/mealtService';

function Home() {
	const [meals, setMeals] = useState([]);
	

	useEffect(() => {
        FetchMealByFirstLetter()
            .then(data => setMeals(data));
    }, []);

	return (
		<div className='page'>
			<MealPreviwGrid meals={meals}/>
		</div>
	);
}

export default Home;
