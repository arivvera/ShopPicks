'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ProductsCarousel.css';
import '../../globals.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { sampleProducts } from "@/app/components/ProductsCaroussel/sampleProducts";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export const ProductsCarousel: React.FC = () => {
    interface Product {
        id: number;
        img: string;
        eval: number;
        price: number;
        name: string;
        fav: boolean;
    }
    // Function to make groups of 3
    const groupItems = (items: Product[], groupSize: number) => {
        const groups:Product[][] = [];
        for (let i = 0; i < items.length; i += groupSize) {
            groups.push(items.slice(i, i + groupSize));
        }
        return groups;
    };

    const groupedProducts = groupItems(sampleProducts, 3);

    return (
        <Carousel
            showThumbs={false}
            autoPlay={false}
            emulateTouch={true}
            stopOnHover={true}
            infiniteLoop={true}
        >
            {groupedProducts.map((group, index) => (
                <div  className={"products-carousel-group"}  key={index}>
                    {group.map((product) => (
                        <div className={"products-carousel"}  key={product.id}>
                            <div className="carousel-box">
                                <div className={"inner-box-block"}>
                                    <div className={"products-carousel-img"}>
                                        <Image
                                            src={`/sample/Products/sample-data/${product.img}`}
                                            height={295}
                                            width={302}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className={"products-carousel-data"}>
                                        <div className={"carousel-data-row1"}>
                                            <div className={"products-carousel-stars"}>
                                                {Array.from({ length: product.eval }, (_, starIndex) => (
                                                    <FontAwesomeIcon key={starIndex} icon={faStar} size={"1x"} />
                                                ))}
                                            </div>
                                            <div className={"products-carousel-price"}>$ {product.price}</div>
                                        </div>
                                        <div className={"carousel-data-row2"}>
                                            <div className={"products-carousel-name"}>{product.name}</div>
                                            <div className={"products-carousel-favourite"}>
                                                <div className={product.fav ? "product-favourite-true" : "product-favourite-false"}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-box-button">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </Carousel>
    );
};
