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


const App = () => {
    return (
        <React.Fragment>
            <HeaderBlock backgroundImageUrl={ BackgroundImage1 }
                         backgroundGradient={ {position: 'to top', begin: '#7c490fb3', end: '#0a8fc4b3'} }
            >
                <Header>
                    Время учить слова online!
                </Header>
                <Paragraph>
                    Используйте карточки для запоминания и пополняйте активный словарный запас.
                </Paragraph>

                <CardsContainer wordsList={wordsList}/>
            </HeaderBlock>
            <HeaderBlock backgroundImageUrl={ BackgroundImage1 }
                         backgroundGradient={ {position: '45deg', begin: '#c5a43e', end: '#22211a8a'} }
            >
                <Header>
                    Учиться, учиться и еще раз учиться!
                </Header>
                <Paragraph>
                    Лепота!! (Тут другой градиент)
                </Paragraph>
                <ReactLogo rotate/>
            </HeaderBlock>
            <HeaderBlock backgroundImageUrl={ BackgroundImage2 }
                         backgroundGradient={ {position: 'to top', begin: '#1a2878b3', end: '#0a8fc4b3'} }
            >
                <Header>
                    Ученье - свет, а неученье - тьма!
                </Header>
                <Paragraph>
                    Как завещал великий Ленин
                </Paragraph>
                <ReactLogo/>
            </HeaderBlock>
            <HeaderBlock backgroundGradient={ {position: '120deg', begin: '#a5a43e', end: '#22211a8a'} }
            >
                <Header>
                    Учиться, учиться и еще раз учиться!
                </Header>
                <Paragraph>
                    Лепота!! (Тут нет фонового изображения)
                </Paragraph>
                <ReactLogo/>
            </HeaderBlock>
            <Footer/>
        </React.Fragment>
    )
};


export default App;
