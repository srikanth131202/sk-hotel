function selectRoom(roomName) {
    document.getElementById("room").value = roomName;
}

function bookRoom(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const room = document.getElementById("room").value;

    fetch("http://localhost:3000/book", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            date: date,
            room: room
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        alert("Error booking room");
        console.error(error);
    });
}
