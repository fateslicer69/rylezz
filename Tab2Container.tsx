import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonPopover, IonButtons, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import './Tab2Container.css'; // Import your CSS file
import ChatInterface from './ChatInterface';

const Tab2Container: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle>RailMadad</IonTitle>
            <IonButtons slot="end">
              {/* Trigger the popover when clicking the settings icon */}
              <IonIcon
                className="settings"
                icon={settingsOutline}
                onClick={() => setShowPopover(true)}  // Show popover when clicking the icon
              />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      <IonContent>
        {/* Your content here */}
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={() => setShowPopover(false)}
        >
          <div className="popover-content">
            <h3>Settings Menu</h3>
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
          </div>
         
           
        </IonPopover>
        <div>
         <ChatInterface />
        </div>
      </IonContent>
      
  
    </IonPage>
  );  
};

export default Tab2Container;



