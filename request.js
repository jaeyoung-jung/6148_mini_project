$.ajax({
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
            result += handleComment(i.comment);
        }
        $(".comments").html(result);
    })
    .fail(function() {
        $(".comments").html('<p class="error">Error: Unable to connect to comment.php</p>');
    });
function handleComment() {
    //To Do
}

function submitComment() {
    console.log("HI");
    commentData = {
        comment : $("#submit").html(),
    }
    console.log($("#submit").html());
    $.ajax({
        method : 'POST',
        data : commentData,
        dataType : "json",
        url: "addcomment.php",
    }).done(console.log).fail(console.log);
}
