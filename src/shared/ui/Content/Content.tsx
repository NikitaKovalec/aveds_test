import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Content.module.scss'

interface ContentProps {
    className?: string;
    children?: React.ReactNode;
}

export const Content = (props: ContentProps) => {
    const {
        className,
        children
    } = props

    return (
        <div className={classNames(cls.Content, {}, [className])}>
            {children}
        </div>
    );
};