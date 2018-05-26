$(document).ready(function () {
    $.fn.serializeObject = function () {
        var userInput = {};
        var userArray = this.serializeArray();

        for (i = 0; i < userArray.length; i++) {
            var obj = userArray[i];
            if (userInput[obj.name] !== undefined) {
                if (!userInput[obj.name].push) {
                    userInput[obj.name] = [userInput[obj.name]];
                }
                userInput[obj.name].push(obj.value || '');
            } else {
                userInput[obj.name] = obj.value || '';
            }
        }
        return userInput;
    };

    $(function () {
        $('form').submit(function (e) {
            e.preventDefault();
            var data = $('form').serializeObject();
            var tr = "<tr>";
            tr += "<td>" + data["name"] + "</td>";
            tr += "<td>" + data["date"] + "</td>";
            tr += "<td>" + data["assigned"] + "</td></tr>";
            $("#mytable").prepend(tr);
            obj.push(data);
            this.reset();
        });
        var obj = [{
            "name": "Test Task #1",
            "date": "12/01/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #2",
            "date": "12/02/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #3",
            "date": "12/03/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #4",
            "date": "12/04/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #5",
            "date": "12/05/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #6",
            "date": "12/06/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #7",
            "date": "12/07/2012",
            "assigned": "John Doe"
        }];
        var tbl = $("<table/>").attr("id", "mytable");
        $("#jsonData").prepend(tbl);
        var quotes = '';
        for (var i = 0; i < obj.length; i++) {
            quotes += "<tr>";
            quotes += "<td>" + obj[i]["name"] + "</td>";
            quotes += "<td>" + obj[i]["date"] + "</td>";
            quotes += "<td>" + obj[i]["assigned"] + "</td></tr>";
        }
        $("#mytable").prepend(quotes);
    });
});
