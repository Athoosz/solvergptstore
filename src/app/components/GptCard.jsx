import React from "react";
import Image from "next/image";

const GptCard = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#fff3dd]">
      <Image class="border-8 border-[#fff3dd]" src="/images/bot1.jpg" alt="hero image" width={300} height={300} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-[#260101]">The Coldest Sunset</div>
        <p class="text-[#260101] text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default GptCard;
