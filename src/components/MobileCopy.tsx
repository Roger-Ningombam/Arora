'use client';

import React from 'react';
import { useMobileCopy } from '@/hooks/useMobileCopy';

interface MobileCopyProps {
    desktop: string;
    mobile: string;
    className?: string;
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3';
}

export function MobileCopy({ desktop, mobile, className, as: Component = 'p' }: MobileCopyProps) {
    const text = useMobileCopy({ desktop, mobile });
    return <Component className={className}>{text}</Component>;
}
