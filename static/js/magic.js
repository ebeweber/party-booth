$(document).ready(function() {
    // Hide everything else initially
    $(".countdown-number").hide();

    // Attach Events
    $(".start-button").click(function() {
        beginCountdown();
    });



    // Fire off countdown
    var beginCountdown = function() {
        console.log("fireOffEventSequence() called.");

        // Hide the take photo button
        $('.start-button').hide();

        // Count down.
        $('.three').show();         // 3 ..
        $('.three').bigText();
        setTimeout(goToTwo, 1000);
    };

    // 2 ..
    var goToTwo = function() {
        $('.three').hide();
        $('.two').show();
        $('.two').bigText();
        setTimeout(goToOne, 1000);
    };

    // 1 ..
    var goToOne = function() {
        $('.two').hide();
        $('.one').show();
        $('.one').bigText();
        setTimeout(goToGo, 1000);
    };

    var goToGo = function() {
        $('.one').hide();
        $('.go').show();
        $('.go').bigText();

        // This works in the console.. but not on the page
        console.log("Attempting to flash");
        $('.flash').show()
            .animate({opacity: 0.5}, 300)
            .fadeOut(300)
            .css({'opacity': 1});
    };

    // Web Cam Logic
    video = document.querySelector('video');

    navigator.webkitGetUserMedia({video:true},
        function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
        },
        function(err) {
            console.log("Unable to get video stream!");
        }
    );

      // function snap() {
      //   live = document.getElementById("live")
      //   snapshot = document.getElementById("snapshot")
      //   filmroll = document.getElementById("filmroll")

      //   // Make the canvas the same size as the live video
      //   snapshot.width = live.clientWidth
      //   snapshot.height = live.clientHeight

      //   // Draw a frame of the live video onto the canvas
      //   c = snapshot.getContext("2d")
      //   c.drawImage(live, 0, 0, snapshot.width, snapshot.height)

      //   // Create an image element with the canvas image data
      //   img = document.createElement("img")
      //   img.src = snapshot.toDataURL("image/png")
      //   img.style.padding = 5
      //   img.width = snapshot.width / 2
      //   img.height = snapshot.height / 2

      //   // Add the new image to the film roll
      //   filmroll.appendChild(img)
      // }
});
