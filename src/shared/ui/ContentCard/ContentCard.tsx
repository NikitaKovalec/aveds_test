import {classNames} from "shared/lib/classNames/classNames";
import cls from './ContentCard.module.scss'

interface ContentCardProps {
    className?: string;
    svg?: any;
    heading?: string;
    text?: string
}

export const ContentCard = (props: ContentCardProps) => {
    const {
        className,
        svg,
        heading,
        text
    } = props;

    return (
        <div className={classNames(cls.ContentCard, {}, [className])}>
            {svg}
            <h2 className={cls.h2}>{heading}</h2>
            <div className={cls.line}></div>
            <p className={cls.p}>{text}</p>
        </div>
    );
};