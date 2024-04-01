import "./css/reset.css";
import "./css/body.css";
import { data } from "./Constance/fma-data.ts";
import { Header } from "./Components/Header/Header";
import CharacterRatingsTable from "./Components/CharacterRatings/CharacterRatingsTable";
import { CharacterCards } from "./Components/CharacterCards/CharacterCards.jsx";

function App() {
  console.log(data);
  return (
    <>
      <Header />
      <CharacterRatingsTable data={data} />
      <CharacterCards data={data} />
    </>
  );
}

export default App;
