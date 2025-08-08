import React from "react";
import { useEffect, useState } from 'react';
import './App.css';
import mainBg from './assets/mainBg.jpg';
import heart from './assets/heart.png';
import colorfulOnTheStairs from './assets/colorfulOnTheStairs.jpg';
import colorfulBackOnTheStairs from './assets/colorfulBackOnTheStairs.jpg';
import groomHouse from './assets/groomHouse.jpg'
import brideHouse from './assets/brideHouse.jpg'
import catedral from './assets/cathedral.jpg'
import registration from './assets/registration.PNG'
import restoraunt from './assets/restoraunt.JPG'
import assortion2 from './assets/2.JPG'
import assortion3 from './assets/3.JPG'
import point from './assets/point.png'
import loveSong from './assets/Lovesong.mp3'

function App() {
  const [showMainApp, setShowMainApp] = useState(false);
  const [audio] = useState(new Audio(loveSong));
  
  const targetDate = '2025-08-30'
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleEnterApp = () => {
    audio.loop = true;
    audio.play().catch(error => {
      console.log('Audio playback failed:', error);
    });
    setShowMainApp(true);
  };

  // Welcome screen
  if (!showMainApp) {
    return (
      <div className="welcome-screen" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#AAB99A',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div style={{fontFamily: 'GeraldinePersonalUseItalic', fontSize: '5rem', color: '#AAB99A', marginBottom: '50px', fontWeight: 'normal', fontStyle: 'italic', position: 'relative', display: 'inline-block'}}>
          <span style={{position: 'relative'}}>R</span>
          <span style={{position: 'relative', marginLeft: '-15px', top: '15px'}}>A</span>
        </div>
        <h1 className="armenian-heading" style={{fontSize: '3rem', marginBottom: '20px', color: '#AAB99A'}}>
          Հարսանյաց հրավեր
        </h1>
        <p style={{fontSize: '1.8rem', marginBottom: '40px', maxWidth: '500px', color: '#AAB99A'}}>
          Welcome to our wedding invitation
        </p>
        <button 
          onClick={handleEnterApp}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#AAB99A',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            fontFamily: 'ArmAllegro, Arial, sans-serif'
          }}
        >
          <span>Enter Our Wedding Invitation</span>
          <img src={heart} alt="heart" style={{width: '32px', height: '32px', marginLeft: '8px'}} />
        </button>
      </div>
    );
  }

  // Main wedding invitation app
  return (
    <div className="main_bg">
      <div className='starting_bg'>
        <div style={{fontFamily: 'ArmAllegro, Arial, sans-serif', fontSize: '6rem', color: '#F3E9DC', marginBottom: '100px', fontWeight: 'bold', fontStyle: 'normal', position: 'relative', display: 'inline-block'}}>
          <span style={{position: 'relative', textShadow: '4px 4px 8px rgba(0,0,0,0.8)'}}>R</span>
          <span style={{position: 'relative', marginLeft: '-50px', top: '30px', textShadow: '4px 4px 8px rgba(0,0,0,0.8)'}}>A</span>
        </div>
        <h2 style={{fontSize: '2rem', marginBottom: '100px', color: '#F3E9DC'}}>Our forever begins today</h2>
      </div>

      <div className='invitation'>
        <h1 className="armenian-heading">Հարսանյաց հրավեր</h1>
        <h2 className="armenian-text">Հարգելի ընկերներ և բարեկամներ. <br /> Հրավիրում ենք Ձեզ՝ կիսելու մեզ հետ մեր կյանքի ամենահիշարժան և կարևոր օրը:</h2>
      </div>

      <img alt='wlooking' src={colorfulOnTheStairs} className='colorfulOnTheStairsLooking' />

      <div className='saveTheDateMainContainer'>
        <p>Save the date</p>

        <div className='saveTheDateContainer'>
          <div className='saveTheDate1'>
            <p className='saveTheDate_Date'>30</p>
          </div>
          <div className='saveTheDate2'>
            <p className='saveTheDate_Date'>08</p>
          </div>
          <div className='saveTheDate3'>
            <p className='saveTheDate_Date'>25</p>
          </div>
        </div>

        <div className='countdownContainer' style={{display: 'flex', gap: '0px', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', width: '100%'}}>
          <div className='armenian-text countdown-text' style={{marginRight: '4px', fontSize: '22px', lineHeight: '1.3', width: 'auto', minWidth: 'auto'}}>
            <span className="countdown-number" style={{marginRight: '3px', fontWeight: 'bold'}}>{timeLeft.days}</span>Օր
          </div>
          <div className='armenian-text countdown-text' style={{marginRight: '4px', fontSize: '22px', lineHeight: '1.3', width: 'auto', minWidth: 'auto'}}>
            <span className="countdown-number" style={{marginRight: '3px', fontWeight: 'bold'}}>{timeLeft.hours}</span>Ժամ
          </div>
          <div className='armenian-text countdown-text' style={{marginRight: '4px', fontSize: '22px', lineHeight: '1.3', width: 'auto', minWidth: 'auto'}}>
            <span className="countdown-number" style={{marginRight: '3px', fontWeight: 'bold'}}>{timeLeft.minutes}</span>Րոպե
          </div>
          <div className='armenian-text countdown-text' style={{marginRight: '0px', fontSize: '22px', lineHeight: '1.3', width: 'auto', minWidth: 'auto'}}>
            <span className="countdown-number" style={{marginRight: '3px', fontWeight: 'bold'}}>{timeLeft.seconds}</span>Վայրկյան
          </div>
        </div>
      </div>

      <div className='asortion'>
        <img alt='' src={assortion2} className='assortion1' />
        <img alt='' src={assortion3} className='assortion2' />
      </div>

      <div className='dailyProgram'>
        <h1 className="armenian-heading">Օրվա ծրագիր</h1>

        <div className='eachProgram'>
          <img alt='' src={groomHouse} />
          <div className='programInfo'>
            <img alt='point' src={point} style={{width: '80px', height: '40px', objectFit: 'contain', borderRadius: '8px', marginBottom: '10px'}} />
            <b className="armenian-text">Փեսայի տուն</b>
            <p className="armenian-text">ժ. 11:00</p>
            <p className="armenian-text">ք. Երևան, Նորաշեն 47</p>
          </div>
        </div>
        <div className='eachProgram'>
          <div className='programInfo'>
            <img alt='point' src={point} style={{width: '80px', height: '40px', objectFit: 'contain', borderRadius: '8px', marginBottom: '10px'}} />
            <b className="armenian-text">Հարսի տուն</b>
            <p className="armenian-text">ժ. 13:00</p>
            <p className="armenian-text">ք. Երևան, Նոր-Նորք Մառի 5</p>
          </div>
          <img alt='' src={brideHouse} />
        </div>
        <div className='eachProgram'>
          <img alt='' src={catedral} />
          <div className='programInfo'>
            <img alt='point' src={point} style={{width: '80px', height: '40px', objectFit: 'contain', borderRadius: '8px', marginBottom: '10px'}} />
            <b className="armenian-text">Պսակադրություն</b>
            <p className="armenian-text">ժ. 15:30</p>
            <p className="armenian-text">Սաղմոսավանք</p>
          </div>
        </div>
        <div className='eachProgram'>
          <div className='programInfo'>
            <img alt='point' src={point} style={{width: '80px', height: '40px', objectFit: 'contain', borderRadius: '8px', marginBottom: '10px'}} />
            <b className="armenian-text">Ամուսնության գրանցում</b>
            <p className="armenian-text">ժ. 16:00</p>
            <p className="armenian-text">Սաղմոսավանք</p>
          </div>
          <img alt='' src={registration} />
        </div>
        <div className='eachProgram'>
          <img alt='' src={restoraunt} />
          <div className='programInfo'>
            <img alt='point' src={point} style={{width: '80px', height: '40px', objectFit: 'contain', borderRadius: '8px', marginBottom: '10px'}} />
            <b className="armenian-text">Հարսանյաց հանդիսություն</b>
            <p className="armenian-text">ժ. 17:00</p>
            <p>Ashtarak Hall - <span className="armenian-text">ք. Աշտարակ Երևանյան 101/1</span></p>
          </div>
        </div>
      </div>

      <img alt='' src={colorfulBackOnTheStairs} className='colorfulOnTheStairsBackWalking' />

      <h1 className="waiting armenian-heading">Սիրով սպասում ենք</h1>

      <div style={{filter: 'brightness(0) saturate(100%) invert(23%) sepia(11%) saturate(2851%) hue-rotate(55deg) brightness(97%) contrast(98%)'}}>
        <img alt='heart' src={heart} className='love-arrow' style={{width: '200px', height: '200px', objectFit: 'contain', marginTop: '20px'}} />
      </div>

      <br />
    </div>
  );
}

export default App;