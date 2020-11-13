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
import { codeSlashOutline, codeSlashSharp, documentTextOutline, documentTextSharp } from 'ionicons/icons';
import './Menu.css';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>How to use the&nbsp;<a href="https://github.com/IFRCGo/go-api">go-api</a>?</IonListHeader>
          <IonNote></IonNote>
            <IonMenuToggle key={0} autoHide={false}>
            <IonItem className={location.pathname === '/' ? 'selected' : ''} routerLink='/' routerDirection="none" lines="none" detail={false}>
                <IonIcon slot="start" ios={codeSlashOutline} md={codeSlashSharp} />
                <IonLabel>Example</IonLabel>
            </IonItem>
            <IonItem href='https://goadmin.ifrc.org/docs' lines="none" detail={false} rel="noreferrer noopener" target="_blank">
                <IonIcon slot="start" ios={documentTextOutline} md={documentTextSharp} />
                <IonLabel>Documentation</IonLabel>
            </IonItem>
            </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
