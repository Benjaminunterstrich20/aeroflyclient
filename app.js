// IP deines PCs / Bridge-Server, WebSocket Port
const pcIP = "192.168.0.100";
const wsPort = "8080";

const ws = new WebSocket(`ws://${pcIP}:${wsPort}`);

ws.onopen = () => console.log("Verbunden zum Aerofly Server!");
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    document.getElementById("altitude").textContent = data.altitude + " ft";
    document.getElementById("speed").textContent = data.speed + " kt";
    document.getElementById("heading").textContent = data.heading + "°";

    // Horizon kippen
    const line = document.querySelector(".line");
    line.style.transform = `rotate(${data.pitch || 0}deg)`;
};
ws.onclose = () => console.log("Verbindung geschlossen");
ws.onerror = (err) => console.error("WebSocket Fehler:", err);
