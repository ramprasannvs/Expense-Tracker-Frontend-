import React from 'react'

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div className="balance-section">
            <div className="balance-title">Your Balance</div>
            <div className="balance-amount">₹{incomeAmt - expenseAmt}</div>
            <div className="amounts-container">
                <div className="amount-card">
                    <div className="amount-label">Income</div>
                    <div className="income-amount">₹{incomeAmt}</div>
                </div>
                <div className="amount-card">
                    <div className="amount-label">Expense</div>
                    <div className="expense-amount">₹{expenseAmt}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseDetails;