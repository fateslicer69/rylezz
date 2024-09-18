import './Tab1Container.css';
import { IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { logoAmplify } from "ionicons/icons";
import { IonButtons, IonContent, IonMenu, IonMenuButton, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonSkeletonText } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';  // Import useHistory

const Tab1Container: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true); // State to manage loading
  const history = useHistory(); // Initialize history object for navigation

  // Use useEffect to simulate content loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Load content after 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  // Function to handle navigation to Chat tab (Tab2)
  const navigateToChat = () => {
    history.push('/tab2');  // Navigate to Chat Tab (Tab2)
  };

  return (
    <>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Menu Content
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <IonIcon className='logo' icon={logoAmplify} />
              Rail Madad
            </IonTitle>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <h2>Good Morning, Hare Krishna</h2>

          {/* Conditionally render skeleton or real content */}
          {isLoading ? (
            // Skeleton content (6 cards in a grid layout)
            <div className="card-grid">
              {Array.from({ length: 6 }).map((_, index) => (
                <IonCard key={index} className="skeleton-card">
                  <IonCardHeader>
                    <IonSkeletonText animated={true} style={{ width: '60%', height: '20px' }}></IonSkeletonText>
                    <IonSkeletonText animated={true} style={{ width: '40%', height: '15px' }}></IonSkeletonText>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonSkeletonText animated={true} style={{ width: '80%', height: '30px' }}></IonSkeletonText>
                    <IonSkeletonText animated={true} style={{ width: '60%', height: '20px' }}></IonSkeletonText>
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          ) : (
            // Real content with 6 colorful cards
            <div className="card-grid">
              <IonCard className='ion-card' color="" onClick={navigateToChat}>  {/* Add onClick to navigate to Chat */}
                <IonCardHeader>
                  <IonCardTitle>Register Complaint</IonCardTitle>
                  <IonCardSubtitle>Primary Subtitle</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>

              <IonCard className='ion-card' color="">
                <IonCardHeader>
                  <IonCardTitle>Track Train</IonCardTitle>
                  <IonCardSubtitle>Secondary Subtitle</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>

              <IonCard className='ion-card' color="">
                <IonCardHeader>
                  <IonCardTitle>Tertiary Card</IonCardTitle>
                  <IonCardSubtitle>Tertiary Subtitle</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>

              <IonCard className='ion-card' color="">
                <IonCardHeader>
                  <IonCardTitle>Success Card</IonCardTitle>
                  <IonCardSubtitle>Success Subtitle</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>

              <IonCard className='ion-card' color="">
                <IonCardHeader>
                  <IonCardTitle>Warning Card</IonCardTitle>
                  <IonCardSubtitle>Warning Subtitle</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>

              <IonCard className='ion-card' color="">
                <IonCardHeader>
                  <IonCardTitle>Danger Card</IonCardTitle>
                  <IonCardSubtitle>Danger Subtitle</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </div>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1Container;
