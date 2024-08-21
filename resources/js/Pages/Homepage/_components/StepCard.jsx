import clsx from "clsx";

const StepCard = ({ data, focus = false }) => {
    const styles = clsx(
        { "indicator-normal": focus === false },
        { "indicator-focus": focus === true }
    );
    return (
        <div className="step-wrapper">
            <div className={styles}></div>
            <div className="details">
                <h5>{data.index}</h5>
                <p>{data.detail}</p>
            </div>
        </div>
    );
};

export default StepCard;
