import { Paramour } from "../../components/Paramour";
import { Welcome } from "../../components/Welcome";
import { About } from "../../components/About";
import { Featured } from "../../components/Featured";
import "./home.css";
export const Home = () => {
  return (
    <main>
      <Paramour  />
      <Welcome  />
      <About />
    <Featured /> 
    </main>
  );
};


