//  About Page
export default function About() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-30 animate-blob"></div>
      <div className="px-4 py-12 max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">About</h1>
        <p className="mb-4 text-slate-700">
          We envision a future where every business transaction is a catalyst for
          positive change. At Nahar OM Family Co-op Office, we're not just
          another business entity. We're a testament to evolution and a
          commitment to a new era of conscious commerce.
        </p>
        <p className="mb-4 text-slate-700">
          Hailing from an Oswal & Maheshwari lineage, Our journey commenced 45
          years ago as a humble HVAC wholesale trading house, and today, it has
          matured into a beacon of change and innovation in the world of finance.
        </p>
        <p className="mb-4 text-slate-700">
          Made by Rohit Raj and Shubham Pal. We are a team of 2 developers who
          have a passion for creating and developing softwares. We are
          always looking for new opportunities to learn and grow.
        </p>
      </div>
    </div>
  );
}