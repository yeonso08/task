import "bootstrap/dist/css/bootstrap.css";
import "./styles/global.css";
import Router from "./shared/Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
