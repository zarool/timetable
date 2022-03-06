import Title from "./components/Title";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import getTitle from "./utils/getWeek";

function App() {
  return (
    <div className="container">
      <Title TITLE={getTitle()} />
      <Header TITLE={getTitle()} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
