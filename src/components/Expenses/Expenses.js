import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredData,setFilteredData] = useState(props.items);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    let data=[];
    props.items.map(item => {
      if(item.date.getFullYear().toString() === selectedYear){
      data.push(item);
    }})
    
    setFilteredData(data);
  };
  
 

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredData.map(item=>
          <ExpenseItem key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
        )}
   
        
      </Card>
    </div>
  );
};

export default Expenses;
