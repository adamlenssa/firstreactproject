import "../css/reset.css";
import "../css/body.css";
import { data } from "./assets/fma-data";
import Table from "../Website Components/Table";
import { HeaderMake } from "../Website Components/HeaderMake";
import { Cards } from "../Website Components/Cards";

function App() {
  return (
    <>
      <HeaderMake />
      <Table data={data} key={"table"} />
      <Cards data={data} key={"cards"} />
    </>
  );
}

export default App;
