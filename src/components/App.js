import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


function App() {
  return (
    <div>
      <Header />
      <h1>Change!</h1>
      <Note title="testTitle" content="testContent"/>
      <Footer />
    </div>
  );
}

export default App;
