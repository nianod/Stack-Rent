


// const dashboardContainer = document.querySelector(".collect-data");

// document.addEventListener("DOMContentLoaded", () => {
//     // Register form

//     const passtwo = document.getElementById("password22");
//     const roomField = document.getElementById("room-number");
//     const emailField = document.getElementById("email");
//     const passone = document.getElementById("password11");
//     const errorMessage = document.getElementById("response");
//     const registerForm = document.getElementById("registrationForm");
//     const collectDataSection = document.querySelector(".collect-data");
//     const container = document.querySelector(".container"); 


 
    
//     if (registerForm) {
//         registerForm.addEventListener("submit", (event) => {
//             event.preventDefault();

//             const roomNumber = roomField.value;
//             const passwordOne = passone.value;
//             const passwordTwo = passtwo.value;
//             const email = emailField.value;


//             if (passwordOne !== passwordTwo) {
//                 errorMessage.style.display = "block";
//                 errorMessage.textContent = "Passwords do not match";
//                 return;
//             }

//             const tenant = { roomNumber, email, password: passwordOne };
//             localStorage.setItem("tenant", JSON.stringify(tenant));
//             alert("Registration successful, you can now log in");
//             registerForm.reset();
           


//         });
//     }
//     // Login form
 

//     const loginForm = document.getElementById("LoginForm");
//     const loginRoom = document.getElementById("Room-number");
//     const loginPassword = document.getElementById("password");
//     const loginError = document.getElementById("login-error");
//     const loginContainer = document.querySelector(".containerL");
 
//     if (loginForm) {
//         loginForm.addEventListener("submit", (event) => {
//             console.log("Form submitted!");
//             event.preventDefault();

//             const storedTenantData = JSON.parse(localStorage.getItem("tenant"));

//             if (!storedTenantData) {
//                 loginError.style.display = "block";
//                 loginError.textContent = "No such user found";
//                 return;
//             }

//             if (loginRoom.value === storedTenantData.roomNumber && loginPassword.value === storedTenantData.password) {
//                 loginError.style.display = "none";
//                 loginContainer.style.display = "none";
//                 window.location.href = "online.html#dash-cntenot"
//                 localStorage.setItem("isLoggedIn", "true");



//             } else {
//                 loginError.style.display = "block";
//                 loginError.textContent = "Invalid room number or password.";
//             }
//         });
//     }

//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     const dashboardContainer = document.querySelector(".collect-data");
//     const registerContainer = document.querySelector(".container"); // your registration div

//     if (isLoggedIn === "true") {
//         if (dashboardContainer) {
//             dashboardContainer.style.display = "block";
//         }

//         if (registerContainer) {
//             registerContainer.style.display = "none";
//         }
//     } else {
//         if (registerContainer) {
//             registerContainer.style.display = "block";
//         }

//         if (dashboardContainer) {
//             dashboardContainer.style.display = "none";
//         }
//     }
// });

// //Handle logout
// const logout = document.getElementById("logout-btn")

// if(logout) {
//     logout.addEventListener("click", (event) => {
//         event.preventDefault();
//         localStorage.removeItem("isLoggedIn")
//         window.location.href = "online.html";
//     });

// }




import { supabase } from './supabase.js'; // adjust path if needed

// 🔐 REGISTER USER
async function registerUser(email, room_number) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ email, room_number: room_number }]);

  if (error) {
    console.error('Error inserting data:', error);
    alert("Error registering user.");
  } else {
    console.log('User registered:', data);
    alert("User registered successfully!");
  }
}

// 📥 FETCH ALL USERS FOR ADMIN TABLE
async function fetchUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('id, email, room_numbe, created_at');

  if (error) {
    console.error('Error fetching users:', error);
    return;
  }

  const tbody = document.getElementById('user-table-body');
  tbody.innerHTML = '';

  data.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.email}</td>
      <td>${user.room_numbe}</td>
      <td>${new Date(user.created_at).toLocaleString()}</td>
    `;
    tbody.appendChild(row);
  });
}

// 🚀 Call fetch on page load (for admin dashboard)
document.addEventListener('DOMContentLoaded', fetchUsers);

// 🔘 Optional: hook the registerUser to your form
document.getElementById('register-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const room = parseInt(document.getElementById('room_number').value);
  registerUser(email, room);
});
