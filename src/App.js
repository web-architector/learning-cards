import React from 'react';
import HeaderBlock from "./components/HeaderBlock";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer";
import ReactLogo from "./components/ReactLogo";
import BackgroundImage1 from './img/background.jpg';
import BackgroundImage2 from './img/background2.jpg';
import {wordsList} from './components/Card/wordsList';
import CardsContainer from "./components/Card";
import Section from "./components/Section";
import Button from "./components/Button";

import s from './App.module.scss';


const App = () => {
    return (
        <React.Fragment>
            <HeaderBlock backgroundImageUrl={BackgroundImage1}
                         backgroundGradient={{position: 'to top', begin: '#7c490fb3', end: '#0a8fc4b3'}}
            >
                <Header white>
                    Время учить слова online!
                </Header>
                <Paragraph white>
                    Используйте карточки для запоминания и пополняйте активный словарный запас.
                </Paragraph>

            </HeaderBlock>
            <Section backgroundColor='#eeeeee'>
                <Header size='l'>
                    Начать учить английский просто
                </Header>
                <Paragraph>
                    Щелкай по карточкам, запоминай и узнавай новые слова!
                </Paragraph>
                <CardsContainer wordsList={wordsList}/>

            </Section>
            <HeaderBlock backgroundImageUrl={BackgroundImage1}
                         backgroundGradient={{position: '45deg', begin: '#c5a43e', end: '#22211a8a'}}
            >
                <Header size='l'>
                    Учиться, учиться и еще раз учиться!
                </Header>
                <Paragraph>
                    Лепота!! (Тут другой градиент)
                </Paragraph>
                <ReactLogo rotate/>
            </HeaderBlock>
            <Section>
                <Header size='l'>
                    Мы создали уроки, чтобы помочь вам уверенно овладеть английским языком
                </Header>
                <div className={s.flexParagraph}>
                    <Paragraph>
                        <Header size='l'>1</Header>
                        Вы знаете за что платить. У нас фиксированная цена на все сервисы
                    </Paragraph>
                    <Paragraph>
                        <Header size='l'>2</Header>
                        Получите личную консультацию от преподавателя в течение 30 минут совершенно бесплатно.

                    </Paragraph>
                    <Paragraph>
                        <Header size='l'>3</Header>
                        Все преподы - дипломированные специалисты с многолетним опытом.

                    </Paragraph>

                </div>
            </Section>
            <HeaderBlock backgroundImageUrl={BackgroundImage2}
                         backgroundGradient={{position: 'to top', begin: '#1a2878b3', end: '#0a8fc4b3'}}
            >
                <Header white size='m'>
                    Ученье - свет, а неученье - тьма!
                </Header>
                <Paragraph white>
                    Как завещал великий Ленин
                </Paragraph>
                <Button/>
                <ReactLogo/>
            </HeaderBlock>
            <HeaderBlock backgroundGradient={{position: '120deg', begin: '#a5a43e', end: '#22211a8a'}}
            >
                <Header white>
                    Учиться, учиться и еще раз учиться!
                </Header>
                <Paragraph white>
                    Лепота!! (Тут нет фонового изображения)
                </Paragraph>
                <ReactLogo/>
            </HeaderBlock>
            <Footer/>
        </React.Fragment>
    )
};


export default App;
