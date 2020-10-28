import React, { Component } from 'react';
import { Aux } from '../../../hoc/Auxiliary';
import { Button } from '../../UI/Button/Button';

//OrderSummary will rerender during price or ingredients changing
//it make sense when Modal is shown, as it is wrapping element
// to check and control it let`s turn OrderSummary into a Class component

class OrderSummary extends Component {
  //This could be a functional component
  componentWillUpdate() {
   console.log('[OrderSummary] WillUpdate')
  }
  //componentDidUpdate()
  
    render () {
      const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );        
      });
      
      return (
        <Aux>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients: </p>
          <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
          <p>Continue to Checkout ?</p>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled} >CANCEL</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
        </Aux>
      );  
  };
}
export { OrderSummary };
