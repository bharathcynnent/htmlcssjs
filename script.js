


// // function detectDevice() {
// //   // Get the width of the viewport
// //   var width = window.innerWidth;

// //   // Define breakpoints for different devices
// //   var mobileMaxWidth = 425; // Example breakpoint for mobile devices
// //   var tabletMaxWidth = 1024; // Example breakpoint for tablet devices

// //   // Check the width against the breakpoints
// //   if (width <= mobileMaxWidth) {
// //       return "Mobile";
// //   } else if (width <= tabletMaxWidth) {
// //       return "Tablet";
// //   } else {
// //       return "PC";
// //   }
// // }

// // // Example usage
// // var deviceType = detectDevice();
// // console.log("Device type:", deviceType);




// // function detectDevice() {
// //     // Get the width and height of the viewport
// //     var width = window.innerWidth;
// //     var height = window.innerHeight;

// //     // Define breakpoints for different devices
// //     var mobileMaxWidth = 425; // Example breakpoint for mobile devices
// //     var tabletMaxWidth = 1024; // Example breakpoint for tablet devices
// //     var tabletMaxHeight = 1368; // Example max height for tablets

// //     // Check the width and height against the breakpoints
// //     if (width <= mobileMaxWidth || height <= mobileMaxWidth) {
// //         return "Mobile";
// //     } else if (width <= tabletMaxWidth && height <= tabletMaxHeight) {
// //         return "Tablet";
// //     } else {
// //         return "PC";
// //     }
// // }

// // // Example usage
// // var deviceType = detectDevice();
// // console.log("Device type:", deviceType);

  
// function getDeviceType() {
//     const width = Math.max(window.innerWidth, window.innerHeight);
//     const height = Math.min(window.innerWidth, window.innerHeight);

//     if (width >= 1024 && height >= 768) {
//         return "PC";
//     } else if (width >= 600 && width < 1024) {
//         return "Tablet";
//     } else {
//         return "Mobile";
//     }
// }

// const deviceType = getDeviceType();
// console.log("Device type:", deviceType);


// function detectDeviceType() {
//     const userAgent = navigator.userAgent;
   
//     if (/ipad|ipad\s+air|ipad\s+pro|playbook|(android(?!.*mobile))/i.test(userAgent)) {
//         return 'tablet';
//     } else if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|windows phone|trident|opera mobi|mobilesafari|htc|nokia|sony|symbian|samsung|lg|htc|mot|mot\-/i.test(userAgent)) {
//         return 'mobile';
//     } else {
//         return 'pc';
//     }
// }

// // Call the function and log the result to the console
// console.log(detectDeviceType());


// function detectDeviceType() {
//     var width = window.innerWidth;

//   // Define breakpoints for different devices
//   var mobileMaxWidth = 425; // Example breakpoint for mobile devices
//   var tabletMaxWidth = 991; // Example breakpoint for tablet devices

//   // Check the width against the breakpoints
//   if (width <= mobileMaxWidth) {
//       return "Mobile";
//   } else if (width <= tabletMaxWidth) {
//       return "Tablet";
//   } else {
//       return "PC";
//   }
// }
// console.log(detectDeviceType())


// function detectDeviceType() {
//     var width = window.innerWidth;
//     var height = window.innerHeight;

//     // Define breakpoints for different devices
//     var mobileMaxWidth = 425; // Example breakpoint for mobile devices
//     var tabletMaxWidth = 991; // Example breakpoint for tablet devices
//     var mobileMaxHeight = 667; // Example maximum height for mobile devices
//     var tabletMaxHeight = 1024; // Example maximum height for tablet devices

// //     // Check the width against the breakpoints
// //     if (width <= mobileMaxWidth && height <= mobileMaxHeight) {
// //         return "Mobile";
// //     } else if (width <= tabletMaxWidth && height <= tabletMaxHeight) {
// //         return "Tablet";
// //     } else {
// //         return "PC";
// //     }
// // }

// // console.log(detectDeviceType());


// function detectDeviceType() {
//     const userAgent = navigator.userAgent;
   
//     if (/tablet|ipad|playbook/i.test(userAgent)) {
//         return 'tablet';
//     } else if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|windows phone|trident|opera mobi|mobilesafari|htc|nokia|sony|symbian|samsung|lg|htc|mot|mot\-/i.test(userAgent)) {
//         return 'mobile';
//     } else {
//         return 'pc';
//     }
// }

// console.log(detectDeviceType());


// function detectDeviceType() {
//     const userAgent = navigator.userAgent;
   
//     if (/tablet|ipad|playbook/i.test(userAgent)) {
//         return 'tablet';
//     } else if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|windows phone|trident|opera mobi|mobilesafari|htc|nokia|sony|symbian|samsung|lg|htc|mot|mot\-/i.test(userAgent)) {
//         return 'mobile';
//     } else {
//         return 'pc';
//     }
//   }

// function detectDeviceType() {
//     const userAgent = navigator.userAgent;
  
//     if (/ipad/i.test(userAgent)) {
//       return 'tablet';
//     } else if (/tablet|playbook|silk|(android(?!.*mobile))/i.test(userAgent)) {
//       return 'tablet';
//     } else if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|windows phone|trident|opera mobi|mobilesafari|htc|nokia|sony|symbian|samsung|lg|htc|mot|mot\-/i.test(userAgent)) {
//       return 'mobile';
//     } else {
//       return 'pc';
//     }
//   }

// console.log(detectDeviceType())  
