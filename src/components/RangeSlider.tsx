import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
`;

const SliderTrack = styled.div`
  position: absolute;
  top: 18px;
  left: 0;
  width: 100%;
  height: 6px;
  background: #ddd;
  border-radius: 3px;
`;

const SliderRange = styled.div`
  position: absolute;
  top: 18px;
  height: 6px;
  background: #007bff;
  border-radius: 3px;
`;

const Thumb = styled.input.attrs({ type: 'range' })`
  position: absolute;
  top: 0;
  width: 100%;
  height: 36px;
  background: transparent;
  pointer-events: none;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

interface RangeSliderProps {
    min: number;
    max: number;
    step: number;
    values: [number, number];
    onChange: (values: [number, number]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step, values, onChange }) => {
    const [minValue, setMinValue] = useState(values[0]);
    const [maxValue, setMaxValue] = useState(values[1]);

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), maxValue - step);
        setMinValue(value);
        onChange([value, maxValue]);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), minValue + step);
        setMaxValue(value);
        onChange([minValue, value]);
    };

    useEffect(() => {
        setMinValue(values[0]);
        setMaxValue(values[1]);
    }, [values]);

    return (
        <SliderContainer>
            <SliderTrack />
        <SliderRange
            style={{
        left: `${((minValue - min) / (max - min)) * 100}%`,
            width: `${((maxValue - minValue) / (max - min)) * 100}%`,
    }}
    />
    <Thumb
    value={minValue}
    min={min}
    max={max}
    step={step}
    onChange={handleMinChange}
    style={{ zIndex: minValue > max - 100 ? 5 : undefined }}
    />
    <Thumb
    value={maxValue}
    min={min}
    max={max}
    step={step}
    onChange={handleMaxChange}
    style={{ zIndex: maxValue > max - 100 ? 4 : undefined }}
    />
    </SliderContainer>
);
};

export default RangeSlider;
