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
        <div style={{
            position:'absolute',
            top:'70px',
            bottom:'10px',
            right:'20px',
            left:'20px',
            overflow:'hidden'
        }}>
       <iframe src="https://axagent.automatx.ir/apps"  
                frameBorder="0" 
                seamless={true}
                width="100%" 
                 height="100%"
                 scrolling='true'
                style={{
                    width:'100%',
                  }}
                ></iframe>
        </div>
    );
};

export default Dashboard;
