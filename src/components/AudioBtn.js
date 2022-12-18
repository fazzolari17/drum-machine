import React from 'react';

const AudioBtn = ({ soundLink, id, label, isActive, setButtonInfo, setDisplayText, buttonInfo, power, volume }) => {

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const changeButtonColor = (id) => {
    setButtonInfo(prev => prev.map(item => {
      if (item.label === id) {
        return { ...item, isActive: !item.isActive };
      } else {
        return item;
      }
    }))
  };
  
  const findDisplayText = (id) => {
    const textToDisplay = buttonInfo.find(item => item.label === id);
    return textToDisplay.display
  };

  const handleClick = (e) => {
    if (!power) {
      return;
    };

    const audio = e.target.children[0];

    setDisplayText(findDisplayText(audio.id));
    setTimeout(() => {
      setDisplayText('');
    }, 500)

    changeButtonColor(e.target.children[0].id);
    setTimeout(() => {
      changeButtonColor(e.target.children[0].id);
    }, 50);

    audio.play();
  };

  const handleKeyDown = (e) => {
    if (!power) {
      return;
    };
    const audio = document.getElementById(e.key.toUpperCase());
    if (audio === null) {
      return;
    }

    setDisplayText(findDisplayText(audio.id));
    setTimeout(() => {
      setDisplayText('');
    }, 500)
    changeButtonColor(e.key.toUpperCase());
    setTimeout(() => {
      changeButtonColor(e.key.toUpperCase());
    }, 50);
    audio.play()

  };

  return (
    <div
      tabIndex={0}
      className={'drum-pad'}
      id={id}
      onClick={(e) => handleClick(e)}
      onKeyDown={handleKeyDown}
      style={{backgroundColor: isActive ? 'yellow' : '#b3b3b3' }}
    >
      {label}
      <audio src={soundLink} className={'clip'} id={label} volume={volume/100}>
      </audio>
    </div>

  )
};

export default AudioBtn;