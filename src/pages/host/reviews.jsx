import React from "react";
import "./styling/reviews.css"
import imageURL from "../../../public/reviews.png"

export default function Reviews(){
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 4,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]

    const reviewElements = reviewsData.map((item,index) => {
        return (
            <div className="review-item" key={index}>
                <div className="star">★★★★★</div>
                <div>
                    <div className="reviewer-name">{item.name} <span>{item.date}</span></div>
                    <div className="reviewer-comment">{item.text}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="reviews">
            <div className="reviews-txt-cn">
                <h1>Your reviews</h1>
                <div>last <u>30 days</u></div>
            </div>
            <div>
                <img src={imageURL} className="reviews-graph"></img>
            </div>
            <h2>Reviews ({reviewsData.length})</h2>
            <div>
                {reviewElements}
            </div>
        </div>   
    )
}