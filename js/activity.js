$(document).ready(function () {

    var modal = $("#selectedActivitiesModal");
    var result = $("#result");

    // Build the "<activity> at <cliff>" label for a clicked cell
    function activityLabel(cell) {
        var content = cell.text().trim();
        var columnIndex = cell.index();

        var cliffName = $(".activity-table tr:first th")
            .eq(columnIndex)
            .text()
            .trim();

        return content + " at " + cliffName;
    }

    // When an activity cell is clicked
    $(".activity-cell").click(function () {

        var cell = $(this);
        var content = cell.text().trim();

        // Ignore cells that are not available
        if (content === "Not Available") {
            return;
        }

        // Toggle the selected appearance
        cell.toggleClass("selected");

        var label = activityLabel(cell);

        // Check whether the cell is now selected
        if (cell.hasClass("selected")) {

            // Add the activity name and cliff site
            result.append(
                $("<p>").text(label)
            );

        } else {

            // Remove the matching activity from the list
            result.find("p").filter(function () {
                return $(this).text() === label;
            }).remove();
        }

        // Show (or keep open) the modal with the current selections
        modal.modal("show");
    });

});