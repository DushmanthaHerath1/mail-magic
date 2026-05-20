import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="h-screen lex items-center justify-center bg-gray-100">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
