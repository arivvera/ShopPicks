'use client'
import React from 'react';
import '../../globals.css';
import './OpinionBox.css';
import OpinionBoxInfo from "@/app/components/OpinionBoxInfo/OpinionBoxInfo";
import { timeAgo } from "@/common/utils/handleDate";
import { sampleReviews } from "@/app/components/OpinionBox/sampleReviews";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const OpinionBox: React.FC = () => {
    interface Reviewer {
        name: string;
        date: string;
        review: string;
        url: string;
    }

    // Function to make groups of 3
    const groupItems = (items: Reviewer[], groupSize: number) => {
        const groups: Reviewer[][] = [];
        for (let i = 0; i < items.length; i += groupSize) {
            groups.push(items.slice(i, i + groupSize));
        }
        return groups;
    };

    const groupedReviews = groupItems(sampleReviews, 3);

    return (
        <div className="section-opinions">
            <h1 className="section-opinions-title">Discover what people are saying about us</h1>
            <div className="opinion-boxes">
                <Carousel
                    showThumbs={false}
                    autoPlay={false}
                    emulateTouch={true}
                    stopOnHover={true}
                    infiniteLoop={true}
                    interval={3000}
                >
                    {groupedReviews.map((group, index) => (
                        <div key={index} className={"group-triple-reviews"}>
                            {group.map((data) => (
                                <OpinionBoxInfo
                                    key={data.name} // Use a unique key for each item
                                    name={data.name}
                                    date={timeAgo(data.date)}
                                    url={data.url}
                                    review={data.review}
                                />
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default OpinionBox;
