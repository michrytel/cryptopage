import React from "react";
import CourseIntro from "../../../assets/coursesintro.png"

const CourseInfo = () => {
    return (
        <section className="course__info-container">
                <div className="course__info-chart">
                        <img src={CourseIntro} alt="service images"/>
                </div>
                <div className="course__info-content">
                    <h3>Jak wyglądają nasze szkolenia?</h3>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error voluptatem
                        accusantium doloremque laudantium, totam aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae
                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error voluptatem
                        accusantium doloremque laudantium, totam aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae
                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur. There are many variations passages
                        Lorem Ipsum available, but the majority have suffered alteration
                        in some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                    </p>
                </div>
        </section>
    );
}

export default CourseInfo
