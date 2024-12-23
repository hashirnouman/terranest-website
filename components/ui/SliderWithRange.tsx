import React, { useState } from "react";

interface ISliderWithRange {
  min: number;
  max: number;
  step: number;
  title: string;
  showPercentage: boolean;
  label: string;
}
const SliderWithRange = ({
  max,
  min,
  showPercentage = false,
  step,
  title,
  label,
}: ISliderWithRange) => {
  // Define the min and max in AED
  // const min = 200_000;
  // const max = 35_000_000;

  // Define the step in AED
  // const step = 100_000;

  // Function to normalize a value (map AED range to slider range)
  const normalize = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  // Function to denormalize a value (map slider range back to AED range)
  const denormalize = (value: number) => {
    return Math.round((value / 100) * (max - min) + min);
  };

  // Calculate the normalized step
  const normalizedStep = (step / (max - min)) * 100;

  // State for the slider value (normalized)
  const [sliderValue, setSliderValue] = useState(normalize(min));

  // Handle slider change
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div className="w-full font-sans">
      <p className=" font-bold text-[32px]">{title} </p>
      <div className="w-full flex justify-between">
        <p className=" font-medium text-[28px]">
          {denormalize(sliderValue).toLocaleString()}
        </p>
        {showPercentage && (
          <p className=" font-medium text-[28px]">
            {((denormalize(sliderValue) / max) * 100).toFixed(1)}%
          </p>
        )}
      </div>
      <input
        id="slider"
        type="range"
        min={0}
        max={100}
        step={normalizedStep}
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full h-full"
      />
      <div className="w-full flex justify-between font-medium text-[18px]">
        <span>
          {min.toLocaleString()} {label}
        </span>
        <span>
          {max.toLocaleString()} {label}
        </span>
      </div>
    </div>
  );
};

export default SliderWithRange;
