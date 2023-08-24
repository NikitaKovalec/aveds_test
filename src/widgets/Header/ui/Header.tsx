import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Header.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
// @ts-ignore
import Logo from 'shared/assets/icons/logo.svg';
import {removeUser} from "entities/User/removeUser";
import {useDispatch, useSelector} from "react-redux";
import {setUser, User} from "app/redux/user/userAction";

interface HeaderProps {
    className?: string;
    setActiveModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = (props: HeaderProps) => {
    const {
        className,
        setActiveModal
    } = props
    const user = useSelector((state: User | null) => state);
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(setUser(null))
        removeUser()
    }

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}><Logo /></AppLink>
            <div className={cls.menuBlock}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/contacts'}>Контакты</AppLink>
                {
                    user ?
                        <Button
                            theme={ThemeButton.CLEAR_SMALL_HEADER}
                            onClick={() => signOut()}
                        >
                            Выйти
                        </Button> :
                        <Button
                            theme={ThemeButton.CLEAR_SMALL_HEADER}
                            onClick={() => setActiveModal(true)}
                        >
                            Войти
                        </Button>
                }
            </div>
        </div>
    );
};