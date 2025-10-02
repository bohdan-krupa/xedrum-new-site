'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { NAVIGATION_ITEMS, HEADER_BUTTONS } from './constants';
import Logo from '@/components/ui/logo/Logo';
import ArrowButton from '@/components/ui/buttons/arrowButton/ArrowButton';
import BurgerIcon from '@/components/ui/icons/burger-icon';

const MobileHeader = () => {
    const pathname = usePathname();

    return (
        <div className='flex justify-between m-4'>
            <Logo />
            <div className='flex flex-row gap-2 items-center'>
                <ArrowButton title={HEADER_BUTTONS.CONTACT} />
                <BurgerIcon />
            </div>
        </div>
    )

}

export default MobileHeader