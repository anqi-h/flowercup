// cup Object
let cup = {
  state: "Placed",
}


function setup() {
  //createCanvas(displayWidth 800, displayHeight 600);
  createCanvas(450,1000);
  background(0);

  const connectButton = createButton("Connect");
  connectButton.mousePressed(connectButtonPressed);

  const disconnectButton = createButton("Disconnect");
  disconnectButton.mousePressed(disconnectButtonPressed);
}

function handleData(status) {

  if (cup.state !== status) { //check if status is different from previous

    if (status === "Placed") {
      statePlace = createImg("videos/flower1.gif")
      statePlace.position(100, 100); 
    } else if (status === "Lifted") {
      stateLift = createImg("videos/flower2.gif")
      stateLift.position(100, 100);
    } else if (status === "Pouring") {
      statePour = createImg("videos/flower3.gif")
      statePour.position(100, 100);
    }

    cup.state = status; //update the status
    print("current state:" + status);
  }
}


function keyPressed() {
  if (keyCode === 32) { //press SPACE BAR to turn on fullscreen.
    toggleFullScreen();
  }
}

function toggleFullScreen() {
  let fs = fullscreen();
  fullscreen(!fs);
}
