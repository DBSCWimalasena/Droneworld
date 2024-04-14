function redirectToDronePage(droneName, htmlPage) {

    var encodedDroneName = encodeURIComponent(droneName);

    window.location.href = 'Drones/' + htmlPage + '?Drone=' + encodedDroneName;
}
