$(document).ready(function () {
    // using string manipulation (yuck)
    // $("#main").on("click", "img", function () {
    //     var leg = $(this).attr("src");
    //     console.log(leg.search("cat"));
    //     if (leg.search("cat") > 0) {
    //         leg = leg.replace("cat", "ninja");
    //     } else {
    //         leg = leg.replace("ninja", "cat");
    //     }
    //     console.log(leg);
    //     $(this).attr("src", leg);
    // });

    // using custom attr
    $("#main").on("click", "img", function () {
        var arm = $(this).attr("src");
        $(this).attr("src", $(this).attr("alt-src"));
        $(this).attr("alt-src", arm);
    });
});
