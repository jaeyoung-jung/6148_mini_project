console.log(angular)
angular.module('requestApp', [])
    .controller('requestController', function() {
        this.loaded = "";
        this.failed = "hidden";
        this.comments = [];
        console.log("HI");
        this.update = function() {
            $.ajax({
                method : 'GET',
                data : {},
                dataType : "json",
                url: "viewcomments.php",
                cache: false,
            })
            .done(function(json) {
                const data = json.data;
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    data[i].url = data[i].email ? '<a href="mailto:{{data.email}}">{{data.name}}</a>' : '{{data.name}}';
                }
                this.comments = json.data;
            })
            .fail(function() {
                this.failed = "";
            })
            .always(function() {
                this.loaded = "hidden";
            });
        }
        this.update();
        window.setInterval(this.update, 5000);
        this.submitComment = function() {
            commentData = {
                name : this.name || "Anon",
                email : this.email,
                comment : this.comment,
            };
            console.log(commentData);
            this.name = "";
            this.email = "";
            this.comment = "";
            $.ajax({
                method : 'POST',
                data : commentData,
                dataType : "json",
                url: "addcomment.php",
            }).done(console.log).fail(console.log);
        }
    });