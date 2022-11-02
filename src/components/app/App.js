import Header from "../header/header";
import Content from "../content/content";
import "../app/App.scss";

function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <div>
        <h1>All shoes</h1>
        <div className="d-flex flex-wrap justify-center ">
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
