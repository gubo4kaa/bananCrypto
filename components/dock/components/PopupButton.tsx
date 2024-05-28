'use client'

import { FunctionComponent, useState } from 'react';
import { useRef } from 'react';
import Modal from 'react-modal';
import IframePopap from './IframePopap';
import { Button } from '@/components/ui/button';
import { useOpenMenuStore } from '@/store/state';

interface PopupButtonProps {
    iframeSrc: string
}
 
const PopupButton: FunctionComponent<PopupButtonProps> = ({iframeSrc}) => {
    const [popap, setPopap] = useOpenMenuStore((state) => [state.popap, state.setPopap])

    return (
        <div>
            <Button type='button' variant={'link'} onClick={() => (popap == iframeSrc? setPopap(null): setPopap(iframeSrc))}>{iframeSrc}</Button>
            {popap == iframeSrc && (
                <IframePopap iframeSrc={iframeSrc}  />
            )}
        </div>
    );
}
 
export default PopupButton;