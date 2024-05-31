
import React from 'react';
import styled from 'styled-components';


const SearchBarContainer = styled.div`
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const SearchBar: React.FC = () => {
    return (
        <SearchBarContainer>
            <Input type="text" placeholder="Search for events..." />

        </SearchBarContainer>
);
};

export default SearchBar;
