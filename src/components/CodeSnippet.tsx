import React from "react";
import "./CodeSnippet.scss";

interface CodeSnippetProps {
    code: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
    return (
        <pre className="ion-padding">
            <code>{code}</code>
        </pre>
    );
};
