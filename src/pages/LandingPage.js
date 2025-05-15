import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col justify-between">
      <header className="bg-white shadow p-5 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Budget Buddy</h1>
        <div>
          <Link to="/login" className="text-indigo-600 font-medium mr-5 hover:underline">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
          Take Control of Your <span className="text-indigo-600">Finances</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          Track your expenses, set budget limits by category, and stay on top of your spending habits — all in one place.
        </p>
        <Link
          to="/register"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Tracking Now
        </Link>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          <FeatureCard
            title="Smart Categorization"
            description="Label your expenses like rent, food, travel, and more. Stay organized with customized tags."
          />
          <FeatureCard
            title="Budget Alerts"
            description="Set budget limits by category and receive instant alerts when you're close to exceeding them."
          />
          <FeatureCard
            title="Monthly Insights"
            description="Visualize planned vs actual spending using interactive charts and graphs."
          />
        </div>
      </main>

      <footer className="bg-white text-center py-4 text-sm text-gray-500 shadow-inner">
        © 2025 Budget Buddy.
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
      <h3 className="text-xl font-bold mb-2 text-indigo-700">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default LandingPage;
