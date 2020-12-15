import React from 'react';
import { isCore } from 'resolve';
import { Burger } from '../../Burger/Burger';
import { Button } from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Everything is good!</h1>
      <div style={{ width: '300px', heght: '300px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' clicked>
        CANCEL
      </Button>
      <Button btnType='Success' clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export { checkoutSummary };
