import {classNames} from "shared/lib/classNames/classNames";
import cls from './TextBlock.module.scss'
import React from "react";

export enum TextBlockTheme {
    H1 = 'h1',
    H2 = 'h2',
}
interface TextBlockProps {
    className?: string
    children?: React.ReactNode
    theme?: TextBlockTheme
}

export const TextBlock = (props: TextBlockProps) => {
    const {
        className,
        children,
        theme = TextBlockTheme.H1
    } = props

    return (
        <div className={classNames(cls.TextBlock, {}, [className, cls[theme]])}>
            {children}
        </div>
    );
};