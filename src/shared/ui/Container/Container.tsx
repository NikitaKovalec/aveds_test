import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Container.module.scss'

interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
    const {
        className,
        children
    } = props

    return (
        <div className={classNames(cls.Container, {}, [className])}>
            {children}
        </div>
    );
};