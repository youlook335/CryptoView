import React from "react";
import GlobalStats from "../components/GlobalStats";
import TrendingCoins from "../components/TrendingCoins";
import CryptoTable from "../components/CryptoTable";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <GlobalStats />
      <TrendingCoins />
      <CryptoTable />
    </div>
  );
};

export default Home;
