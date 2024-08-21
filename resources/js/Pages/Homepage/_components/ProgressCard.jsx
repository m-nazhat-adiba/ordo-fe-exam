import BasicButton from "@/Components/button/BasicButton";

const ProgressCard = () => {
    return (
        <div className="progress-wrapper">
            {/* chip */}
            <div className="details">
                <div className="details-wrapper">
                    <img src="/img/tree.png" />
                    <div className="text-wrapper">
                        <p className="current-progress">5690</p>
                        <span>/10000</span>
                    </div>
                </div>
                <div>
                    <BasicButton size="medium">Support Our Mission</BasicButton>
                </div>
            </div>
            {/* progress */}
            <div>
                <div className="progress-bar">
                    <span
                        className="progress-bar-fill"
                        style={{ width: "40%" }}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;
