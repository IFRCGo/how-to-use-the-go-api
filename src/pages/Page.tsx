import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React from "react";
import { CodeContainer } from "../components/CodeContainer";
import { Theme } from "../components/Theme";
import { Chart } from "../components/Chart";
import snippets from "../assets/snippets.json";
import languages from "../assets/languages.json";
import "./Page.css";

const Page: React.FC = () => {
    const snippet = snippets[0];
    const name = snippet.title;
    const [selectedLanguage, setSelectedLanguage] = React.useState(
        languages[0]
    );

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                    <div slot="end">
                        <Theme />
                    </div>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonNote className="ion-margin ion-padding">
                    {snippet.description}
                </IonNote>
                <div className="ion-margin">
                    <Chart selectedLanguage={selectedLanguage} />
                </div>
                <div className="ion-margin">
                    <CodeContainer
                        snippet={snippet.snippet}
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                    />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page;
