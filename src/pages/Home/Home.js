import { useState, useEffect } from "react";
import { Paramour } from "../../components/Paramour";
import { Welcome } from "../../components/Welcome";
import { About } from "../../components/About";
import { Featured } from "../../components/Featured";
import "./home.css";
export const Home = () => {
  // console.log(source)
  return (
    <main>
      <Paramour  />
      <Welcome  />
      <About />
    <Featured /> 
    </main>
  );
};


