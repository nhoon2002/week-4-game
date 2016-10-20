
    $(document).ready(
      function(){

        // Initialize Variables
        var Scoretobeat;
        var userScore;
        var crystalValues = [0,0,0,0];
        var crystalImageLinks = ["assets/images/jewel1.JPG", "assets/images/jewel2.JPG", "assets/images/jewel3.JPG", "assets/images/jewel4.JPG"]
        var win_count = 0;
        var loss_count = 0;

        //jquery declarations for image crystals with attributes
        var imageCrystal1 = $('<img>');
        imageCrystal1.attr(
            'src',
            crystalImageLinks[0]
        );
        imageCrystal1.attr('alt', 'crystals');
        imageCrystal1.addClass('crystalImage');
        $('#crystal_container').append(imageCrystal1);


        var imageCrystal2 = $('<img>');
        imageCrystal2.attr(
            'src',
            crystalImageLinks[1]
        );
        imageCrystal2.attr('alt', 'crystals');
        imageCrystal2.addClass('crystalImage');
        $('#crystal_container').append(imageCrystal2);



        var imageCrystal3 = $('<img>');
        imageCrystal3.attr(
            'src',
            crystalImageLinks[2]
        );
        imageCrystal3.attr('alt', 'crystals');
        imageCrystal3.addClass('crystalImage');
        $('#crystal_container').append(imageCrystal3);



        var imageCrystal4 = $('<img>');
        imageCrystal4.attr(
            'src',
            crystalImageLinks[3]
        );
        imageCrystal4.attr('alt', 'crystals');
        imageCrystal4.addClass('crystalImage');
        $('#crystal_container').append(imageCrystal4);




        //Reset function for new values
        function newGame () {

            //assigns a random integer from [19 - 120]
            Scoretobeat = Math.floor(Math.random() * (120-19+1)) + 19;

            //resets user score to 0
            userScore = 0;

            //prints out current user score, win/loss counts, and score to match
            document.querySelector("#totalscore").innerHTML = "<h2>Current score: </h2>" + userScore;
            $("#winsandlosses").html("<h2> Wins: " + win_count + "<br>" + "Losses: " + loss_count + "</h2");
            $("#scoretomatch").html("<h2>Score to match: </h2>" + Scoretobeat);


            for (var i = 0; i < 4; i++) {
              //assigns a random integer from [1-12], storing in an array for each crystal
              crystalValues[i] = Math.floor(Math.random() * (12-1+1)) + 1;

            }

            //randomizes the value of each crystal
            imageCrystal1.attr('data-num', crystalValues[0]);
            imageCrystal2.attr('data-num', crystalValues[1]);
            imageCrystal3.attr('data-num', crystalValues[2]);
            imageCrystal4.attr('data-num', crystalValues[3]);




            console.log(Scoretobeat, userScore, crystalValues);

        }


        //initialize game
        newGame();





              // Onclick functionality
              $('.crystalImage').on(
                'click', function() {

                  //adds score on each click
                  userScore = userScore + parseInt($(this).attr('data-num'));
                  console.log(userScore);


                  //updates the current user score
                  document.querySelector("#totalscore").innerHTML = "<h2>Current score: </h2>" + userScore;

                      //conditions for new game, update win/loss counts
                      if (userScore === Scoretobeat) {
                        alert('You won');
                        win_count++;
                        newGame();
                      } else if (userScore > Scoretobeat) {
                        alert('You lost!');
                        loss_count++;
                        newGame();
                      }

                }
              )

              console.log("wins: " + win_count +"|" + "losses: " + loss_count);









        $("#winsandlosses").html("<h2> Wins: " + win_count + "<br>" + "Losses: " + loss_count + "</h2");
        $("#scoretomatch").html("<h2>Score to match: </h2>" + Scoretobeat);












      }
    )
