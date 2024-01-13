import React from 'react';
import Image from "next/image";
import GptCard from './GptCard';

const CardSection = () => {
  return (
   <div className="grid md:grid-cols-3 gap-8 md:gap-12">
     <GptCard />
     <GptCard />
     <GptCard />
  </div>
  )
}

export default CardSection