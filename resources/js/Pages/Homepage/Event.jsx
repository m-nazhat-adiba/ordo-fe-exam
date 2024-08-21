import { useState } from "react";
import EventCard from "./_components/EventCard";
import StepCard from "./_components/StepCard";

const Event = () => {
    const [activeStep, setActiveStep] = useState("01");
    const stepData = [
        {
            index: "01",
            detail: "Introducing the beauty of mangroves on a journey to the planting site.",
        },
        {
            index: "02",
            detail: "Working together with local farmers while planting each mangrove",
        },
        {
            index: "03",
            detail: "Exploring the wonders of mangrove ecotourism, an educational adventure.",
        },
        {
            index: "04",
            detail: "Receive a plaque & badge, a mark of honor for every tree you plant.",
        },
        {
            index: "05",
            detail: "Coverage & documentation by news media, share your story of change!",
        },
    ];

    return (
        <div className="event-wrapper">
            <section className="title-wrapper">
                <h1>Event Summary</h1>
                <p>
                    We give you a brief overview of the event to give you a
                    glimpse of what we're doing in the Green Haven Project,
                    download the detailed PDF to see how you can get involved
                </p>
            </section>
            <section className="content-wrapper">
                <EventCard steps={stepData} setActiveStep={setActiveStep} />
                <div className="step-grid">
                    {stepData.map((item, key) => (
                        <div
                            key={key}
                            onClick={() => setActiveStep(item.index)}
                        >
                            <StepCard
                                data={item}
                                focus={activeStep === item.index}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Event;
