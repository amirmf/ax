import { Metadata, Viewport } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Arisha Admin UI',
    description: 'Arisha platform....',
    robots: { index: false, follow: false },
    openGraph: {
        type: 'website',
        title: 'Arisha Admin ui',
        url: 'https://arisha.amir.mansouri.fard/',
        description: 'Arisha platform....',
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
