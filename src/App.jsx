import React from "react";
import { Routes, Route } from "react-router-dom";
import CryptoList from "./components/CryptoList";
import CoinDetails from "./pages/CoinDetails";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">CryptoView Dashboard</h1>
      
      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </div>
  );
}

export default App;
