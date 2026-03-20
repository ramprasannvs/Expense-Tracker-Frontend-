import React from 'react';

const ExpenseTable = ({ expenses, deleteExpens }) => {
    if (expenses.length === 0) {
        return (
            <div className="expense-list">
                <h2>Transaction History</h2>
                <p style={{ textAlign: 'center', color: '#999', padding: '20px' }}>No transactions yet</p>
            </div>
        );
    }

    return (
        <div className="expense-list">
            <h2>Transaction History</h2>
            {expenses.map((expense, index) => (
                <div key={index} className="expense-item">
                    <div className="expense-description">{expense.text}</div>
                    <div
                        className="expense-amount-display"
                        style={{ color: expense.amount > 0 ? '#27ae60' : '#e74c3c' }}
                    >₹{expense.amount}</div>
                    <button className="delete-button" onClick={() => deleteExpens(expense._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ExpenseTable;
