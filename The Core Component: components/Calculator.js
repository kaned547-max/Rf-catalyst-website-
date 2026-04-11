import React, { useState } from 'react';

const HEACalculator = () => {
  const [temp, setTemp] = useState(250); // Exhaust Temp Celsius
  
  // Abstracted RF-Plasma HEA Efficiency Model
  const calcEfficiency = (t) => {
    // Formula represents TRL-4 Lab Data Trend
    const base = 0.45; 
    const rfGain = Math.log10(t / 100) * 0.5;
    return Math.min((base + rfGain) * 100, 98.8).toFixed(2);
  };

  return (
    <div className="p-6 border rounded-lg bg-slate-900 text-white">
      <h3>RF-Catalyst Performance Projector</h3>
      <input 
        type="range" min="150" max="600" 
        value={temp} 
        onChange={(e) => setTemp(e.target.value)} 
      />
      <p>Exhaust Temp: {temp}°C</p>
      <div className="text-2xl font-bold text-green-400">
        Projected Conversion: {calcEfficiency(temp)}%
      </div>
      <button className="mt-4 bg-blue-600 p-2 rounded">Download Full Validation Dataset</button>
    </div>
  );
};

export default HEACalculator;
