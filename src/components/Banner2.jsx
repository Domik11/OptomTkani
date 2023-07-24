import React from "react";
import deliver from '../assets/images/deliver.png';

function Banner2() {
    return (
        <div className="banner content__banner-2">
        <img className="banner-image" src={deliver}alt="" />
        <h2 className="banner-title">
            Бесплатная<br /> доставка
        </h2>

        <h5 className="banner-text">
            По городу бишкек<br/> при заказе от трёх рулонов
        </h5>
    </div>
    )
}

export default Banner2;