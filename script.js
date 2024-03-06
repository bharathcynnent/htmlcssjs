

// Get all buttons on the website
// var allButtons = document.querySelectorAll('button');

// // Iterate through each button
// allButtons.forEach(function(button) {
//   // Add a click event listener to each button
//   button.addEventListener('click', function() {
//     // Perform some action when the button is clicked
//     console.log('Button clicked:', button.textContent);
//     // You can replace the above line with your custom logic for each button click
//   });
// });

// document.body.addEventListener('click', function(event) {
//   // Function to recursively find the closest parent with the specified tag name
//   function findClosest(element, tagName) {
//     while (element && element.tagName !== tagName) {
//       element = element.parentNode;
//     }
//     return element;
//   }

//   // Handle button clicks
//   const clickedButton = findClosest(event.target, 'BUTTON');
//   if (clickedButton) {
//     console.log('Button clicked:', clickedButton.innerText);
//   }

//   // Handle link clicks
//   const clickedLink = findClosest(event.target, 'A');
//   if (clickedLink) {
//     console.log('Link clicked:', clickedLink.href);
//   }
// });

function findClosest(element, tagName) {
  while (element && element.tagName !== tagName) {
    element = element.parentNode;
  }
  return element;
}

function handleButtonClick(button) {
  console.log('Button clicked:', button.innerText);
}

function handleLinkClick(link) {
  console.log('Link clicked:', link.href);
}

document.body.addEventListener('click', function(event) {
  const clickedButton = findClosest(event.target, 'BUTTON');
  const clickedLink = findClosest(event.target, 'A');

  if (clickedButton) {
    handleButtonClick(clickedButton);
  }

  if (clickedLink) {
    handleLinkClick(clickedLink);
  }
});