// --- JAVASCRIPT: The Logic ---

// 1. Our "Database" (Array of Room Objects)
// status: 'available' or 'occupied'
// occupants: List of names currently in the room
let rooms = [
    { id: 101, occupants: [], status: 'available' },
    { id: 102, occupants: ['Alice Smith'], status: 'occupied' },
    { id: 103, occupants: ['Bob Jones', 'Charlie Day'], status: 'occupied' },
    { id: 104, occupants: [], status: 'available' },
    { id: 105, occupants: ['David Wilson'], status: 'occupied' },
    { id: 106, occupants: [], status: 'available' }
];

let currentUser = "";

// 2. Function to handle Login
function handleLogin() {
    const inputField = document.getElementById('username');
    const name = inputField.value.trim();

    if (name === "") {
        alert("Please enter your name first!");
        return;
    }

    currentUser = name;

    // Hide Login, Show Dashboard
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'block';
    
    // Update Welcome Message
    document.getElementById('welcome-text').innerText = `Welcome, ${currentUser}`;

    // Load the rooms
    renderRooms();
}

// 3. Function to handle Logout
function handleLogout() {
    currentUser = "";
    document.getElementById('username').value = ""; // Clear input
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

// 4. Function to Draw the Rooms on the screen
function renderRooms() {
    const container = document.getElementById('room-container');
    container.innerHTML = ""; // Clear previous content

    rooms.forEach(room => {
        // Create HTML for each room
        const card = document.createElement('div');
        
        // Add CSS class based on status (Green or Red border)
        card.className = `room-card status-${room.status}`;

        // Prepare Roommate Text
        let roommatesText = "No roommates yet.";
        if (room.occupants.length > 0) {
            roommatesText = room.occupants.join(", ");
        }

        // Prepare Button
        let buttonHTML = "";
        if (room.status === 'available') {
            buttonHTML = `<button class="book-btn" onclick="bookRoom(${room.id})">Book This Room</button>`;
        } else {
            buttonHTML = `<button disabled>Room Occupied</button>`;
        }

        // Put it all together
        card.innerHTML = `
            <div>
                <div class="room-title">Room ${room.id}</div>
                <div class="roommates-list"><strong>Roommates:</strong> ${roommatesText}</div>
            </div>
            ${buttonHTML}
        `;

        container.appendChild(card);
    });
}

// 5. Function to Book a Room
function bookRoom(roomId) {
    // Find the room in our data
    const roomIndex = rooms.findIndex(r => r.id === roomId);

    if (roomIndex !== -1) {
        // Add current user to the room
        rooms[roomIndex].occupants.push(currentUser);
        rooms[roomIndex].status = 'occupied';

        // Refresh the screen
        renderRooms();
        alert(`Success! You are now in Room ${roomId}.`);
    }
}