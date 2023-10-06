import React, { useState, useEffect } from 'react';
import { SearchMealByName } from '../../services/mealtService'
import MealPreviwGrid from '../mealPreviwGrid'
import SearchIcon from "./searchIcon";
import './index.css';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchMeals = async () => {
      const meals = await SearchMealByName(search);
      setMeals(meals);
    };

    if (search.length > 0) {
      fetchMeals();
    }
  }, [search]);

  return(
    <div className="search-box">
      <SearchIcon />
      <input type="text" placeholder="Busca en este sitio web" value={search} onChange={handleSearch} />
      <MealPreviwGrid meals={meals} />
    </div>
  );
};

export default SearchBox;