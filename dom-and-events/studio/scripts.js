// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function () {

    let rocketPosX = 0;
    let rocketPosY = 0;
    //BUTTONS
    const takeOffButton = document.getElementById('takeoff');
    const abortButton = document.getElementById('missionAbort');
    const landButton = document.getElementById('landing');

    //AREAS
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById ('spaceShuttleHeight');
    
    //Roceket ELEMENT
    const rocket = document.getElementById('rocket')
    
    takeOffButton.addEventListener('click', function () {
        window.confirm('Confirm that the shuttle is ready for takeoff.') 
            if (confirm) {
                flightStatus.innerHTML = 'Shuttle in flight.'
                shuttleBackground.style.backgroundColor = 'blue';
                shuttleHeight.innerHTML = ('10000');
            }
    });

    landButton.addEventListener('click', function (event) {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = ('0');
    })

    abortButton.addEventListener('click', function (event) {
       let shouldAbort = window.confirm('Confirm that you want to abort the mission.')
        if (shouldAbort) {
            flightStatus.innerHTML = 'Mission aborted';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = ('0');
        }
    })

document.addEventListener('click', function(event){
    if (event.target.id === 'left') {
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }

    if (event.target.id === 'right') {
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }

    if (event.target.id === 'up') {
        rocketPosY += 10
        rocket.style.marginBottom = rocketPosY + 'px';
    }

    if (event.target.id === 'down') {
        rocketPosY -= 10
        rocket.style.marginBottom = rocketPosY + 'px';
    }
})

});
