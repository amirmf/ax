/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Runtime',
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'Inbox', icon: 'pi pi-fw pi-id-card', to: '/inbox' },
                { label: 'Agents', icon: 'pi pi-fw pi-id-card', to: '/agent' },
                { label: 'Tasks', icon: 'pi pi-fw pi-mobile', to: '/tasks'},
                { label: 'Jobs', icon: 'pi pi-fw pi-mobile', to: '/jobs'},
                { label: 'Events', icon: 'pi pi-fw pi-mobile', to: '/events'},
                { label: 'Reports', icon: 'pi pi-fw pi-mobile', to: '/reports'},
            ]
        },
        {
            label: 'Setup',
            items: [
                { label: 'Agents', icon: 'pi pi-fw pi-id-card', to: '/agents' },
                { label: 'Tasks', icon: 'pi pi-fw pi-mobile', to: '/tasks'},
                { label: 'Jobs', icon: 'pi pi-fw pi-mobile', to: '/jobs'},
                { label: 'Events', icon: 'pi pi-fw pi-mobile', to: '/events'},
                { label: 'Portal', icon: 'pi pi-fw pi-mobile', to: '/portal'},
                { label: 'Knowledge', icon: 'pi pi-fw pi-check-square', to: '/knowledge' },
                { label: 'Tools', icon: 'pi pi-fw pi-mobile', to: '/tools'},
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
