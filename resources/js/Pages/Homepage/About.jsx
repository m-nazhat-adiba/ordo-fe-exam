const About = () => {
    return (
        <div className="about-wrapper">
            <section className="title-wrapper">
                <div className="logo-wrapper">
                    <div>
                        <img src="img/jci.png" />
                    </div>
                    <div>
                        <img src="img/gh.png" />
                    </div>
                </div>
                <h1>About Green Haven Project</h1>
                <p>
                    The Green Haven Project - Mangrove aims to restore coastal
                    ecosystems and raise awareness by planting mangroves and
                    educating participants about the importance of these areas.
                    This six-hour event will involve JCI members, local farmers,
                    and students, focusing on combating beach erosion and
                    promoting ESG values.
                </p>
            </section>

            <section className="figure-wrapper">
                <div>
                    <figure>
                        <img src="img/step-1.jpeg" />
                    </figure>
                    <figure>
                        <img src="img/step-2.png" />
                    </figure>
                    <div className="arrow">
                        <div className="img-container">
                            <img src="img/arrow.png" />
                        </div>
                        <p>TRANSFORMATION</p>
                    </div>
                </div>
                <div>
                    <p>Before mangroves were planted</p>
                    <p>After mangroves were planted</p>
                </div>
            </section>
        </div>
    );
};

export default About;
