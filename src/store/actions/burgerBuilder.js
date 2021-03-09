import * as actionTypes from './actionTypes';

const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingridientName: name,
  };
};

const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingridientName: name,
  };
};

export { addIngredient, removeIngredient };
