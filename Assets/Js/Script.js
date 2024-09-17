document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#dob", {
        dateFormat: "Y/m/d",
        maxDate: "today",
        onChange: function(selectedDates, dateStr, instance) {
            console.log("Selected date:", dateStr);
        }
    });
});

function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageDays < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            ageMonths--;
            ageDays += lastMonth;

            if (ageMonths < 0) {
                ageYears--;
                ageMonths = 11;
            }
        }

        document.getElementById('ageResult').innerText = `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
    } else {
        document.getElementById('ageResult').innerText = "Please select a valid date.";
    }
}
