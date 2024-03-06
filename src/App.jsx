import {
  Navbar,
  Home,
  Cosmetology,
  Courses,
  Training,
  Contact,
  Footer,
  Pricing,
  Testimony,
} from "./components/index";
import "./react-slick.css";

function App() {
  return (
    <div className="font-space-grotesk bg-Solitude">
      <Navbar />
      <Home />
      <Cosmetology/>
      <Training />
      <Courses />
      <Testimony />
      <Pricing />
      <Contact />
      <Footer />
      {/*<Training />
      <Courses />
      <Testimony />
      <Pricing />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
