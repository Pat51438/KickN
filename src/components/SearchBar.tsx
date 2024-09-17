import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  width: 100%; /* Full width */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */

`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
`;

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearchSubmit: (e: React.FormEvent) => void;
    onSearch: (query: string) => Promise<void>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, handleSearchSubmit, onSearch }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery); // Appelle onSearch avec la requête de recherche
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text" 
                value={searchQuery} 
                onChange={handleInputChange} 
                placeholder="Search..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
