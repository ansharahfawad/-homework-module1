$(document).ready(function () {

    // When an activity cell is clicked
    $(".activity-cell").click(function () {

        var content = $(this).text().trim();

        // Ignore cells that are not available
        if (content === "Not Available") {
            return;
        }

        // Toggle the selected appearance
        $(this).toggleClass("selected");

        var displayBox = $("#displaySelected");
        var result = $("#result");

        // Identify the selected cell's column index
        var columnIndex = $(this).index();

        // Get the corresponding cliff name from the table header
        var cliffName = $(".activity-table tr:first th")
            .eq(columnIndex)
            .text()
            .trim();

        // Check whether the cell is now selected
        if ($(this).hasClass("selected")) {

            // Show the display box
            displayBox.css("visibility", "visible");

            // Add the activity name and cliff site
            result.append(
                $("<p>").text(content + " at " + cliffName)
            );

        } else {

            // Remove the matching activity from the display list
            result.find("p").filter(function () {
                return $(this).text() === content + " at " + cliffName;
            }).remove();

            // Hide the display box when no activities remain
            if (result.find("p").length === 0) {
                displayBox.css("visibility", "hidden");
            }
        }
    });

});
