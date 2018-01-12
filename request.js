update=function(){$.ajax({
    method : 'GET',
    data : {},
    dataType : "json",
    url: "viewcomments.php",
    cache: false,
})
    .done(function(json) {
        console.log(json.data);
        result='';
        for (i in json.data) {
            //console.log();
            result += handleComment(json.data[i]);
        }
        $("#comments").html(result);
    })
    .fail(function() {
        $("#comments").html('<div class="ui error message"><h4 class="ui header">There was an error connecting to the PHP server.</h4><p>Contact a Network Adminstrator if this problem persists.</p></div>');
    });};
function handleComment(i) {
    return '<div class="ui raised segment"><h4 class="ui header"> Posted by: ' + (i.email ? ('<a href="mailto:' + i.email + '">' + i.name + '</a>') : i.name) + '</h4><p>' + i.comment + '</p></div>';
}

update();
window.setInterval(update,5000);

function submitComment() {
    console.log("HI");
    commentData = {
        name : $("#name").val() || "Anon",
        email : $("#email").val(),
        comment : $("#submit").val(),
    };
    console.log(commentData);
    //console.log($("#submit").val());
    $("#name").val("");
    $("#email").val("");
    $("#submit").val("");
    $.ajax({
        method : 'POST',
        data : commentData,
        dataType : "json",
        url: "addcomment.php",
    }).done(console.log).fail(console.log);
}
