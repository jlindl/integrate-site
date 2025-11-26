import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutClient from "../components/about/AboutClient";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Client content with animations */}
      <AboutClient />
      <Footer />
    </div>
  );
}
