import React from 'react';

import HomeScreen from './src/screens/home/index';
import Post from './src/components/post.js/index';
import SearchResults from './src/screens/searchResults/index';
import feed from './assets/airbnb/feed';

export default function App() {
  return (
    <>
      <SearchResults />
      {/* Posts mocked */}
      {/* {places.map((place, index) => {
        return <Post key={index} place={place} />;
      })} */}
    </>
  );
}
