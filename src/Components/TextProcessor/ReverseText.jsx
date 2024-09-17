const ReverseText = (inputString) => {
    const cleanedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    
    const reversedString = cleanedString.split('').reverse().join('');
    const botname = "BackFlipBot";
    return {botName: botname, text: reversedString};
  };

export default ReverseText;