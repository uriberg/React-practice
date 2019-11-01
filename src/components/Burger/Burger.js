import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngerdient/BurgerIngredient";
import PropTypes from 'prop-types';

const burger = (props) => {
        let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    console.log(Array(props.ingredients[igKey]));
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
            }).reduce((arr, el) => {
                console.log(arr);
                return arr.concat(el)
            }, []);
        console.log(transformedIngredients);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients</p>
        }
        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        );
};

burger.propTypes = {
    ingredients: PropTypes.object
}

export default burger;
