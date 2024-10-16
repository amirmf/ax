/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '../../layout/context/layoutcontext';


const Dashboard = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const applyLightTheme = () => {
    };

    const applyDarkTheme = () => {
    };

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    return (
       <iframe src="https://dify.ai"  width="100%" height="520px" frameBorder="0" seamless={true}></iframe>
    );
};

export default Dashboard;
