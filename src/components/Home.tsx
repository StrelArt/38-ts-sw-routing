import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import * as React from "react";
import {WithErrorPage} from "../hoc/WithErrorPage.tsx";

interface HomeProps {
    heroId?: string;
}

const Home: React.FC<HomeProps> = () => {

   return (
        <main>
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    )

};

export default WithErrorPage(Home);