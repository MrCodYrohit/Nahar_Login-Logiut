import React from 'react';

// Home Page
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-30 animate-blob"></div>
      <div className="px-4 py-12 max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">
          Welcome to Nahar Om!
        </h1>
        <p className="mb-4 text-slate-700">
          We've been at the forefront of shaping credit investments, commanding
          Lines of Credit worth 500 million USD from prestigious banking
          institutions. Our founders driven by unwavering trust and passion for
          ethical business, have sealed transactions worth half a billion USD
          across major global cities, from Mumbai to New York.
        </p>
        <p className="mb-4 text-slate-700">
          Our journey is a testament to our commitment to a new era of conscious
          commerce. We are a beacon of change and innovation in the world of
          finance, and we're just getting started.
        </p>
        <p className="mb-4 text-slate-700">
          We envision a future where every business transaction is a catalyst
          for positive change. At Nahar OM Family Co-op Office, we're not just
          another business entity. We're a testament to evolution and a
          commitment to a new era of conscious commerce.
        </p>
      </div>
    </div>
  );
}
