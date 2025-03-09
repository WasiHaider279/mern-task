import "./App.css";
import BreakingBarriers from "./components/home/BreakingBarriers/BreakingBarriers";
import CurrentlyServe from "./components/home/CurrentlyServe/CurrentlyServe";
import Featured from "./components/home/Featured/Featured";
import Footer from "./components/home/Footer/Footer";
import GetApp from "./components/home/GetApp/GetApp";
import Hero from "./components/home/Hero/Hero";
import RecoveryDelivered from "./components/home/RecoveryDelivered/RecoveryDelivered";
import SameDaySection from "./components/home/SameDaySection/SameDay";
import Testimonials from "./components/home/Testimonials/Testimonials";

function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <BreakingBarriers />
        <RecoveryDelivered />
        <Testimonials />
        <SameDaySection />
        <Featured />
        <CurrentlyServe />
        <GetApp />
        <Footer />
      </main>
    </>
  );
}

export default App;
