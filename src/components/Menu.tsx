import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    codeSlashOutline,
    codeSlashSharp,
    documentTextOutline,
    documentTextSharp,
} from 'ionicons/icons';
import examples from '../assets/examples.json';
import './Menu.css';

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId='main' type='overlay'>
            <IonContent>
                <IonList id='inbox-list'>
                    <IonListHeader>
                        How to use the&nbsp;
                        <a href='https://github.com/IFRCGo/go-api'>go-api</a>?
                    </IonListHeader>
                    <IonNote></IonNote>
                    <IonMenuToggle key={0} autoHide={false}>
                        {examples.map((example) => (
                            <IonItem
                                className={
                                    location.hash === '#example' + example.id
                                        ? 'selected'
                                        : ''
                                }
                                routerLink={
                                    '/how-to-use-the-go-api#example' +
                                    example.id
                                }
                                routerDirection='none'
                                lines='none'
                                detail={false}
                                key={example.id}
                            >
                                <IonIcon
                                    slot='start'
                                    ios={codeSlashOutline}
                                    md={codeSlashSharp}
                                />
                                <IonLabel>{example.title}</IonLabel>
                            </IonItem>
                        ))}
                        <IonItem
                            href='https://goadmin.ifrc.org/docs'
                            lines='none'
                            detail={false}
                            rel='noreferrer noopener'
                            target='_blank'
                        >
                            <IonIcon
                                slot='start'
                                ios={documentTextOutline}
                                md={documentTextSharp}
                            />
                            <IonLabel>Documentation</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
