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
import React, { useCallback, useEffect, useState } from 'react';
import { CodeContainer } from '../components/CodeContainer';
import { Theme } from '../components/Theme';
import { ChartContainer } from '../components/ChartContainer';
import examples from '../assets/examples.json';
import languages from '../assets/languages.json';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './Page.css';
import { Example } from '../models/example';

const Page: React.FC = () => {
    const location = useLocation();

    const getExample = useCallback((): Example => {
        const exampleIndex = examples.findIndex(
            (example) => '#example' + example.id === location.hash
        );
        const example =
            exampleIndex >= 0 ? examples[exampleIndex] : examples[0];
        return example as Example;
    }, [location.hash]);

    const [selectedExample, setSelectedExample] = React.useState(getExample());

    useEffect(() => {
        setSelectedExample(getExample());
    }, [getExample, location]);

    const name = selectedExample.title;

    const getDefaultLanguageForExample = (example: Example): string => {
        return (
            languages.find(
                (language: string) => example.code && language in example.code
            ) || languages[0]
        );
    };

    const [selectedLanguage, setSelectedLanguage] = React.useState(
        getDefaultLanguageForExample(selectedExample)
    );

    useEffect(() => {
        setSelectedLanguage(getDefaultLanguageForExample(selectedExample));
    }, [selectedExample]);

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
                    {selectedExample.description}
                </IonNote>
                <div className='ion-margin'>
                    {selectedExample.guide && (
                        <ReactMarkdown
                            className='ion-padding'
                            source={selectedExample.guide}
                        />
                    )}
                </div>
                <div className='ion-margin'>
                    {selectedExample.chart && (
                        <ChartContainer
                            chart={selectedExample.chart}
                            api={selectedExample.api}
                            selectedLanguage={selectedLanguage}
                        />
                    )}
                </div>
                <div className='ion-margin'>
                    {selectedExample.code && (
                        <CodeContainer
                            code={selectedExample.code}
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                            isDarkThemeChecked={isDarkThemeChecked}
                        />
                    )}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page;
