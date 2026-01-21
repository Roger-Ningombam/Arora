type GTagEvent = {
    action: string;
    category: string;
    label?: string;
    value?: number;
};

export const sendEvent = ({ action, category, label, value }: GTagEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    } else {
        console.log('[Analytics]', { action, category, label, value });
    }
};

export const Events = {
    LEAD_SUBMITTED: 'lead_submitted',
    LEAD_MAGNET_DOWNLOAD: 'lead_magnet_download',
    DEMO_CLICK: 'demo_click',
    SOCIAL_CLICK: 'social_click',
};
