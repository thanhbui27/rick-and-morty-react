import React from "react";
import "./Spinner.style.css";

export type SpinnerProps = {
    show: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

const SIZES = {
    xs: "spinner-xs",
    sm: "spinner-sm",
    md: "spinner-md",
    lg: "spinner-lg",
    xl: "spinner-xl",
    "2xl": "spinner-2xl"
};

const Spinner = (props: SpinnerProps) => {
    const { size = "md", show } = props;

    return show ? (
        <div className="spinner-container">
            <svg
                className={`spinner ${SIZES[size]}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
            >
                <circle className="spinner-circle" cx="12" cy="12" r="10" strokeWidth="4"></circle>
                <path
                    className="spinner-path"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        </div>
    ) : null;
};

export default Spinner;
