var GridTask = GridTask || {};
var a =
    GridTask.Game = {
        maxActive:0,
        count:0,
        createTable: function () {
            var tableSize = document.getElementById("TableSize").value;
            GridTask.Game.maxActive = document.getElementById("MaxActive").value;
            GridTask.Game.init(tableSize, GridTask.Game.maxActive);

        },
        init: function (N, X) {
            var row = "";
            var col = "";
            var tableUI = "";
            for (var i = 0; i < N; i++) {
                col = "<div id='col" + (i + 1) + "'>{row}</div>";
                row = "";
                for (var j = 0; j < N; j++) {
                    row = row + "<div class='tableRow' id='row" + (j + 1) + "'></div>";
                }
                //col = document.getElementById("col"+i+1).value = row;
                tableUI += col.replace("{row}", row);
            }

            document.getElementById("table").innerHTML = tableUI;
            GridTask.Game.appendHoverEvent();
        },

        reset: function () {
            location.reload();
        },
        mouseOver: function () {
            document.getElementsByClassName("tableRow").style.color = "red";
        },
        appendHoverEvent: function () {

            var tableRow = [].slice.call(document.getElementsByClassName("tableRow"));
            tableRow.forEach(tab => {
                tab.addEventListener("mouseenter", () => {
                    // var hrDisplay = this;
                    // if(hrDisplay.classList) {
                    //     hrDisplay.classList.add("active");
                    // } else {

                    // }
                    tab.classList.add("active");
                    if ( GridTask.Game.count ==  GridTask.Game.maxActive) {
                        window.alert('END');
                    }
                    GridTask.Game.count = GridTask.Game.count + 1;
                });

                tab.addEventListener("mouseleave", () => {
                    // var hrDisplay = this;
                    setTimeout(() => {
                        tab.classList.remove("active");
                    }, 500);

                });

            }) 
        },
    }
//document.getElementsByClassName("tableRow").addEventListener("mouseover",function(){document.getElementsByClassName("tableRow").style.color = "red"});
//document.getElementsByClassName("tableRow").addEventListener("mouseout",GridTask.Game.mouseOver());



