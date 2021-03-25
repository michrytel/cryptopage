import React from "react";
import Swiper from "react-id-swiper";
import Data from "../../../data/BrandSwiperData";
const BrandSwiper = () => {
    const params = {
        loop: true,
        grabCursor: true,
        breakpoints: {
            1024: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            480: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        },
        spaceBetween: 80,
    };
    return (
        <div className="brands__container">
                    <p className="brands__title">Our partners:</p>
            <div className="brands__swiper">
                    <ul className="brands__swiper-list">
                        <Swiper {...params}>
                            {Data.map((single, key) => {
                                return (
                                    <li className="swiper-slide" key={key} data-swiper-autoplay="2000">
                                        <a
                                            href={single.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src={single.image} alt="brand images" />
                                        </a>
                                    </li>
                                );
                            })}
                        </Swiper>
                    </ul>
            </div>
        </div>
    );
};
export default BrandSwiper;
