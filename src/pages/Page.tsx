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
import snippets from "../assets/snippets.json";
import "./Page.css";

const Page: React.FC = () => {
    const name = "Example";
    const snippet = snippets[0];

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
                    <CodeContainer snippet={snippet.snippet} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page;
