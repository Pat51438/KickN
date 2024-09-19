import React from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => Promise<void>; // Add this line
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(); // Replace handleSearchSubmit with onSearch
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
