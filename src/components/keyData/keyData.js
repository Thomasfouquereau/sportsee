import React from "react";
import style from "./keyDataStyle.module.css";
import ImgCalories from "./Calories.svg";
import ImgProteines from "./Proteines.svg";
import ImgGlucides from "./Glucides.svg";
import ImgLipides from "./Lipides.svg";


export default function KeyData(props) {
    console.log(props);
    return (
        <div className={style.container}>

            <div className={style.item}>
                <img src={ImgCalories} className={style.ImgCalories} alt="logo" />
                <div className={style.textContainer}>
                <span className={style.itemContainer}>{props.calorieCount} kCal</span>
                    <span>Calories</span>
                </div>
            </div>
            <div className={style.item}>
                <img src={ImgProteines} className={style.ImgProteines} alt="logo" />
                <div className={style.textContainer}>
                    <span className={style.itemContainer}>{props.proteinCount} g</span>
                    <span>Proteines</span>
                </div>
            </div>
            <div className={style.item}>
                <img src={ImgGlucides} className={style.ImgGlucides} alt="logo" />
                <div className={style.textContainer}>
                    <span className={style.itemContainer}>{props.carbohydrateCount} g</span>
                    <span>Glucides</span>
                </div>
            </div>
            <div className={style.item}>
                <img src={ImgLipides} className={style.ImgLipides} alt="logo" />
                <div className={style.textContainer}>
                    <span className={style.itemContainer}>{props.lipidCount} g</span>
                    <span>Lipides</span>
                </div>
            </div>
        </div>
    );
}