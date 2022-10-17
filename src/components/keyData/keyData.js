import React from "react";
import style from "./keyDataStyle.module.css";
import ImgCalories from "./Calories.svg";
import ImgProteines from "./Proteines.svg";
import ImgGlucides from "./Glucides.svg";
import ImgLipides from "./Lipides.svg";
import PropTypes from 'prop-types';

export default function KeyData(props) {
    return (
        <div className={style.container}>

            <div className={style.item}>
                <img src={ImgCalories} className={style.ImgCalories} alt="logo" />
                <div className={style.textContainer}>
                <span className={style.itemContainer}>{props.calorieCount} kCal</span>
                    <span className={style.description}>Calories</span>
                </div>
            </div>
            <div className={style.item}>
                <img src={ImgProteines} className={style.ImgProteines} alt="logo" />
                <div className={style.textContainer}>
                    <span className={style.itemContainer}>{props.proteinCount} g</span>
                    <span className={style.description} >Proteines</span>
                </div>
            </div>
            <div className={style.item}>
                <img src={ImgGlucides} className={style.ImgGlucides} alt="logo" />
                <div className={style.textContainer}>
                    <span className={style.itemContainer}>{props.carbohydrateCount} g</span>
                    <span className={style.description} >Glucides</span>
                </div>
            </div>
            <div className={style.item}>
                <img src={ImgLipides} className={style.ImgLipides} alt="logo" />
                <div className={style.textContainer}>
                    <span className={style.itemContainer}>{props.lipidCount} g</span>
                    <span className={style.description} >Lipides</span>
                </div>
            </div>
        </div>
    );
}

KeyData.propTypes = {
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number
};