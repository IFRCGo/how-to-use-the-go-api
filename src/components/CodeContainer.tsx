import React from 'react';
import { IonButton, IonContent, IonHeader } from '@ionic/react';
import { CodeViewer } from './CodeViewer';
import languages from '../assets/languages.json';
import './CodeContainer.scss';

interface CodeContainerProps {
    code: { [key: string]: any };
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
    isDarkThemeChecked: boolean;
}

export const CodeContainer: React.FC<CodeContainerProps> = ({
    code,
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
            <IonContent className='code-viewer'>
                <CodeViewer
                    code={code[selectedLanguage]}
                    selectedLanguage={selectedLanguage}
                    isDarkThemeChecked={isDarkThemeChecked}
                ></CodeViewer>
            </IonContent>
        </IonContent>
    );
};
