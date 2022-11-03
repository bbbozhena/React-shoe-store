import Header from "../header/header";
import Content from "../content/content";
import "../app/App.scss";

function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <div>
        <div className="d-flex flex-wrap justify-center ">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
