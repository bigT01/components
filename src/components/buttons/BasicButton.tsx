import React from 'react';
import style from './BasicButton.module.css'

export type BasicButtonProps = {
    label: string,
    bgColor: string,
    size: 'lg' | 'md' | 'sm'
}

const sizeProperty = {
    'lg' : ['px-[24px] py-[12px]', 'font-bold text-lg'],
    'md' : ['px-[20px] py-[10px]', 'font-normal text-base'],
    'sm': ['px-[16px] py-[8px]','font-normal text-sm']
}

const BasicButton = ({label,bgColor, size}:BasicButtonProps) => {
    return (
        <button className={`${style.basicButton} ${sizeProperty[size][0]} rounded-[4px] text-white `} style={{backgroundColor: bgColor}}>
            <span className={`capitalize text-base font-normal ${sizeProperty[size][1]}`}>
                {label}
            </span>
        </button>
    );
};

export default BasicButton;