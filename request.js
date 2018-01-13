console.log("What")
angular.module('requestApp', [])
    .controller('requestController', function() {
        var request = this;
        request.loaded = "";
        request.failed = "hidden";
        request.comments = [];
        request.halp = "ui header";
        request.update = function() {
            $.ajax({
                method : 'GET',
                data : {},
                dataType : "json",
                url: "viewcomments.php",
                cache: false,
            })
            .done(function(json) {
                const data = json.data;
                for (let i = 0; i < data.length; i++) {
                    data[i].url = data[i].email ? '<a href="mailto:{{data.email}}">{{data.name}}</a>' : '{{data.name}}';
                }
                console.log(data);
                request.comments = data;
            })
            .fail(function() {
                request.failed = "";
            })
            .always(function() {
                request.loaded = "hidden";
            });
        }
        request.update();
        window.setInterval(request.update, 5000);
        request.submitComment = function() {
            commentData = {
                name : request.name || "Anon",
                email : request.email,
                comment : request.comment,
            };
            console.log(commentData);
            request.name = "";
            request.email = "";
            request.comment = "";
            $.ajax({
                method : 'POST',
                data : commentData,
                dataType : "json",
                url: "addcomment.php",
            }).done(console.log).fail(console.log);
        }
    });