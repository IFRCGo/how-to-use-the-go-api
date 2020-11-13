import React from "react";
import { IonButton, IonContent, IonHeader } from "@ionic/react";
import { CodeSnippet } from "./CodeSnippet";
import languages from "../assets/languages.json";
import "./CodeContainer.scss";

interface CodeContainerProps {
    snippet: { [key: string]: any };
}

export const CodeContainer: React.FC<CodeContainerProps> = ({ snippet }) => {
    const [selectedLanguage, setSelectedLanguage] = React.useState(
        languages[0]
    );

    return (
        <IonContent className="code-container" scrollY={false}>
            <IonHeader>
                {languages.map((language, languageIndex) => {
                    return (
                        <IonButton
                            key={languageIndex}
                            fill={
                                selectedLanguage === language
                                    ? "solid"
                                    : "clear"
                            }
                            onClick={() => setSelectedLanguage(language)}
                        >
                            {language}
                        </IonButton>
                    );
                })}
            </IonHeader>
            <IonContent className="code-snippet">
                <CodeSnippet code={snippet[selectedLanguage]}></CodeSnippet>
            </IonContent>
        </IonContent>
    );
};
