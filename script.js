function redirectToDronePage(droneName, htmlPage) {
    // Encode the drone name for URL
    var encodedDroneName = encodeURIComponent(droneName);
    // Redirect to the drone description page with the encoded drone name as parameter
    window.location.href = 'Drones/' + htmlPage + '?Drone=' + encodedDroneName;
}
