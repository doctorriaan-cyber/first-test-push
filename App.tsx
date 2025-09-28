
import React, { useState } from 'react';

const App: React.FC = () => {
  // State to track the button's color. `true` for green, `false` for red.
  const [isGreen, setIsGreen] = useState<boolean>(true);

  // Handler to toggle the color state when the button is clicked.
  const handleToggleClick = () => {
    setIsGreen(prevState => !prevState);
  };

  // Base classes for the button for consistent styling.
  const buttonBaseClasses = 'text-white font-bold py-6 px-12 rounded-full text-3xl shadow-2xl transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-8 active:scale-95';

  // Dynamic classes that change based on the `isGreen` state.
  const buttonColorClasses = isGreen
    ? 'bg-green-500 hover:bg-green-600 focus:ring-green-300'
    : 'bg-red-500 hover:bg-red-600 focus:ring-red-300';

  return (
    // A full-screen container using flexbox to center the button perfectly.
    // The dark background makes the button colors pop.
    <main className="bg-gray-900 min-h-screen flex items-center justify-center antialiased">
      <button
        onClick={handleToggleClick}
        className={`${buttonBaseClasses} ${buttonColorClasses}`}
        aria-label={isGreen ? 'Change color to red' : 'Change color to green'}
      >
        Push Me
      </button>
    </main>
  );
};

export default App;
