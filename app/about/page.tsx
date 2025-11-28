import Header from "../components/Header";
import AboutClient from "../components/about/AboutClient";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Client content with animations */}
      <AboutClient />
    </div>
  );
}
