function StandardWestinSingle() {
    document.getElementById('btn1').addEventListener('click', StandardWestinSingle )
    document.getElementById("bed").value = "Single bed room";
    document.getElementById("room").value = "standard";
    document.getElementById('startDate').addEventListener('input', StandardWestinSingle,);
    document.getElementById('endDate').addEventListener('input', StandardWestinSingle,);
    var startDateInput = document.getElementById("startDate");
    var endDateInput = document.getElementById("endDate");
    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);
    var totaldate = Math.floor((endDate.getDate() - startDate.getDate()) * 5000);
    document.getElementById("total").value = "฿" + totaldate;
}
StandardWestinSingle();
function PremiumWestinSingle() {
    document.getElementById('btn1').addEventListener('click', PremiumWestinSingle )
    var b = document.getElementById("bed");
    b.value = "Single bed room"
    document.getElementById("room").value = "Premium";
    document.getElementById('startDate').addEventListener('input', PremiumWestinSingle,);
    document.getElementById('endDate').addEventListener('input', PremiumWestinSingle,);
    var startDateInput = document.getElementById("startDate");
    var endDateInput = document.getElementById("endDate");
    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);
    var totaldate = Math.floor((endDate.getDate() - startDate.getDate()) * 6500);
    document.getElementById("total").value = "฿" + totaldate;
}
PremiumWestinSingle();
