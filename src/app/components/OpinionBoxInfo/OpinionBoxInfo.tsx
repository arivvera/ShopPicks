import React from "react";
import Image from "next/image";
interface OpinionProps {
    name: string;
    date: string;
    review: string;
    url:string;
}
const OpinionBoxInfo: React.FC<OpinionProps> = ({ name, date, review, url}) => {

    return(
        <div className="opinion-boxes-item">
            <div className="user-info">
                <div className="avatar-container-outer">
                    <div className="avatar-container-middle">
                        <div className="avatar-container-inner">
                            <Image
                                src={`/sample/Users/img/${url}`}
                                width={53}
                                height={50}
                                layout={"responsive"}
                                alt={"User picture"}
                                className={"opinion-boxes-picture"}
                            />
                        </div>
                    </div>

                </div>

                <div className={"opinion-avatar-data"}>
                    <h3>{name}</h3>
                    <div className={"opinion-data-evaluation"}>
                        <div className="stars">★★★★★</div>
                        <p className="opinion-data-date">{date}</p>
                    </div>

                </div>
            </div>
            <p className="opinion-boxes-review">{review}</p>
        </div>
    );

};

export default OpinionBoxInfo;