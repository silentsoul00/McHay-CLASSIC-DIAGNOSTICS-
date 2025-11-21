document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let symptoms = document.getElementById("symptoms").value;

    document.getElementById("submittedComplaints").innerHTML += `
        <div class="complaint">
            <h3>${name}</h3>
            <p>${symptoms}</p>
            <hr>
        </div>
    `;

    this.reset();
});
