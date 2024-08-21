import BasicButton from "@/Components/button/BasicButton";
import { Icon } from "@iconify/react";

const EventCard = ({ setActiveStep, steps }) => {
    const nextStep = () => {
        setActiveStep((prev) => {
            const currentIndex = steps.findIndex((step) => step.index === prev);
            const nextIndex = (currentIndex + 1) % steps.length;
            return steps[nextIndex].index;
        });
    };

    const previousStep = () => {
        setActiveStep((prev) => {
            const currentIndex = steps.findIndex((step) => step.index === prev);
            const prevIndex = (currentIndex - 1 + steps.length) % steps.length;
            return steps[prevIndex].index;
        });
    };

    return (
        <div className="card-wrapper">
            <div className="card-title">
                <div className="date">
                    <p>26/04/2024</p>
                    <h3>08:00 - 11:00 WIB</h3>
                </div>
                <div className="details">
                    <p className="desc">
                        Join the impactful journey of planting mangroves, where
                        you'll learn, collaborate with locals, earn recognition,
                        and share your story through media coverage
                    </p>
                    <div className="btn-wrapper">
                        <BasicButton size="medium">
                            <div style={{ width: "20px", height: "20px" }}>
                                <Icon
                                    style={{ height: "100%", width: "100%" }}
                                    icon="gala:file-document"
                                />
                            </div>
                            <p>View Event Details</p>
                        </BasicButton>
                    </div>
                </div>
            </div>
            <div className="card-figure">
                <div className="img-container">
                    <img src="img/event-1.png" alt="event" />
                </div>
                <div onClick={previousStep} className="btn-l">
                    <Icon
                        style={{ height: "28px", width: "28px" }}
                        icon="material-symbols:chevron-left"
                    />
                </div>
                <div onClick={nextStep} className="btn-r">
                    <Icon
                        style={{ height: "28px", width: "28px" }}
                        icon="material-symbols:chevron-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventCard;
