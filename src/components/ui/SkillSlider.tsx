
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SkillSliderProps {
  name: string;
  percentage: number;
  delay?: number;
  isVisible?: boolean;
}

const SkillSlider: React.FC<SkillSliderProps> = ({
  name,
  percentage,
  delay = 0,
  isVisible = false,
}) => {
  const [width, setWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      
      return () => clearTimeout(timer);
    } else {
      setWidth(0);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-white">{name}</span>
        <span className="text-white/70">{percentage}%</span>
      </div>
      <div className="skill-slider" ref={sliderRef}>
        <div 
          className="skill-slider-fill" 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillSlider;
