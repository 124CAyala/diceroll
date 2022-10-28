function getDieValue() {
    var randomNum = Math.floor(Math.random() * 6);
    const element = document.getElementById("num");
  
    switch (randomNum) {
      case 0: return '1';
        break;
      case 1: return '2';
        break;
      case 2: return '3';
        break;
      case 3: return '4';
        break;
      case 4: return '5';
        break;
      case 5: return '6';
        break;
      default:
        console.log("Uh Oh...")
    }
  }
  
  console.log(getDieValue());

  function displayValue() {
    var value = getDieValue();
    document.getElementById(num).innerHTML(value)
  }