import Header from "../Header/Header";
import Content from "../Content/Content";
import "./App.scss";

function App() {
  return (
    <>
      <div className="wrapper clear">
        <Header />
        <div>
          <div className="d-flex flex-wrap justify-center ">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
