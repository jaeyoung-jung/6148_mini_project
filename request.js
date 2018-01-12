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
            //console.log();
            result += handleComment(json.data[i]);
        }
        $("#comments").html(result);
    })
    .fail(function() {
        $("#comments").html('<div class="ui error message"><h4 class="ui header">There was an error connecting to the PHP server.</h4><p>Contact a Network Adminstrator if this problem persists.</p></div>');
    });
function handleComment(i) {
    return '<div class="ui raised segment"><h4 class="ui header"> Posted by: <a href="mailto:' + i.email + '">' + i.name + '</a></h4><p>' + i.comment + '</p></div>';
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
