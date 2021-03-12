import React from 'react';
import './CodeViewer.scss';
import languages from '../assets/languages.json';
import { IonNote } from '@ionic/react';
import ReactMarkdown from 'react-markdown';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/addon/display/autorefresh';

interface CodeViewerProps {
    code: string;
    selectedLanguage: string;
    isDarkThemeChecked: boolean;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
    code,
    selectedLanguage,
    isDarkThemeChecked,
}) => {
    if (!code) {
        return (
            <IonNote className='ion-margin ion-padding'>
                Code for {selectedLanguage} is not available
            </IonNote>
        );
    }

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
                autoRefresh: true,
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
                autoRefresh: true,
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
                    Found Unsupported Code
                </IonNote>
            );
    }
};
