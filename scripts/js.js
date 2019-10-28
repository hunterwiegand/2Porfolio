let currentModal = {
    title: "",
    img: "",
    insight: "",
    info: "",
    tech: []
};

// Listen for a more info btn to be clicked tp fire off this function
$(document).on("click", ".modal-btn", function() {

    console.log(currentModal.tech);
    $("#myModalTech1").html("");
    $("#myModalTech2").html("");

    // currentModal.title = $(this).attr("data-name");

    // console.log($(this).attr("data-name"));

    // Switch statement to dynamicly set the currentModal info
    switch ($(this).attr("data-name")) {
        case "foodForThought":
            currentModal.title = "Food For Thought";
            currentModal.img = "../styles/images/fft-img.png";
            currentModal.insight = "Food For Thought was my first project working with a team. During this project I learned the basics of Firebase, and how to handle state change. I also dove into unknown waters while figuring out how to utilize the fullCalendar.js library. I have many thanks to this project for teaching me the importance of Git version control, and how to troubleshoot when gitHub doesn't play nice.";
            currentModal.info = "Food For Thought was created to solve an issue we all get faced with. 'I want to cook all my left over ingredients, but I have no idea what to make with them'. Well fret no more, because with Food For Thought all you have to do is enter your pantry items, then head over to the recipe page; select the items you want to cook with, and BAM. You are greeted with three recipes to choose from. But that's not all! After you decide you want to cook the meal, you can plan it out and choose what day you want to eat it on. This process will also populate your shopping cart with any items you're missing from the recipe."
            currentModal.tech = ["Firebase", "HTML", "CSS", "JavaScript", "jQuery", "Ajax", "Edamama API", "Bootstrap", "FullCalendar.js"]
            break;
        case "blobberRoyale":
            currentModal.title = "Blobber Royal";
            currentModal.img = "../styles/images/blobGod.jpg";
            currentModal.insight = "Blobber Royal is a multiplayer web application that utilizes voice commands for various movements. My team consisted of me and two of my colleagues. This project was really exciting for my team because we were embarking on many new technologies. This was our first dive into socket.io and the concept of web sockets. We also experimented with different voice detection apis, and javascript game engines.";
            currentModal.info = "Blobber Royal is a game where you shouting at the screen actually does something usefull! The object of the game is to shout 'Left', 'Up', 'Right', 'Down' to move your blob across the battlefield. Once you collide with an opposing blob both blobs will bounce back. You goal is to bounce the enemy blob out of the playing field until they lose all their lives."
            currentModal.tech = ["JavaScript", "jQuery", "Handlebars", "MySQL", "Sequelize", "Node.js", "Socket.io", "Phaser.io", "Microsoft Azue", "Heroku"]
            break;
        case "liriNode":
            currentModal.title = "Liri Node";
            currentModal.img = "../styles/images/node-siri-img.gif";
            currentModal.insight = "This Liri Node application really helped me grasp node.js, and writting JS server side. Here I was able to modulize my code by seperating my axios calls from the code I wrote to handle the user I/O. I also learned the importance of properly using a .env file to hide api keys";
            currentModal.info = "Liri Node App is a command line program used to take advantage of the information we can extract using the Spotify and OMBD API. Simply type 'concert-this', 'spotify-this-song', 'movie-this' followed my an artist, song, or movie and wacth as Liri Node will get you all the information you need!";
            currentModal.tech = ["Node.js", "Axios", "Spotify API", "OMBD API"]
            break;
        case "psychicGame":
            currentModal.title = "Psychic Game";
            currentModal.img = "../styles/images/mystic-spell-img.png";
            currentModal.insight = "This Hangman-like game provided a fun way to practice my JavaScript skills and manipululation to the DOM. I'd like to go back to this simple application and see how I could add some new features and styles, as well as utilize more conventional programing styles (Like not using alert()!)";
            currentModal.info = "Can you learn the spell fast enough?! In this Hangman-like game you'll guess what the spell is by attempting to spell it out. You can only make 8 inccorect guesses, so be cautious with your guesses!";
            currentModal.tech = ["HTML", "CSS", "JavaScript"];
            break;
        case "fightGame":
            currentModal.title = "Battle for Middle Earth";
            currentModal.img = "../styles/images/middle_earth.jpg";
            currentModal.insight = "This was a fun little project from my coding bootcamp. The challenge was create a turn based fighting app when no matter who you pick as a fighter, you have the possibliliy to win. I was able to pick up jQuery for this project and had a lot of fun using it.";
            currentModal.info = "It's time to fight for your rightfull land! choose your faction and fight for middle earth by facing off each of the other factions. Be cautious as to the order you fight your enemies, as you will get stronger with each attack you land.";
            currentModal.tech = ["HTML", "CSS", "Bootstrap", "jQuery", "JavaScript"];
            break;
        case "foodApp":
            currentModal.title = "Dine and Dash!";
            currentModal.img = "../styles/images/food_app.jpg";
            currentModal.insight = "This simple app was created to practice creating CRUD operations in sequelize, as well as using Heroku to host the program. I learned a lot about ORM and was able to use express-handlebars to dynamically update the DOM with the changing data being received from the mySQL database. I have plans to return to this project and really focus on the UI, since currently it is just using basic bootstrap for the format.";
            currentModal.info = "I hope you’re ready to eat, because you just entered the finest restaurant in town! Simply Choose from the menu what food you’d like to eat, and hit the ‘EAT’ button to consume it! If you’d like to eat it again, just head over to the Prep section and have the cooks cook it right up. We also allow our customers to request any food they’d like. So feel free to add to our menu as well.";
            currentModal.tech = ["Node.js", "mySQL", "Handlebars.js", "Express", "JavaScript", "Object-Relational-Mapping(ORM)", "Sequelize", "Heroku", "Bootstrap"];
    }
    

    $("#myModalTitle").html(currentModal.title);
    $("#myModalImg").attr("src", currentModal.img);
    $("#myModalInsight").html(currentModal.insight);
    $("#myModalInfo").html(currentModal.info);


    currentModal.tech.forEach(element => {

        //If the element position in the array is less than the total length divided by 2, place in myModalTech1
        // Otherwise place in myModalTech2

        if (currentModal.tech.indexOf(element) < (currentModal.tech.length)/2) {
            $("#myModalTech1").append($("<li>").html(element));
        } else {
            $("#myModalTech2").append($("<li>").html(element));
        }
    });
});




