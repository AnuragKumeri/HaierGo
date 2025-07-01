// Set the minimum selectable date to today
(function enforceMinDate() {
    const dateInput = document.getElementById("date");
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  })();
  
  // Simple handler to “process” the booking
  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const from = e.target.from.value.trim();
    const to = e.target.to.value.trim();
    const date = e.target.date.value;
    const pax = e.target.passengers.value;
  
    // Basic validation
    if (from === to) {
      return showMessage("Departure and arrival airports must be different.");
    }
  
    const options = { year: "numeric", month: "long", day: "numeric" };
    const niceDate = new Date(date).toLocaleDateString(undefined, options);
  
    showMessage(
      `🛫 Searching flights from <strong>${from}</strong> to <strong>${to}</strong>
       on <strong>${niceDate}</strong> for <strong>${pax}</strong> passenger(s)…`
    );
  
    // This is where you'd call an API, etc.
  });
  
  function showMessage(msg) {
    const out = document.getElementById("output");
    out.innerHTML = msg;
  }
  