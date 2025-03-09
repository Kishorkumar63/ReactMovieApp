import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="container text-3">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
