import React, { useState, useEffect } from 'react';
import './Hero1.css';


const Hero1 = () => {
  const [index, setIndex] = useState(0);
  const strings = [
    'Web Design',
    'Social skills',
    'Marketing',
    'Programming',
  ];
  const [currentString, setCurrentString] = useState(strings[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }, 2000); // Change the typing speed by adjusting the interval (in milliseconds)

    return () => clearInterval(interval);
  }, [strings]);

  useEffect(() => {
    setCurrentString(strings[index]);
  }, [index, strings]);

  return (
    <div className='hero1'>
      <div>
        <div>Learn the fundamentals with our</div>
        <span className='hero-text'>Our Experts in </span>
        <span className="typing-text">{currentString}</span>
        <div style={{fontSize:"24px", fontWeight:"400", padding:"20px 100px"}}>Utilize Effective Traning To Reach Your potential!</div>
      <div className="search-container">
        <input type="text" id="searchInput" placeholder="Search Courses"/>
        <button >Search</button>
    </div>
   
      </div>
    </div>
  );
};

export default Hero1;
