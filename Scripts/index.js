// Get the container div
const container = document.getElementById("main-slideshow");
var duplicate;
var firstPicWidth;

// Set the initial position of the container
let position1 = 0;
let position2 = 0;

function dupeImg() {
  // Duplicate the container
  duplicate = container.cloneNode(true); // TODO remove its id
  duplicate.id = "duplicate";
  // foreach child img
  // iterate over each child element of duplicate and change its background color
  //   for (let i = 0; i < duplicate.children.length; i++) {
  //     let child = duplicate.children[i];
  //     child.style.backgroundColor = "rgba(200,100,0,.5)";
  //     child.style.backgroundBlendMode = "multiply";
  //   }
  //   duplicate.style.backgroundColor = "rgba(200,100,0,.5)";
  //   duplicate.style.backgroundBlendMode = "multiply";
  //   lastPicOnFirst = container.lastElementChild.cloneNode(true);
  //   duplicate.insertBefore(lastPicOnFirst, duplicate.firstChild);
  //   firstPicWidth = container.firstElementChild.offsetWidth;
  //   duplicate.style.marginLeft = `-${firstPicWidth}px`;
  //   console.log(firstPicWidth);
  // Append the duplicate container to the parent element
  container.parentNode.appendChild(duplicate);
}

// Function to move the container to the left
function moveContainer() {
  // Increment the position by a certain amount
  position1 -= 1;
  position2 -= 1;
  // Check if the container has moved completely to the left
  if (position1 <= -container.offsetWidth /* + firstPicWidth*/) {
    // Reset the position of the duplicate container
    //position1 += container.offsetWidth - firstPicWidth + duplicate.offsetWidth;
    position1 = 2 * duplicate.offsetWidth + position2 - 1; // + position2; //duplicate.offsetWidth + position2; // + container.offsetWidth;
    // console.log(position2);
    // console.log("width: " + duplicate.offsetWidth);
    // console.log(`setting to ${position1}`);
  }
  if (position2 <= -duplicate.offsetWidth - container.offsetWidth) {
    // Reset the position of the duplicate container
    position2 = position1;
    console.log(position1);
    console.log("width: " + container.offsetWidth);
    console.log(`setting to ${position1}`);
  }

  // Apply the new position to the container
  container.style.transform = `translateX(${position1}px)`;
  duplicate.style.transform = `translateX(${position2}px)`;

  // Request the next animation frame
  requestAnimationFrame(moveContainer);
}

// Start the animation
dupeImg();
moveContainer();
