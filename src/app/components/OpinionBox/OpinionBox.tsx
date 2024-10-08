
import React from 'react';
import '../../globals.css';
import './OpinionBox.css';
import OpinionBoxInfo from "@/app/components/OpinionBoxInfo/OpinionBoxInfo";
import {timeAgo} from "@/common/utils/handleDate";


const OpinionBox: React.FC = () => {
    const sampleData = [
        {
            name: "John Doe",
            date: "2023-10-26",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Maecenas sed diam eget risus varius blandit sit amet non magna.",
            url:"https://xsgames.co/randomusers/avatar.php?g=male"
        },
        {
            name: "Jane Smith",
            date: "2024-01-25",
            review: "Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.",
            url: "https://xsgames.co/randomusers/avatar.php?g=female"
        },
        {
            name: "Mike Simpson",
            date: "2024-01-25",
            review: "Ac feugiat ante. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. " +
                "Fusce ac turpis quis ligula lacinia aliquet. Mauris lectus. Pellentesque eget nunc. ",
            url:"https://xsgames.co/randomusers/avatar.php?g=male"
        }

    ];

    return (
        <div className="section-opinions">
            <h1 className="section-opinions-title">Discover what people are saying about us</h1>
            <div className="opinion-boxes">
                {sampleData.map((data, index) => (
                    <OpinionBoxInfo
                        key={index}
                        name={data.name}
                        date={timeAgo(data.date)}
                        url={data.url}
                        review={data.review}
                    />
                ))}
            </div>
            <div className={"opinion-section-navbar"}>
                <div className={"opinion-navbar-link"}>.</div>
                <div className={"opinion-navbar-link"}>.</div>
                <div className={"opinion-navbar-link"}>.</div>
                <div className={"opinion-navbar-link"}>.</div>
            </div>
        </div>
    );
};

export default OpinionBox;







