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
import { Chart } from '../components/Chart';
import snippets from '../assets/snippets.json';
import languages from '../assets/languages.json';
import { useLocation } from 'react-router-dom';
import './Page.css';

const Page: React.FC = () => {
    const location = useLocation();
    const snippetIndex = snippets.findIndex(
        (snippet) => '#example' + snippet.id === location.hash
    );
    const snippet = snippetIndex >= 0 ? snippets[snippetIndex] : snippets[0];
    const name = snippet.title;
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
                    {snippet.description}
                </IonNote>
                <div className='ion-margin'>
                    <Chart
                        code={snippet.code}
                        api={snippet.api}
                        selectedLanguage={selectedLanguage}
                    />
                </div>
                <div className='ion-margin'>
                    <CodeContainer
                        snippet={snippet.snippet}
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
