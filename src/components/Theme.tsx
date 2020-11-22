import { IonItem, IonLabel, IonList, IonToggle } from "@ionic/react";
import React, { useState } from "react";
import "./Theme.scss";

export const Theme: React.FC = () => {
    const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
    const [checked, setChecked] = useState(isDarkPreferred);
    document.body.classList.toggle("dark", checked);

    return (
        <IonList>
            <IonItem lines="none">
                <IonLabel>Dark Theme</IonLabel>
                <IonToggle
                    slot="end"
                    checked={checked}
                    onIonChange={event => {
                        document.body.classList.toggle(
                            "dark",
                            event.detail.checked
                        );
                        setChecked(event.detail.checked);
                    }}
                ></IonToggle>
            </IonItem>
        </IonList>
    );
};
