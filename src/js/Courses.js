import React from 'react';
import CurrencyTicker from "./components/Courses/CurrencyTicker/CurrencyTicker";
import CourseInfo from "./components/Courses/CourseInfo";
import CourseChart from "./components/Courses/CourseChart";

const Courses = () => {
    return (
        <>
            <CourseInfo/>
            <CourseChart/>
            <div className="opening__content">
                <a href="/signup" className="opening__btn">Zapisz się już dziś!</a>
            </div>
            <CurrencyTicker/>
        </>
    )
}

export default Courses