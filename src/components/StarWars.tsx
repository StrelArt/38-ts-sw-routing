import {starWarsInfo} from "../utils/constants.ts";
import * as React from "react";
import {WithErrorPage} from "../hoc/WithErrorPage.tsx";

interface StarWarsProps {
    heroId?: string;
}

const StarWars: React.FC<StarWarsProps> = () => {

    return (
        <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
            {starWarsInfo}
        </div>
    );
};


export default WithErrorPage(StarWars);