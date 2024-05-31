import React, { useState } from 'react';
import styled from 'styled-components';
import RangeSlider from '../components/RangeSlider'; // Ensure the path is correct

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterLabel = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`;

const Button = styled.button`
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
`;

const sportsCategories = {
    team: ['Hockey', 'Soccer', 'Football', 'Basketball', 'Baseball'],
    combat: ['Boxing', 'Karate', 'Judo', 'Taekwondo', 'Wrestling'],
    racket: ['Tennis', 'Ping Pong', 'Badminton', 'Squash'],
    social: ['Bowling', 'Pool', 'Darts', 'Bocce', 'Cornhole'],
    shooting: ['Paintball', 'Laser Tag', 'Airsoft', 'Archery'],
};

const Filters = () => {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof sportsCategories | ''>('');
    const [distanceRange, setDistanceRange] = useState<[number, number]>([10, 100]);
    const [timeframeRange, setTimeframeRange] = useState<[number, number]>([1, 30]);
    const [filteredOptions, setFilteredOptions] = useState<string | null>(null);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value as keyof typeof sportsCategories);
    };

    const handleDistanceChange = (values: [number, number]) => {
        setDistanceRange(values);
    };

    const handleTimeframeChange = (values: [number, number]) => {
        setTimeframeRange(values);
    };

    const handleShowOptions = () => {
        setFilteredOptions(`You have selected:
    - Sport Category: ${selectedCategory}
    - Distance: between ${distanceRange[0]} km and ${distanceRange[1]} km
    - Timeframe: between ${timeframeRange[0]} and ${timeframeRange[1]} days`);
    };

    return (
        <FiltersContainer>
            <FilterSection>
                <FilterLabel>What kind of sport?</FilterLabel>
        <select value={selectedCategory} onChange={handleCategoryChange}>
    <option value="">Select a category</option>
    <option value="team">Team Sports</option>
    <option value="combat">Combat Sports</option>
    <option value="racket">Racket Sports</option>
    <option value="social">Social Sports</option>
    <option value="shooting">Shooting Sports</option>
    </select>
    </FilterSection>

    {selectedCategory && (
        <FilterSection>
            <FilterLabel>Select a sport</FilterLabel>
    <select>
    {sportsCategories[selectedCategory].map((sport) => (
            <option key={sport} value={sport}>{sport}</option>
    ))}
        </select>
        </FilterSection>
    )}

    <FilterSection>
        <FilterLabel>How far away?</FilterLabel>
        <RangeSlider
        min={1}
    max={1000}
    step={1}
    values={distanceRange}
    onChange={handleDistanceChange}
    />
    <div>
    You are willing to travel between {distanceRange[0]} km to {distanceRange[1]} km
    </div>
    </FilterSection>

    <FilterSection>
    <FilterLabel>What timeframe do you want to play?</FilterLabel>
        <RangeSlider
        min={1}
    max={30}
    step={1}
    values={timeframeRange}
    onChange={handleTimeframeChange}
    />
    <div>
    You want to play in the next {timeframeRange[0]} to {timeframeRange[1]} days
    </div>
    </FilterSection>

    <Button onClick={handleShowOptions}>Show My Options</Button>

    {filteredOptions && (
        <div style={{ marginTop: '20px', background: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
        <p>{filteredOptions}</p>
        </div>
    )}
    </FiltersContainer>
);
};

export default Filters;
