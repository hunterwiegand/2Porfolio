let currentModal = {
    title: "",
    img: "",
    insight: "",
    info: "",
    tech: []
};

// Listen for a more info btn to be clicked tp fire off this function
$(document).on("click", ".modal-btn", function() {

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
            currentModal.info = "";
            currentModal.tech = ["Node.js", "Axios", "Spotify API", "OMBD API"]
            break;
        case "psychicGame":
            currentModal.title = "Psychic Game";
            currentModal.img = "../styles/images/mystic-spell-img.png";
            currentModal.info = "";
            currentModal.tech = ["HTML", "CSS", "JavaScript"];
            break;
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




