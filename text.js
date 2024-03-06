// Check if Session Storage is supported by the browser
if (typeof(Storage) !== "undefined") {
    // Check if device type is already stored in Session Storage
    if (!sessionStorage.getItem('deviceType')) {
        // Detect the device type
        var deviceType = detectDeviceType();
        // Store the device type in Session Storage
        sessionStorage.setItem('deviceType', deviceType);
    }
}

// Function to detect the device type
function detectDeviceType() {
    var userAgent = navigator.userAgent;
    // Check if the user agent string contains any indication of the device type
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))|fennec|puffin|kindle|(gt\-p1000)|(nexus 7)|nexus 8|(samsungtablet)/i.test(userAgent)) {
        return 'tablet';
    } else if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|windows phone|trident|opera mobi|mobilesafari|htc|nokia|sony|symbian|samsung|lg|htc|mot|mot\-/i.test(userAgent)) {
        return 'mobile';
    } else {
        return 'pc';
    }
}
