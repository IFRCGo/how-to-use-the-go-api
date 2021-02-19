import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/react';
import React from 'react';
import './Theme.scss';

interface ThemeProps {
    isDarkThemeChecked: boolean;
    setDarkThemeChecked: (setDarkTheme: boolean) => void;
}

export const Theme: React.FC<ThemeProps> = ({
    isDarkThemeChecked,
    setDarkThemeChecked,
}) => {
    document.body.classList.toggle('dark', isDarkThemeChecked);

    return (
        <IonList>
            <IonItem lines='none'>
                <IonLabel>Dark Theme</IonLabel>
                <IonToggle
                    slot='end'
                    checked={isDarkThemeChecked}
                    onIonChange={(event) => {
                        document.body.classList.toggle(
                            'dark',
                            event.detail.checked
                        );
                        setDarkThemeChecked(event.detail.checked);
                    }}
                ></IonToggle>
            </IonItem>
        </IonList>
    );
};
