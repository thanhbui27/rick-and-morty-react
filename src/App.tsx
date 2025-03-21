import React, { useEffect, useState } from "react";
import {
    RickAndMortyStatus,
    getRickAndMortyCharacters,
    RickAndMorty,
    RickAndMortyRequestParam,
    RickAndMortySpecies
} from "./api/rickandmortyApi";
import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";
import Search from "./components/Search/Search";
import Spinner from "./components/Spinner/Spinner";
import Pagination from "./components/Pagination/Pagination";

import "./App.css";

enum ERickAndMortyRequestParam {
    name = "name",
    species = "species",
    status = "status"
}

function App() {
    const [characters, setCharacters] = useState<RickAndMorty[]>([] as RickAndMorty[]);
    const [param, setParam] = useState<RickAndMortyRequestParam>({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        const debounce = setTimeout(() => {
            getRickAndMortyCharacters(param)
                .then((data) => setCharacters(data))
                .catch(() => setCharacters([]));
        }, 500);

        return () => {
            clearTimeout(debounce);
        };
    }, [param]);

    const handleChange = (key: string) => {
        return (value: string) => {
            setParam((pre) => {
                return {
                    ...pre,
                    [key]: value
                };
            });
        };
    };

    const handlePageChange = (page: number) => {
        setParam({ ...param, page });
        setPage(page);
    };

    return (
        <div className="app">
            <header>
                <div className="container header">
                    <h1>Rick and Morty</h1>
                    <div className="header_actions">
                        <Search onChange={handleChange(ERickAndMortyRequestParam.name)} />
                        <Dropdown
                            onChange={handleChange(ERickAndMortyRequestParam.species)}
                            options={Object.values(RickAndMortySpecies)}
                        />
                        <Dropdown
                            onChange={handleChange(ERickAndMortyRequestParam.status)}
                            options={Object.values(RickAndMortyStatus)}
                        />
                    </div>
                </div>
            </header>
            <main>
                <div className="container main">
                    {characters.length ? (
                        <div className="cards">
                            {characters.map((character: RickAndMorty) => (
                                <Card key={character.id} character={character} />
                            ))}
                        </div>
                    ) : (
                        <Spinner show size="2xl" />
                    )}
                </div>
                <Pagination currentPage={page} totalPages={40} onPageChange={handlePageChange} />
            </main>
        </div>
    );
}

export default App;
