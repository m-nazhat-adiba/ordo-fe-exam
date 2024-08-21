import BasicButton from "@/Components/button/BasicButton";
import { Icon } from "@iconify/react";

const CallToAction = () => {
    return (
        <div className="cta-wrapper">
            <section className="title-wrapper">
                <h1>Donate Today and be a Guardian of the Green Belt.</h1>
                <p>
                    Join us in our mission to rejuvenate and protect our
                    shorelines by donating to our mangrove planting project.
                </p>
            </section>
            <section className="figure-wrapper">
                <div className="button-wrapper">
                    <BasicButton>
                        <p>Support Our Mission</p>
                        <div style={{ width: "18px", height: "18px" }}>
                            <Icon
                                style={{ height: "100%", width: "100%" }}
                                icon="material-symbols:chevron-right"
                            />
                        </div>
                    </BasicButton>
                </div>
                <div className="figure-grid">
                    <div>
                        <img src="img/grid/1.png" />
                    </div>
                    <div>
                        <img src="img/grid/2.png" />
                    </div>
                    <div>
                        <img src="img/grid/3.png" />
                    </div>
                    <div>
                        <img src="img/grid/4.png" />
                    </div>
                    <div>
                        <img src="img/grid/5.png" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CallToAction;
