'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ThreeScene from './ThreeScene';
import ShapeControls from './ShapeControls';

const CubeConfigurator: React.FC = () => {
  const [shape, setShape] = useState('CUBE');
  const [color, setColor] = useState(0x00ff00);

  return (
    <>
      <Header />
      <ShapeControls onChangeShape={setShape} onChangeColor={setColor} />
      <ThreeScene shape={shape} color={color} />
      <Footer />
    </>
  );
};

export default CubeConfigurator;
