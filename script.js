console.log("test");

$(document).ready(function () {
    $("#fadeToggle").click(function (e) { 
        e.preventDefault();
        $(".square").fadeToggle(500);
    });
});

$(document).ready(function () {
    $("#width").click(function (e) { 
        e.preventDefault();
        $(".square2").width(100);
    });
    $("#height").click(function (e) { 
        e.preventDefault();
        $(".square2").height(100);
    });

    $("#height").click(function (e) { 
        e.preventDefault();
        $(".square2").height(100);
    });

    $("#center").click(function (e) { 
        e.preventDefault();
        $("#square2").css({
            "display": "block",
            "left": "0",
            "transform": "translate(0,0)",
            "margin": "-750px auto"
        });
    });

    $("#position").click(function (e) { 
        e.preventDefault();
        $("#square2").css({
            "display": "absolute",
            "margin" : "0 0",
            "transform": "translate(700px, -700px)",
        });
    });

    $("#burger").click(function (e) { 
        e.preventDefault();
        $(".menu").addClass("menuShow");
        $(".burger").addClass("burgerNone");
    });

    $(".menu").click(function (e) { 
        e.preventDefault();
        $(".menu").removeClass("menuShow");
        $(".burger").removeClass("burgerNone");
    });

    $(".box3").click(function (e) { 
        e.preventDefault();

        var colors = [];

        for(var i = 0; i<6; i++) {
        colors[i] = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        }
        $("#color1").css({
            'background-color' : colors[0],
          });
        $("#color2").css({
            'background-color' : colors[1],
          });
        $("#color3").css({
            'background-color' : colors[2],
          });
        $("#color4").css({
            'background-color' : colors[3],
          });
        $("#color5").css({
            'background-color' : colors[4],
          });
    });

    const entryNo = [];
    const names = [];
    const surnames = [];
    const ages = [];

    $("#add").click(function (e) { 
        e.preventDefault();
        var name = $('#name').val();
        var surname = $("#surname").val();
        var date = new Date($("#date").val());
        var diffMs = Date.now() - date.getTime();
        var ageDt = new Date(diffMs);
        var age = ageDt.getUTCFullYear() - 1970;

        if (name&&surname&&age) {
            names.push(name);
            surnames.push(surname);
            ages.push(age);
            var trElement = document.createElement("tr");
            trElement.setAttribute("id", "tr"+(names.length-1));
            table.appendChild(trElement);         
        }

        for(let i = 0; i<names.length; i++) {

            if($("#tr"+[i]).empty()) {
            $("#tr"+[i]).append(
                $("<td>"+(i+1)+"</td>"),
                $("<td>"+names[i]+"</td>"),
                $("<td>"+surnames[i]+"</td>"),
                $("<td>"+ages[i]+"</td>")
            ) }
        }

        $("#name").val("");
        $("#surname").val("");
        $("#date").val("");
  
    });
});






