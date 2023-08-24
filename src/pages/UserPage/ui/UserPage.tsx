import React from "react";
import '../index.scss'
import {useNavigate} from "react-router-dom";
import {TextBlock, TextBlockTheme} from "shared/ui/TextBlock/TextBlock";
import {Content} from "shared/ui/Content/Content";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useDispatch, useSelector} from "react-redux";
import {User, removeUser} from "app/redux/user/userAction";

export const UserPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector((state: User | null) => state);

    const signOut = () => {
        localStorage.removeItem('user')
        dispatch(removeUser())
    };

    return (
        <Content>
            <TextBlock theme={TextBlockTheme.H1}>
                {user ? `Привет, ${user.name}` : 'Войдите в аккаунт'}
            </TextBlock>
            <div className='btnBlock'>
                {
                    user ?
                        <Button
                            theme={ThemeButton.FILLED_BIG}
                            style={{marginRight: '10px'}}
                            onClick={() => signOut()}
                        >
                            Выйти из аккаунта
                        </Button> :
                        <Button
                            theme={ThemeButton.FILLED_BIG}
                            style={{marginRight: '10px'}}
                            onClick={() => navigate('/')}
                        >
                            На Главную
                        </Button>
                }
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/contacts'}>
                    <Button theme={ThemeButton.CLEAR_BIG}>
                        Перейти в контакты
                    </Button>
                </AppLink>
            </div>
        </Content>
    );
};

export default UserPage;