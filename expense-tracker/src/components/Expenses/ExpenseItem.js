// import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem({ title, amount, date }) {
    // const [stateTitle, setStateTitle] = useState(title);

    // const onClickHandler = () => {
    //     setStateTitle("Changed");
    // }

	return (
    	<Card className="expense-item">
      		<ExpenseDate date={date} />
    			<div className="expense-item__description">
			        {/* <h2>{stateTitle}</h2> */}
                    <h2>{title}</h2>
    	    		<div className="expense-item__price">${amount}</div>
      			</div>
      		{/* <button onClick={onClickHandler}>Change Title</button> */}
    	</Card>
  	);
}

export default ExpenseItem;
