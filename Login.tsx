import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { helpCircleOutline, personAddOutline } from "ionicons/icons";
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import "./Login.css";

interface LoginProps {
  setIsLoggedIn: (status: boolean) => void; // Accept a prop to set login status
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal
  const history = useHistory(); // Get history for navigation

  const handleLogin = () => {
    // Example login validation (you can add real authentication logic here)
    if (emailOrPhone && password) {
      setIsLoggedIn(true); // Mark the user as logged in
      history.push("/tab1"); // Redirect to Home tab
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <IonPage className="bg-grad">
      <IonContent fullscreen>
        <div className="login-container">
          <div className="main-heading">
            <h1>WELCOME</h1>
          </div>

          <div className="login-form">
            <div className="input-fields">
              <IonInput
                className="input-box"
                label="GMAIL / PHONE"
                labelPlacement="floating"
                fill="outline"
                placeholder="GMAIL / PHONE"
                value={emailOrPhone}
                onIonInput={(e: CustomEvent) => setEmailOrPhone(e.detail.value)}
              />
              <IonInput
                className="input-box"
                label="PASSWORD"
                labelPlacement="floating"
                fill="outline"
                type="password"
                placeholder="Enter Password"
                value={password}
                onIonInput={(e: CustomEvent) => setPassword(e.detail.value)}
              />
            </div>

            <div className="form-buttons">
              <IonButton
                className="form-button"
                shape="round"
                fill="clear"
                onClick={handleLogin}
              >
                Login
              </IonButton>
              <IonButton className="form-button" shape="round" fill="clear">
                Sign Up
              </IonButton>
            </div>

            <div className="form-misc">
              <p>No Account?</p>
              <p className="create-acc">CREATE NEW</p>
            </div>
          </div>
          <div className="options">
            <IonCard  className="ionic-card" onClick={() => setIsModalOpen(true)}> {/* Open modal on click */}
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={helpCircleOutline} />
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonCard  onClick={() => window.open('https://railmadad.indianrailways.gov.in/', '_blank')} className="ionic-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon  icon={personAddOutline} /> 
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonCard className="ionic-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={helpCircleOutline} />
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </div>

          <div className="options-naming-container">
            <p>FAQs</p>
            <p>Contact</p>
            <p>Support</p>
          </div>
        

          {/* Modal for Help (FAQs) */}
          <IonModal isOpen={isModalOpen}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Help & FAQs</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => setIsModalOpen(false)}>Close</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header" color="light">
                    <IonLabel>First Accordion</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    First Content
                  </div>
                </IonAccordion>
                <IonAccordion value="second">
                  <IonItem slot="header" color="light">
                    <IonLabel>Second Accordion</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    Second Content
                  </div>
                </IonAccordion>
                <IonAccordion value="third">
                  <IonItem slot="header" color="light">
                    <IonLabel>Third Accordion</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    Third Content
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
            </IonContent>
          </IonModal>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
