import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import MyRouting from "./Routing/MyRouting";

function App() {
  document.body.style.backgroundColor = "#1F1F1F";

  return (
    <div className="">
      <MyRouting />
      {/* <InputEvent /> */}
      {/* <NavBar />
      <ProductList />
      <ExtraEvents /> */}
    </div>
  );
}

export default App;
