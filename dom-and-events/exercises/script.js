function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
     
     missionAbort.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "red";
     });

     missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });

     missionAbort.addEventListener("click", function( event ) {
        let response = window.confirm('Are you sure you want to abort the mission?');
        // Code does NOT continue until user responds to confirm window
            if (response) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
                }
            }
     )};
    // Put your code for the exercises here.
    


window.addEventListener("load", init);
