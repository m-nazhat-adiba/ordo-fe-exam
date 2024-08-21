import clsx from "clsx";

const BasicButton = ({
    children,
    variant = "primary",
    size = "large",
    outline = false,
    disable = false,
}) => {
    const buttonStyles = clsx(
        "basic-button",
        // Variants
        {
            "bb-primary": variant === "primary" && !outline && !disable,
            "bb-primary-outlined": variant === "primary" && outline && !disable,
            "bb-secondary": variant === "secondary" && !outline && !disable,
            "bb-secondary-outlined":
                variant === "secondary" && outline && !disable,
            "bb-tertiary": variant === "tertiary" && !outline && !disable,
            "bb-tertiary-outlined":
                variant === "tertiary" && outline && !disable,
            "bb-disabled": !outline && disable,
            "bb-disabled-outlined": outline && disable,
        },
        // Sizes
        {
            "bb-large": size === "large",
            "bb-medium": size === "medium",
            "bb-small": size === "small",
        }
    );

    return (
        <button className={buttonStyles} disabled={disable}>
            {children}
        </button>
    );
};

export default BasicButton;
