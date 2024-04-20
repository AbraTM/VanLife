import React from "react";
import "./styling/income.css"
import imageURL from "../../../public/income.png"

export default function Income(){
    const transactions = [
        {
            amount: 720,
            date: "1/12/22"
        },
        {
            amount: 560,
            date: "10/11/22"
        },
        {
            amount: 980,
            date: "23/11/22"
        }
    ]

    const transactionElements = transactions.map(data => {
        return (
            <div className="transaction-list-item">
                <div className="transaction-list-item-amount">${data.amount}</div>
                <div className="transaction-list-item-date">{data.date}</div>
            </div>
        )
    })

    return (
        <div className="income">
            <div className="income-txt-cn">
                <h1>Income</h1>
                <div className="income-txt">Last <u>30 days</u></div>
                <div className="income-amount">$2,260</div>
            </div>
            <div className="income-graph-cn">
                <img src={imageURL} className="income-graph"></img>
            </div>
            <div className="transaction-list-header">
                <h2>Your transactions ({transactions.length})</h2>
                <div className="income-txt">Last <u>30 days</u></div>
            </div>
            <div className="transaction-list-cn">
                {transactionElements}   
            </div>
        </div>
    )
}