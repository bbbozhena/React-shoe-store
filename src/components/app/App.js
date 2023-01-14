import Header from "../Header/Header";
import Content from "../Content/Content.tsx";
import "./App.scss";
import Drawer from "../Drawer/Drawer.jsx";

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
