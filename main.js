const fname = document.querySelector(".name");
const tel = document.querySelector(".tel");
const email = document.querySelector(".email");
const inCheck = document.querySelector(".inCheck");
const outCheck = document.querySelector(".outCheck");
const forms = document.getElementById("form");
const message = document.querySelector(".formMessage");
const list = document.querySelector(".bokedRooms");
forms.addEventListener("click", submitForm);

function submitForm(e) {
  if (
    fname.value == "" ||
    tel.value == "" ||
    email.value == "" ||
    inCheck.value == "" ||
    outCheck.value == ""
  ) {
    message.innerHTML = "fill out";
  } else {
    const li = document.createElement("li");
    appendChild(
      document.createTextNode(
        `${fname.value}: ${tel.value}: ${email.value}: ${inCheck.value}:${outCheck.value}`
      )
    );
    list.append(li);
  }
  e.preventDefault();
}

function Booking(name, rooms, booked, wifi, breakfast, lunch) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.wifi = wifi;
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.readyRooms = function() {
    return this.rooms - this.booked;
  };
  this.bookedRooms = function() {
    return (this.booked = this.booked);
  };
}

var hotel = new Booking("Liido", 230, 150, "Ja", "Ja", "Nej");

const rooms = document.querySelector(".availableRooms");
rooms.textContent = hotel.readyRooms() + " Lediga rum";

const roomsList = document.querySelector(".available");
const li = document.createElement("li");
li.textContent = "Hotel: " + hotel.name;
roomsList.appendChild(li);

const li1 = document.createElement("li");
li1.textContent = "Antal rum: " + hotel.rooms;
roomsList.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Wifi: " + hotel.wifi;
roomsList.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Breakfast: " + hotel.breakfast;
roomsList.appendChild(li3);

const li4 = document.createElement("li");
li4.textContent = "Lunch: " + hotel.lunch;
roomsList.appendChild(li4);

const booked = document.querySelector(".booked");
const span = document.createElement("span");
span.textContent = "Bokade rum: " + hotel.bookedRooms();
booked.appendChild(span);

function formMessage(msg) {
  return this.msg;
}
formMessage("Default");
