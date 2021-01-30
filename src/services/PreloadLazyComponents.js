import React from "react";
import { routes } from "../router/routes";

const PreloadLazyComponents = () => {
    const [actPreload, setActPreload] = React.useState(true);
    React.useEffect(() => {
        const t = setTimeout(() => {
            setActPreload(false);
        }, 3000);
        return () => {
            clearTimeout(t);
        };
    });

    if (actPreload)
        return (
            <div style={preloadStyles} hidden>
                {
                    routes.map(route => {
                        return (<route.component preload key={route.path} />
                        );
                    })
                }
            </div>
        );
    else
        return (
            <div />
        )
};

export default React.memo(PreloadLazyComponents);

const preloadStyles = {
    //     maxHeight: 0,
    //     maxWidth: 0,
    // opacity: 0,
    // position: "absolute",
    // top: "-100%",
    // left: "-100%"
};
