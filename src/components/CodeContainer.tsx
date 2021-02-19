import React from 'react';
import { IonButton, IonContent, IonHeader } from '@ionic/react';
import { CodeSnippet } from './CodeSnippet';
import languages from '../assets/languages.json';
import './CodeContainer.scss';

interface CodeContainerProps {
    snippet: { [key: string]: any };
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
    isDarkThemeChecked: boolean;
}

export const CodeContainer: React.FC<CodeContainerProps> = ({
    snippet,
    selectedLanguage,
    setSelectedLanguage,
    isDarkThemeChecked,
}) => {
    return (
        <IonContent className='code-container' scrollY={false}>
            <IonHeader>
                {languages.map((language, languageIndex) => {
                    return (
                        <IonButton
                            key={languageIndex}
                            fill={
                                selectedLanguage === language
                                    ? 'solid'
                                    : 'clear'
                            }
                            onClick={() => setSelectedLanguage(language)}
                        >
                            {language}
                        </IonButton>
                    );
                })}
            </IonHeader>
            <IonContent className='code-snippet'>
                <CodeSnippet
                    code={snippet[selectedLanguage]}
                    selectedLanguage={selectedLanguage}
                    isDarkThemeChecked={isDarkThemeChecked}
                ></CodeSnippet>
            </IonContent>
        </IonContent>
    );
};
