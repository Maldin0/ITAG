import React from 'react';
import logo from './logo.svg';
import './Home.css';

const bottomText = {
  position: 'absolute' as const,
  top: '10%',
  left: '10%'
};

const centerText = {
  textAlign: 'center' as const, 
};

const Title = () => (
  
  <div style={bottomText}>
    <div style={centerText}>
      <p style={{marginLeft: '-70%',font-size:'50px'}}>
        IT<br/>
        ADVENTURER<br />
        guild
      </p>
    </div>
  </div>
);

function Home() {
  return (
    <div>
      <Title/>
    </div>
  );
}

export default Home;
