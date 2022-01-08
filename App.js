import React from 'react';

import HomeScreen from './src/screens/home/index';
import Post from './src/components/post.js/index';

export default function App() {
  const places = [
    {
      imgs: [
        'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=2500%2C1666',
        'https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg?fit=2500%2C1667',
      ],
      baths: 1,
      bedrooms: 2,
      title: 'Test place number 1',
      discount: 0.1,
      price: 55000,
      total: 270000,
    },
    {
      imgs: [
        'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=2500%2C1666',
        'https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg?fit=2500%2C1667',
      ],
      baths: 1,
      bedrooms: 2,
      title: 'Test place number 2',
      discount: 0.1,
      price: 55000,
      total: 270000,
    },
  ];
  return (
    <>
      {places.map((place, index) => {
        return <Post key={index} place={place} />;
      })}
    </>
  );
}
