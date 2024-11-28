import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import * as React from "react";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";

interface WithErrorPageProps {
    heroId?: string;
}

export const WithErrorPage = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P & WithErrorPageProps> => {
    const EnhancedComponent: React.FC<P & WithErrorPageProps> = (props) => {

        const {heroId = defaultHero} = useParams<{ heroId: string }>();
        const {changeHero} = useContext(SWContext);

        useEffect(() => {
            if (characters[heroId]) {
                changeHero(heroId);
            }
        }, [heroId]);

        if (!characters[heroId]) {
            return <ErrorPage/>;
        }

        return (
                            <WrappedComponent {...props} heroId={heroId}/>
                    );
    };

    return EnhancedComponent;
};