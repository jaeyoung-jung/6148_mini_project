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
            result += handleComment(i);
        }
        $(".comments").html(result);
    })
    .fail(function() {
        $(".comments").html('<p class="error">Error: Unable to connect to comment.php</p>');
    });
function handleComment(comment) {
    return '<div><div class="name"> Posted by' + name + ':</div><div class="comment">' + comment + '</div></div>';
}

function submitComment() {
    console.log("HI");
    commentData = {
        name : "Anon",
        email : "Anon@boards.4chan.org",
        comment : $("#submit").val(),
    };
    console.log($("#submit").val());
    $("#submit").val("");
    $.ajax({
        method : 'POST',
        data : commentData,
        dataType : "json",
        url: "addcomment.php",
    }).done(console.log).fail(console.log);
}
