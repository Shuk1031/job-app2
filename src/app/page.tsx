"use client";

import React from 'react';
import JobSearch from '../../components/JobSearch';

const HomePage: React.FC =() => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">求人検索</h1>
      <JobSearch />
    </div>
  );
};
export default HomePage;