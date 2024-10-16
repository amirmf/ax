import { Metadata, Viewport } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'AXStudio',
    description: 'AutomatX business studio',
    robots: { index: false, follow: false },
    openGraph: {
        type: 'website',
        title: 'AXStudio',
        url: 'https://axstudio.automatx.ir/',
        description: 'AutomatX business studio',
        images: ['https://www.primefaces.org/static/social/sakai-react.png'],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};
export const viewport: Viewport = { initialScale: 1, width: 'device-width' };

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
