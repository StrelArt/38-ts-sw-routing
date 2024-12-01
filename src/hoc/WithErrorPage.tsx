import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";


export const WithErrorPage = <T extends object>(WrappedComponent: ComponentType<T>) => (props: T) => {

    const {heroId = defaultHero} = useParams<{ heroId: string }>();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        changeHero(heroId);
    }, [heroId]);

    if (!characters[heroId]) {
        return <ErrorPage/>;
    }

    return (
        <WrappedComponent {...props} heroId={heroId}/>
    );
};

