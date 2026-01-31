import { useEffect, useState } from 'react';

export function useMobileViewport() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}

interface CopyOptions {
    desktop: string;
    mobile: string;
}

export function useMobileCopy(copy: CopyOptions): string {
    const isMobile = useMobileViewport();
    return isMobile ? copy.mobile : copy.desktop;
}
