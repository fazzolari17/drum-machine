import './App.css';
import React from 'react';
import { bankOne, bankTwo } from './buttonInfo';
import InputContainer from './components/InputContainer';
import AudioBtn from './components/AudioBtn';
import Footer from './components/Footer';

const App = () => {
  const [displayText, setDisplayText] = React.useState('');
  const [power, setPower] = React.useState(true);
  const [bank, setBank] = React.useState(true);
  const [buttonInfo, setButtonInfo] = React.useState();
  const [volume, setVolume] = React.useState(.5);

  React.useEffect(() => {
    if (!bank) {
      setButtonInfo(bankOne)
    } else {
      setButtonInfo(bankTwo)
    }
  }, [bank])

  const buttonsMapped = !buttonInfo ? [] : buttonInfo.map(({ id, soundLink, label, display, isActive }) => <AudioBtn
    key={id}
    id={id}
    label={label}
    soundLink={soundLink}
    isActive={isActive}
    setButtonInfo={setButtonInfo}
    buttonInfo={buttonInfo}
    setDisplayText={setDisplayText}
    power={power}
    volume={volume}
  />)

  const handlePower = () => {
    setPower(prevState => !prevState);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value / 100);

    setDisplayText(`Volume ${(volume * 100).toFixed(0)}`)
    setTimeout(() => {
      setDisplayText(``)
    }, 1000);
  };


  const handleBank = () => {
    let text;

    setBank(prevState => !prevState);

    if (bank) {
      text = 'Heater Kit'
    } else {
      text = 'Smooth Piano Kit'
    }

    setDisplayText(`${text}`)
    setTimeout(() => {
      setDisplayText(``)
    }, 1000);
  };


  return (
    <>
      <div className="App" id="drum-machine">
        <div className='buttonGrid'>
          {buttonsMapped}
        </div>
        <InputContainer
          displayText={displayText}
          handlePower={handlePower}
          handleVolume={handleVolume}
          handleBank={handleBank}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
