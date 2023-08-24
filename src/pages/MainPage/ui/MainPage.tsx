import React from 'react';
import '../index.scss'
import {Content} from "shared/ui/Content/Content";
import {TextBlock, TextBlockTheme} from "shared/ui/TextBlock/TextBlock";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {ContentCard} from "shared/ui/ContentCard/ContentCard";
// @ts-ignore
import Heart from 'shared/assets/icons/heart.svg';
// @ts-ignore
import Stethoscope from 'shared/assets/icons/stethoscope.svg';
// @ts-ignore
import Tablet from 'shared/assets/icons/tablet.svg';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useSelector} from "react-redux";
import {User} from "app/redux/user/userAction";
import {useNavigate} from "react-router-dom";

interface MainPageProps {
    setActiveModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainPage = ({setActiveModal}: MainPageProps) => {
    const user = useSelector((state: User | null) => state);
    const navigate = useNavigate()

    return (
        <div className='main'>
            <Content>
                <div>
                    <TextBlock theme={TextBlockTheme.H1}>
                        Место для получения медицинской помощи
                    </TextBlock>
                    <div className='btnBlock'>
                        <Button
                            theme={ThemeButton.FILLED_BIG}
                            className='firstButton'
                            onClick={() => user ? navigate('/userPage') : setActiveModal(true)}
                        >
                            {user ? 'В личный кабинет' : 'Войти'}
                        </Button>
                        <AppLink theme={AppLinkTheme.SECONDARY} to={'/contacts'}>
                            <Button
                                theme={ThemeButton.CLEAR_BIG}
                            >
                                Контакты
                            </Button>
                        </AppLink>
                    </div>
                </div>
                <div className='cards'>
                    <ContentCard svg={<Heart/>} heading={'Онлайн-прием'} text={'Рыба текст'}/>
                    <ContentCard svg={<Stethoscope/>} heading={'Экстренный Случай'} text={'Рыба текст'}/>
                    <ContentCard svg={<Tablet/>} heading={'Лечение рака'} text={'Рыба текст'}/>
                </div>
            </Content>
        </div>
    );
};

export default MainPage;
