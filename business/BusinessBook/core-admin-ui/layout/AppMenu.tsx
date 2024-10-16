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
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Apps',
            items: [
                { label: 'About', icon: 'pi pi-fw pi-id-card', to: '/about' },
                { label: 'Audience', icon: 'pi pi-fw pi-check-square', to: '/audience' },
                { label: 'Business', icon: 'pi pi-fw pi-bookmark', to: '/Business' },
                { label: 'Competitor', icon: 'pi pi-fw pi-exclamation-circle', to: '/Competitor' },
                { label: 'Content', icon: 'pi pi-fw pi-mobile', to: '/Content'},
                { label: 'Customer', icon: 'pi pi-fw pi-table', to: '/Customer' },
                { label: 'Keyword', icon: 'pi pi-fw pi-list', to: '/Keyword' },
                { label: 'Lead', icon: 'pi pi-fw pi-share-alt', to: '/Lead' },
                { label: 'Media', icon: 'pi pi-fw pi-tablet', to: '/Media' },
                { label: 'News', icon: 'pi pi-fw pi-clone', to: '/News' },
                { label: 'Party', icon: 'pi pi-fw pi-image', to: '/Party' },
                { label: 'Portfolio', icon: 'pi pi-fw pi-bars', to: '/Portfolio' },
                { label: 'Post', icon: 'pi pi-fw pi-comment', to: '/Post' },
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
