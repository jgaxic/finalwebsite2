function countDays() {
    var startDateInput = document.getElementById("startDate");
    var endDateInput = document.getElementById("endDate");

    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);
    var timeDiff = Math.floor((endDate.getDate() - startDate.getDate()) * 5000);
    document.getElementById("total").value = timeDiff;
}
countDays();