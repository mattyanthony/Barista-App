import React, { useState } from "react";
import RecipeChoices from './RecipeChoices';
import drinksJson from "./drinks.json"


const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });

    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
    
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');
    
        getNextDrink();
    };
    
    const onCheckAnswer = () => {
      
    };

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    return (
        <div>
        <h2>Hi, I'd like to order a:</h2>
        <div className="drink-container">
            <h2 className="mini-header">{currentDrink}</h2>
            <button
                type="new-drink-button"
                className="button newdrink"
                onClick={onNewDrink}
            >
                🔄
            </button>
    </div>
    
            <form>
                <h3>Temperature</h3>
                <div className="answer-space">
                  {inputs["temperature"]}
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))}
                  label="temperature"
                  choices={ingredients["temperature"]}
                  checked={inputs["temperature"]}
                />

                <h3>Milk</h3>
                <div className="answer-space">
                  {inputs["milk"]}
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))}
                  label="milk"
                  choices={ingredients["milk"]}
                  checked={inputs["milk"]}
                />

                <h3>Syrup</h3>
                <div className="answer-space">
                  {inputs["syrup"]}
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))}
                  label="syrup"
                  choices={ingredients["syrup"]}
                  checked={inputs["syrup"]}
                />

                <h3>Blended</h3>
                <div className="answer-space">
                  {inputs["blended"]}
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))}
                  label="blended"
                  choices={ingredients["blended"]}
                  checked={inputs["blended"]}
                />

            </form>

            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>

            <button
                type="new-drink-button"
                className="button newdrink"
                onClick={onNewDrink}
            >
                New Drink
            </button>
        </div>
    )
};

export default BaristaForm;
