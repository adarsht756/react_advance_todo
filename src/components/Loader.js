import React from 'react'
import { useLoading, Grid } from "@agney/react-loading";

function Loader() {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Grid width="50" className="text-white fill-current" />,
        loaderProps: {
            valueText: 'Fetching video from the Great Internet',
        }
    });
    return (
        // <div className="relative">
        <div className="h-screen w-screen absolute top-0 z-10 bg-green-500 transition-opacity duration-500">
            <div className="center flex items-center">
                {
                    indicatorEl
                }
                <span className="text-xl text-white ml-8">Please wait Loading</span>

            </div>
        </div>
    )
}

export default Loader
