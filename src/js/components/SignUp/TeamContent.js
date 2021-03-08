import React from "react"
import teamData from "../../../data/team.json"
import teamImage from "../../../assets/team.jpg"
import teamTitle from "../../../assets/icons/teamtitle.png"
const TeamContent = () => {
    return (
        <section className="team">
            <div className="team__container">
                <h2 className="team__title">
                    Poznaj nas!
                </h2>
                <img
                    src={teamTitle}
                    alt="team title"
                    className="team__title-image"
                />
                <strong className="team__title">
                    Zespół CryptoKurs
                </strong>
                <p className="team__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eaque eligendi fugit minima nostrum obcaecati odit officia porro possimus, provident quo quos temporibus vel voluptates?</p>

                <div className="team__wrapper">
                    <div className="team__content">
                        {
                            teamData.map((single, key) => {
                                return  (
                                    <div className="team__single" key={key}>
                                        <div className="team__single-image">
                                            <a
                                                href="/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img src={teamImage} alt="team_image" className="team__image"/>
                                            </a>
                                        </div>
                                        <div className="team__single-content">
                                            <h4>{single.name}</h4>
                                            <p>{single.position}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamContent;