import React, { useEffect, useState } from 'react';

function DarkMode() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme == 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]); // Add Theme as a dependency to update when it changes

  return (
    <div className="relative"> // you can add your own button 
      <img
        src="/src/assets/website/light-mode-button.png"
        alt="light"
        onClick={() => { setTheme(theme === "light" ? "dark" : "light");
          }}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src="/src/assets/website/dark-mode-button.png"
        alt="dark"
        onClick={() => { setTheme(theme == "light" ? "dark" : "light");
          }}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
}

export default DarkMode;
