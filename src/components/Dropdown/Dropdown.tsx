import React from "react";
import "./Dropdown.style.css";

type DropdownProps = {
    onChange: (value: string) => void;
    options: string[];
};

const Dropdown = ({ onChange, options }: DropdownProps) => {
    return (
        <div className="dropdown">
            <select onChange={(e) => onChange(e.target.value as string)}>
                <option value="">All</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
