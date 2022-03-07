import Title from "./components/Title";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import getTitle from "./utils/getWeek";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="container">
      <HelmetProvider>
        <Title TITLE={getTitle()} />
        <Header TITLE={getTitle()} />
        <Body />
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
