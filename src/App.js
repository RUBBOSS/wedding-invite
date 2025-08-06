import React from "react";
import { useEffect, useState } from 'react';
import './App.css';
import RA from './assets/RA.png';
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
import loveArrow from './assets/loveArrow.png'
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}>
        <img src={RA} alt='R&A' style={{width: '150px', marginBottom: '30px'}} />
        <h1 className="armenian-heading" style={{fontSize: '3rem', marginBottom: '20px'}}>
          Հարսանյաց հրավեր
        </h1>
        <p style={{fontSize: '1.2rem', marginBottom: '40px', maxWidth: '500px'}}>
          Welcome to our wedding invitation
        </p>
        <button 
          onClick={handleEnterApp}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            fontFamily: 'ArmAllegro, Arial, sans-serif'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#ff5252';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ff6b6b';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Enter Our Wedding Invitation 💕
        </button>
      </div>
    );
  }

  // Main wedding invitation app
  return (
    <div className="main_bg">
      <div className='starting_bg'>
        <img src={RA} alt='R&A' />
        <p>__________________</p>
        <h2>Our forever begins today</h2>
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

        <div className='countdownContainer'>
          <div className='armenian-text countdown-text' style={{fontSize: '32px !important', lineHeight: '0.8 !important'}}>{timeLeft.days} Օր</div>
          <div className='armenian-text countdown-text' style={{fontSize: '32px !important', lineHeight: '0.8 !important'}}>{timeLeft.hours} Ժամ</div>
          <div className='armenian-text countdown-text' style={{fontSize: '32px !important', lineHeight: '0.8 !important'}}>{timeLeft.minutes} Րոպե</div>
          <div className='armenian-text countdown-text' style={{fontSize: '32px !important', lineHeight: '0.8 !important'}}>{timeLeft.seconds} Վայրկյան</div>
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

      <img alt='love arrow' src={loveArrow} className='love-arrow' style={{width: '200px', height: '200px', objectFit: 'contain', marginTop: '20px'}} />

      <br />
    </div>
  );
}

export default App;