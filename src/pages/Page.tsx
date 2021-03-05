import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { CodeContainer } from '../components/CodeContainer';
import { Theme } from '../components/Theme';
import { ChartContainer } from '../components/ChartContainer';
import examples from '../assets/examples.json';
import languages from '../assets/languages.json';
import { useLocation } from 'react-router-dom';
import './Page.css';

const Page: React.FC = () => {
    const location = useLocation();
    const exampleIndex = examples.findIndex(
        (example) => '#example' + example.id === location.hash
    );
    const example = exampleIndex >= 0 ? examples[exampleIndex] : examples[0];
    const name = example.title;
    const [selectedLanguage, setSelectedLanguage] = React.useState(
        languages[0]
    );
    const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;
    const [isDarkThemeChecked, setDarkThemeChecked] = useState(isDarkPreferred);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                    <div slot='end'>
                        <Theme
                            isDarkThemeChecked={isDarkThemeChecked}
                            setDarkThemeChecked={setDarkThemeChecked}
                        />
                    </div>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonNote className='ion-margin ion-padding'>
                    {example.description}
                </IonNote>
                <div className='ion-margin'>
                    <ChartContainer
                        chart={example.chart}
                        api={example.api}
                        selectedLanguage={selectedLanguage}
                    />
                </div>
                <div className='ion-margin'>
                    <CodeContainer
                        code={example.code}
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        isDarkThemeChecked={isDarkThemeChecked}
                    />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page;
