import React from 'react';
import './Salary.css'

const Salary = (props) => {
   
    const salary = props.salary;
    let totalSalary = 0;
  totalSalary =salary.reduce((total, amount) => total + amount.salary, 0);

    
    return (
        <div>
           <h3> Players Salary Budget / Amount : {totalSalary} Tk.</h3>
        </div>
    );
};

export default Salary;