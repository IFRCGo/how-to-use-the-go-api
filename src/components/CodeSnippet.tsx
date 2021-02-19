import React from 'react';
import './CodeSnippet.scss';
import languages from '../assets/languages.json';
import { IonNote } from '@ionic/react';
import ReactMarkdown from 'react-markdown';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';

interface CodeSnippetProps {
    code: string;
    selectedLanguage: string;
    isDarkThemeChecked: boolean;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
    code,
    selectedLanguage,
    isDarkThemeChecked,
}) => {
    switch (selectedLanguage) {
        case languages[0]:
            return (
                <pre className='ion-padding'>
                    <ReactMarkdown source={code} />
                </pre>
            );
        case languages[1]:
            return (
                <pre className='ion-padding'>
                    <ReactMarkdown source={code} />
                </pre>
            );
        case languages[2]:
            const javaScriptOptions = {
                lineNumbers: true,
                matchBrackets: true,
                mode: 'text/typescript',
                theme: isDarkThemeChecked ? 'material' : 'xq-light',
            };
            return (
                <CodeMirror
                    value={code}
                    options={javaScriptOptions}
                    onBeforeChange={(editor, data, value) => {}}
                />
            );
        case languages[3]:
            const pythonOptions = {
                lineNumbers: true,
                matchBrackets: true,
                mode: 'python',
                theme: isDarkThemeChecked ? 'material' : 'xq-light',
            };
            return (
                <CodeMirror
                    value={code}
                    options={pythonOptions}
                    onBeforeChange={(editor, data, value) => {}}
                />
            );
        default:
            return (
                <IonNote className='ion-margin ion-padding'>
                    Code not available
                </IonNote>
            );
    }
};
