# 🏨 Smart Hostel Room Allocator

A simple **browser-based hostel room allocation system** that lets students quickly find and book available rooms.

Built with **HTML, CSS, and Vanilla JavaScript**, this project simulates a hostel booking system without requiring a backend server.

---

# 🚀 Live Experience

Imagine arriving at a hostel and instantly seeing:

* Which rooms are available
* Who your roommates are
* Which rooms are already occupied

This project recreates that experience in a **clean interactive dashboard**.

---

# ✨ Features

### 🔐 Simple Login

Users enter their **name** to access the system.

✔ Prevents empty login
✔ Displays a personalized welcome message

---

### 🏠 Interactive Room Dashboard

Rooms are displayed in a **clean grid layout** showing:

* Room number
* Roommates
* Availability status

Students can instantly see which rooms are free.

---

### 🟢 Room Availability Indicator

| Status       | Meaning                         |
| ------------ | ------------------------------- |
| 🟢 Available | Room is empty and can be booked |
| 🔴 Occupied  | Room already has occupants      |

---

### 🛏 Instant Room Booking

When a user clicks **Book This Room**:

1. The system checks if the room is available
2. Adds the student as a roommate
3. Updates the room status
4. Refreshes the dashboard automatically

---

### 🚪 Logout System

Users can log out anytime, which:

* Clears the current session
* Returns to the login screen

---

# 🧠 How It Works

The application uses a **JavaScript array as a mock database**.

Example room data:

```javascript
let rooms = [
 { id: 101, occupants: [], status: 'available' },
 { id: 102, occupants: ['Alice Smith'], status: 'occupied' },
 { id: 103, occupants: ['Bob Jones', 'Charlie Day'], status: 'occupied' }
];
```

When a student books a room:

* Their name is pushed into the occupants list
* The room status updates
* The UI re-renders dynamically

No page refresh needed.

---

# 📂 Project Structure

```
hostel-room-system
│
├── html.html        # Main interface
├── project.css      # Styles and layout
├── project.js       # Application logic
└── README.md        # Documentation
```

---

# 🛠 Technologies Used

| Technology       | Purpose            |
| ---------------- | ------------------ |
| HTML5            | Page structure     |
| CSS3             | Styling & layout   |
| JavaScript       | Application logic  |
| DOM Manipulation | Dynamic UI updates |

No frameworks. No libraries. Just **pure JavaScript fundamentals**.

---

# ⚠ Limitations

This project is a **front-end simulation**, so:

* Data resets when the page refreshes
* No real authentication
* No database
* Anyone can book any room
* No room capacity limits

---

# 🔮 Future Improvements

To turn this into a **real hostel management system**, you could add:

✔ Backend server (Node.js / Express)
✔ Database (MongoDB / MySQL)
✔ Secure login system
✔ Room capacity limits
✔ Admin management panel
✔ Booking cancellation
✔ Real-time updates

---

# ▶ Running the Project

1. Download the project files
2. Keep them in the same folder
3. Open

```
html.html
```

in your web browser.

No server required.

---

# 📚 What This Project Teaches

This project demonstrates:

* DOM manipulation
* Dynamic UI rendering
* JavaScript data structures
* Basic front-end application design

---

# 👨‍💻 Author

Built as a **learning project for practicing JavaScript and front-end development**.
