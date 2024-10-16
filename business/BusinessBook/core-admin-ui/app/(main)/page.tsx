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
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-6">
                <div className="card">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <h5>Notifications</h5> 
                        </div>

                        <span className="block text-600 font-medium mb-3">TODAY</span>
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                    <i className="pi pi-dollar text-xl text-blue-500" />
                                </div>
                                <span className="text-900 line-height-3">
                                    Richard Jones
                                    <span className="text-700">
                                        {' '}
                                        has purchased a blue t-shirt for <span className="text-blue-500">79$</span>
                                    </span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2">
                                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                    <i className="pi pi-download text-xl text-orange-500" />
                                </div>
                                <span className="text-700 line-height-3">
                                    Your request for withdrawal of <span className="text-blue-500 font-medium">2500$</span> has been initiated.
                                </span>
                            </li>
                        </ul>

                        <span className="block text-600 font-medium mb-3">YESTERDAY</span>
                        <ul className="p-0 m-0 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                    <i className="pi pi-dollar text-xl text-blue-500" />
                                </div>
                                <span className="text-900 line-height-3">
                                    Keyser Wick
                                    <span className="text-700">
                                        {' '}
                                        has purchased a black jacket for <span className="text-blue-500">59$</span>
                                    </span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                    <i className="pi pi-question text-xl text-pink-500" />
                                </div>
                                <span className="text-900 line-height-3">
                                    Jane Davis
                                    <span className="text-700"> has posted a new questions about your product.</span>
                                </span>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-6">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Revenue</span>
                            <div className="text-900 font-medium text-xl">$2.100</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-map-marker text-orange-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">%52+ </span>
                    <span className="text-500">since last week</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
