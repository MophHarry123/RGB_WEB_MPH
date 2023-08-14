const generateColorCode = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();
    return `rgba(${red},${green},${blue},${alpha})`;
  }

  const generateColorCode1 = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }


  
  setInterval(() => {
    document.body.style.backgroundColor = generateColorCode(); 
  }, 1250);

  setInterval(() => {
    document.body.style.color = generateColorCode1(); 
  }, 1250);

  function redirectToPage1() {
    window.location.href = "index1.html";
}

function redirectToPage2() {
    window.location.href = "index2.html";
}

