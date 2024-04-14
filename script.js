<<<<<<< HEAD
function redirectToDronePage(droneName, htmlPage) {

    var encodedDroneName = encodeURIComponent(droneName);

    window.location.href = 'Drones/' + htmlPage + '?Drone=' + encodedDroneName;
}
=======
function redirectToDronePage(droneName, htmlPage) {
    // Encode the drone name for URL
    var encodedDroneName = encodeURIComponent(droneName);
    // Redirect to the drone description page with the encoded drone name as parameter
    window.location.href = 'Drones/' + htmlPage + '?Drone=' + encodedDroneName;
}
>>>>>>> b0b0811a06774c014fb5bcd08f7f96bdbca7ade6
