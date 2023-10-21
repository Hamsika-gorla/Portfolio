

//Projects- show event :
$(document).ready(function(){
    $(".project-btn").click(function(){
        $(".main-content").hide();
        $(".projects").css("display","flex");
    });
});

$(document).ready(function(){
    $(".intern-btn").click(function(){
        $(".main-content").hide();
        $(".internships").css("display","flex");
        // $(".intern-btn").css("background-color","grey");
    });
});

$(document).ready(function(){
    $(".skills-btn").click(function(){
        $(".main-content").hide();
        $(".skills").css("display","flex");
    });
});

$(document).ready(function(){
    $(".edu-btn").click(function(){
        $(".main-content").hide();
        $(".edu").css("display","flex");
    });
});
$(document).ready(function(){
    $(".contact-me-btn").click(function(){
        $(".body").css("opacity","0.2");
        $(".modal").css("display","block");
    });
});


$(document).ready(function(){
    $(".close").click(function(){
        $(".modal").css("display","none");
        $(".body").css("opacity","1");
    })
})
