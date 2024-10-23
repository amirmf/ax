/* eslint-disable @next/next/no-img-element */

import React, { useContext, useEffect } from 'react';
import { LayoutContext } from './context/layoutcontext';
import { MenuContext, MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';
import { Menubar } from 'primereact/menubar';
import { usePathname, useSearchParams } from 'next/navigation';
import { classNames } from 'primereact/utils';
import AppConfig from './AppConfig';
import Link from 'next/link';

const AppMenu = () => {
    useContext(LayoutContext);
    

    const model: AppMenuItem[] = [ 
                { label: 'Apps', icon: 'pi pi-fw pi-bolt', url: '/apps' },
                { label: 'Knowledge', icon: 'pi pi-fw pi-book', url: '/knowledge'},
                { label: 'Jobs', icon: 'pi pi-fw pi-calendar-clock', url: '/jobs'},
                { label: 'Portal', icon: 'pi pi-fw pi-desktop', url: '/portal'},
                { label: 'Tools', icon: 'pi pi-fw pi-wrench', url: '/tools'},
         ]; 
         const start=<>
         <Link href="/" className="layout-topbar-logo">
                <img src={`/layout/images/logo-white.png`}  
                 alt="AXStudio" />
            </Link>

         </>;
         const end =<>

        <div 
             className={classNames('layout-topbar-menu')}>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Profile</span>
                </button> 
                <AppConfig />                
            </div>
         </>;


    return (
        <MenuProvider>
            <Menubar model={model} start={start} end={end} className={'ax-menubar'} />
        </MenuProvider>
    );
};

export default AppMenu;
