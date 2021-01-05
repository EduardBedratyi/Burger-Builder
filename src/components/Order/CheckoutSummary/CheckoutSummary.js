import React from 'react';
import { isCore } from 'resolve';
import { Burger } from '../../Burger/Burger';
import { Button } from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Everything is good!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export { CheckoutSummary };
