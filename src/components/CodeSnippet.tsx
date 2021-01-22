import React from "react";
import "./CodeSnippet.scss";
import languages from "../assets/languages.json";
import { IonNote } from "@ionic/react";
import ReactMarkdown from "react-markdown";

interface CodeSnippetProps {
    code: string;
    selectedLanguage: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
    code,
    selectedLanguage,
}) => {
    switch (selectedLanguage) {
        case languages[0]:
            return (
                <pre className="ion-padding">
                    <ReactMarkdown source={code} />
                </pre>
            );
        case languages[1]:
            return (
                <pre className="ion-padding">
                    <ReactMarkdown source={code} />
                </pre>
            );
        case languages[2]:
            return (
                <pre className="ion-padding">
                    <code>{code}</code>
                </pre>
            );
        case languages[3]:
            return (
                <pre className="ion-padding">
                    <code>{code}</code>
                </pre>
            );
        default:
            return (
                <IonNote className="ion-margin ion-padding">
                    Code not available
                </IonNote>
            );
    }
};
