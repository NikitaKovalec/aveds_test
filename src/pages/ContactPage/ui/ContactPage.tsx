import React from 'react';
import {Content} from "shared/ui/Content/Content";
import {TextBlock, TextBlockTheme} from "shared/ui/TextBlock/TextBlock";

const ContactPage = () => {
    return (
        <Content>
            <TextBlock theme={TextBlockTheme.H1}>
                Контакты
            </TextBlock>
        </Content>
    );
};

export default ContactPage;
