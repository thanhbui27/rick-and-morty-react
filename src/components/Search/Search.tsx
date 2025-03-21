import React from "react";
import { ReactComponent as IconSearch } from "../../assets/iconSearch.svg";
import "./Search.style.css";

type SearchProps = {
    onChange: (value: string) => void;
};

const Search = ({ onChange }: SearchProps) => {
    return (
        <div className="search">
            <div className="search_container">
                <IconSearch />
                <input type="text" onChange={(e) => onChange(e.target.value)} placeholder="Search by Name" />
            </div>
        </div>
    );
};

export default Search;
