'use client';

import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Sidebar } from 'primereact/sidebar';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useState } from 'react';
import { AppConfigProps, LayoutConfig, LayoutState } from '@/types';
import { LayoutContext } from './context/layoutcontext';
import { ToggleButton } from 'primereact/togglebutton';

const AppConfig = (props: AppConfigProps) => {
    const { layoutConfig, setLayoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);
    const { setRipple, changeTheme } = useContext(PrimeReactContext);
    const [darkMode, setDarkMode] = useState(false);

    const _changeTheme = (theme: string, colorScheme: string) => {
        changeTheme?.(layoutConfig.theme, theme, 'theme-css', () => {
            setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, theme, colorScheme }));
        });
    };
    const toggleDarkMode = ( isDark: boolean) => {
        setDarkMode(isDark);
        if(isDark)
            _changeTheme('lara-dark-purple', 'dark');
        else
            _changeTheme('lara-light-purple', 'light');
        
    };

    return (
        <>
            <ToggleButton onLabel="" offLabel="" onIcon="pi pi-sun" offIcon="pi pi-moon"  
                    checked={darkMode} onChange={(e) =>toggleDarkMode(e.value)} className='h-3 w-4' />
        </>
    );
};

export default AppConfig;
