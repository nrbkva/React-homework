import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header title={"Nurai"} />
      <Text title={"Hello world"} />
      <Button title={"Click me!"} />
      <Button title={"Follow"} />
      <Main text={"Lorem ipsum dolor set amet"} />
      <Footer />
    </div>
  );
}

export default App;
