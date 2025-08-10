import React, { useState } from 'react'
import "./assets/App.css";
function App() {
  const [AllStudent, SetStudents] = useState([
    {
      "roll_no": 1,
      "first_name": "Sneha",
      "last_name": "Agarwal",
      "age": 17,
      "phone": "9004096050",
      "address": "Bhavnagar",
      "class": "10th",
      "division": "A"
    },
    {
      "roll_no": 2,
      "first_name": "Simran",
      "last_name": "Kumar",
      "age": 15,
      "phone": "9172691512",
      "address": "Ahmedabad",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 3,
      "first_name": "Jinal",
      "last_name": "Gupta",
      "age": 19,
      "phone": "9697265877",
      "address": "Gandhinagar",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 4,
      "first_name": "Kritika",
      "last_name": "Bhardwaj",
      "age": 18,
      "phone": "9550694287",
      "address": "Vadodara",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 5,
      "first_name": "Arjun",
      "last_name": "Singh",
      "age": 19,
      "phone": "9209379977",
      "address": "Surat",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 6,
      "first_name": "Jinal",
      "last_name": "Bhatt",
      "age": 20,
      "phone": "9055304970",
      "address": "Junagadh",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 7,
      "first_name": "Tejas",
      "last_name": "Mandal",
      "age": 16,
      "phone": "9595366722",
      "address": "Gandhinagar",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 8,
      "first_name": "Hitesh",
      "last_name": "Chopra",
      "age": 16,
      "phone": "9153508475",
      "address": "Vadodara",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 9,
      "first_name": "Pooja",
      "last_name": "Mehta",
      "age": 19,
      "phone": "9086083107",
      "address": "Jamnagar",
      "class": "10th",
      "division": "B"
    },
    {
      "roll_no": 10,
      "first_name": "Tanvi",
      "last_name": "Trivedi",
      "age": 15,
      "phone": "9208669990",
      "address": "Ahmedabad",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 11,
      "first_name": "Ankit",
      "last_name": "Bhatt",
      "age": 15,
      "phone": "9437962201",
      "address": "Gandhinagar",
      "class": "10th",
      "division": "C"
    },
    {
      "roll_no": 12,
      "first_name": "Shalini",
      "last_name": "Rawal",
      "age": 16,
      "phone": "9759139700",
      "address": "Junagadh",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 13,
      "first_name": "Tejas",
      "last_name": "Mandal",
      "age": 17,
      "phone": "9267123223",
      "address": "Rajkot",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 14,
      "first_name": "Deep",
      "last_name": "Tyagi",
      "age": 18,
      "phone": "9430753349",
      "address": "Navsari",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 15,
      "first_name": "Raj",
      "last_name": "Bansal",
      "age": 18,
      "phone": "9377592202",
      "address": "Rajkot",
      "class": "10th",
      "division": "B"
    },
    {
      "roll_no": 16,
      "first_name": "Nency",
      "last_name": "Sharma",
      "age": 18,
      "phone": "9944114576",
      "address": "Bhavnagar",
      "class": "10th",
      "division": "C"
    },
    {
      "roll_no": 17,
      "first_name": "Ankit",
      "last_name": "Rathod",
      "age": 15,
      "phone": "9799462878",
      "address": "Junagadh",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 18,
      "first_name": "Tejas",
      "last_name": "Prajapati",
      "age": 19,
      "phone": "9400616679",
      "address": "Jamnagar",
      "class": "10th",
      "division": "A"
    },
    {
      "roll_no": 19,
      "first_name": "Ankit",
      "last_name": "Joshi",
      "age": 20,
      "phone": "9851489092",
      "address": "Surat",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 20,
      "first_name": "Pooja",
      "last_name": "Rawal",
      "age": 17,
      "phone": "9784068433",
      "address": "Valsad",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 21,
      "first_name": "Tina",
      "last_name": "Rathod",
      "age": 16,
      "phone": "9722715081",
      "address": "Gandhinagar",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 22,
      "first_name": "Shalini",
      "last_name": "Mishra",
      "age": 17,
      "phone": "9495597976",
      "address": "Valsad",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 23,
      "first_name": "Simran",
      "last_name": "Vadadoriya",
      "age": 19,
      "phone": "9666868022",
      "address": "Jamnagar",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 24,
      "first_name": "Isha",
      "last_name": "Chaudhary",
      "age": 20,
      "phone": "9693247224",
      "address": "Navsari",
      "class": "12th",
      "division": "D"
    },
    {
      "roll_no": 25,
      "first_name": "Nency",
      "last_name": "Verma",
      "age": 17,
      "phone": "9930465433",
      "address": "Surat",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 26,
      "first_name": "Isha",
      "last_name": "Saxena",
      "age": 16,
      "phone": "9910907977",
      "address": "Junagadh",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 27,
      "first_name": "Rekha",
      "last_name": "Parmar",
      "age": 17,
      "phone": "9603709404",
      "address": "Ahmedabad",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 28,
      "first_name": "Vivek",
      "last_name": "Kohli",
      "age": 15,
      "phone": "9640671624",
      "address": "Vadodara",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 29,
      "first_name": "Pooja",
      "last_name": "Mishra",
      "age": 16,
      "phone": "9349612913",
      "address": "Bhavnagar",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 30,
      "first_name": "Deep",
      "last_name": "Dwivedi",
      "age": 20,
      "phone": "9657211716",
      "address": "Ahmedabad",
      "class": "12th",
      "division": "A"
    },
    {
      "roll_no": 31,
      "first_name": "Rahul",
      "last_name": "Kohli",
      "age": 18,
      "phone": "9694639437",
      "address": "Ahmedabad",
      "class": "10th",
      "division": "A"
    },
    {
      "roll_no": 32,
      "first_name": "Nency",
      "last_name": "Vora",
      "age": 20,
      "phone": "9496827079",
      "address": "Navsari",
      "class": "12th",
      "division": "A"
    },
    {
      "roll_no": 33,
      "first_name": "Raj",
      "last_name": "Tiwari",
      "age": 19,
      "phone": "9041503276",
      "address": "Bhavnagar",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 34,
      "first_name": "Vidhi",
      "last_name": "Bhardwaj",
      "age": 20,
      "phone": "9018683583",
      "address": "Bhavnagar",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 35,
      "first_name": "Karan",
      "last_name": "Chatterjee",
      "age": 19,
      "phone": "9627995529",
      "address": "Navsari",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 36,
      "first_name": "Manish",
      "last_name": "Singh",
      "age": 16,
      "phone": "9791065080",
      "address": "Surat",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 37,
      "first_name": "Isha",
      "last_name": "Sharma",
      "age": 20,
      "phone": "9473412566",
      "address": "Valsad",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 38,
      "first_name": "Vikas",
      "last_name": "Solanki",
      "age": 18,
      "phone": "9221990986",
      "address": "Rajkot",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 39,
      "first_name": "Neha",
      "last_name": "Parmar",
      "age": 16,
      "phone": "9397089131",
      "address": "Bhavnagar",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 40,
      "first_name": "Bhavna",
      "last_name": "Yadav",
      "age": 20,
      "phone": "9109332498",
      "address": "Jamnagar",
      "class": "10th",
      "division": "C"
    },
    {
      "roll_no": 41,
      "first_name": "Mohit",
      "last_name": "Kapoor",
      "age": 19,
      "phone": "9368745713",
      "address": "Vadodara",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 42,
      "first_name": "Tejas",
      "last_name": "Patil",
      "age": 16,
      "phone": "9803802044",
      "address": "Navsari",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 43,
      "first_name": "Manish",
      "last_name": "Singh",
      "age": 16,
      "phone": "9781791843",
      "address": "Rajkot",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 44,
      "first_name": "Vivek",
      "last_name": "Kohli",
      "age": 15,
      "phone": "9744747397",
      "address": "Ahmedabad",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 45,
      "first_name": "Vikas",
      "last_name": "Mishra",
      "age": 15,
      "phone": "9092901765",
      "address": "Ahmedabad",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 46,
      "first_name": "Karan",
      "last_name": "Chatterjee",
      "age": 20,
      "phone": "9235122850",
      "address": "Valsad",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 47,
      "first_name": "Chirag",
      "last_name": "Joshi",
      "age": 15,
      "phone": "9939492306",
      "address": "Vadodara",
      "class": "10th",
      "division": "A"
    },
    {
      "roll_no": 48,
      "first_name": "Umesh",
      "last_name": "Vadadoriya",
      "age": 19,
      "phone": "9505427389",
      "address": "Rajkot",
      "class": "12th",
      "division": "D"
    },
    {
      "roll_no": 49,
      "first_name": "Karan",
      "last_name": "Kapoor",
      "age": 16,
      "phone": "9758985561",
      "address": "Rajkot",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 50,
      "first_name": "Hitesh",
      "last_name": "Pathak",
      "age": 15,
      "phone": "9643598379",
      "address": "Ahmedabad",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 51,
      "first_name": "Vidhi",
      "last_name": "Rawal",
      "age": 17,
      "phone": "9781294300",
      "address": "Bhavnagar",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 52,
      "first_name": "Vidhi",
      "last_name": "Kumar",
      "age": 15,
      "phone": "9642223732",
      "address": "Surat",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 53,
      "first_name": "Sahil",
      "last_name": "Vora",
      "age": 17,
      "phone": "9308159688",
      "address": "Vadodara",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 54,
      "first_name": "Ankit",
      "last_name": "Chopra",
      "age": 15,
      "phone": "9218020444",
      "address": "Surat",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 55,
      "first_name": "Pooja",
      "last_name": "Kohli",
      "age": 17,
      "phone": "9652380778",
      "address": "Jamnagar",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 56,
      "first_name": "Payal",
      "last_name": "Mehta",
      "age": 20,
      "phone": "9055111452",
      "address": "Valsad",
      "class": "10th",
      "division": "B"
    },
    {
      "roll_no": 57,
      "first_name": "Simran",
      "last_name": "Verma",
      "age": 16,
      "phone": "9706381210",
      "address": "Gandhinagar",
      "class": "10th",
      "division": "A"
    },
    {
      "roll_no": 58,
      "first_name": "Komal",
      "last_name": "Panchal",
      "age": 17,
      "phone": "9968828053",
      "address": "Valsad",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 59,
      "first_name": "Nency",
      "last_name": "Chaudhary",
      "age": 19,
      "phone": "9992516592",
      "address": "Rajkot",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 60,
      "first_name": "Raj",
      "last_name": "Naik",
      "age": 16,
      "phone": "9823969749",
      "address": "Jamnagar",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 61,
      "first_name": "Tejas",
      "last_name": "Kumar",
      "age": 15,
      "phone": "9362464109",
      "address": "Vadodara",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 62,
      "first_name": "Harsh",
      "last_name": "Banerjee",
      "age": 15,
      "phone": "9925671731",
      "address": "Rajkot",
      "class": "12th",
      "division": "A"
    },
    {
      "roll_no": 63,
      "first_name": "Ankit",
      "last_name": "Chaudhary",
      "age": 19,
      "phone": "9471458778",
      "address": "Vadodara",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 64,
      "first_name": "Bhavna",
      "last_name": "Gupta",
      "age": 19,
      "phone": "9257849821",
      "address": "Junagadh",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 65,
      "first_name": "Priya",
      "last_name": "Bhatt",
      "age": 16,
      "phone": "9804270821",
      "address": "Valsad",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 66,
      "first_name": "Sahil",
      "last_name": "Naik",
      "age": 19,
      "phone": "9284948174",
      "address": "Bhavnagar",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 67,
      "first_name": "Ankit",
      "last_name": "Rawal",
      "age": 16,
      "phone": "9791210710",
      "address": "Jamnagar",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 68,
      "first_name": "Komal",
      "last_name": "Agarwal",
      "age": 18,
      "phone": "9331987237",
      "address": "Vadodara",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 69,
      "first_name": "Ajay",
      "last_name": "Singh",
      "age": 19,
      "phone": "9425456306",
      "address": "Bhavnagar",
      "class": "12th",
      "division": "A"
    },
    {
      "roll_no": 70,
      "first_name": "Ayesha",
      "last_name": "Parmar",
      "age": 18,
      "phone": "9010433349",
      "address": "Gandhinagar",
      "class": "10th",
      "division": "C"
    },
    {
      "roll_no": 71,
      "first_name": "Sahil",
      "last_name": "Dwivedi",
      "age": 18,
      "phone": "9326152630",
      "address": "Navsari",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 72,
      "first_name": "Jay",
      "last_name": "Desai",
      "age": 20,
      "phone": "9457686272",
      "address": "Rajkot",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 73,
      "first_name": "Simran",
      "last_name": "Kohli",
      "age": 18,
      "phone": "9838661863",
      "address": "Ahmedabad",
      "class": "12th",
      "division": "A"
    },
    {
      "roll_no": 74,
      "first_name": "Payal",
      "last_name": "Rawal",
      "age": 16,
      "phone": "9612738077",
      "address": "Navsari",
      "class": "12th",
      "division": "A"
    },
    {
      "roll_no": 75,
      "first_name": "Ajay",
      "last_name": "Chopra",
      "age": 20,
      "phone": "9412095515",
      "address": "Gandhinagar",
      "class": "10th",
      "division": "C"
    },
    {
      "roll_no": 76,
      "first_name": "Nirav",
      "last_name": "Solanki",
      "age": 15,
      "phone": "9909581255",
      "address": "Gandhinagar",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 77,
      "first_name": "Sneha",
      "last_name": "Gupta",
      "age": 20,
      "phone": "9290614102",
      "address": "Navsari",
      "class": "12th",
      "division": "A"
    },
    {
      "roll_no": 78,
      "first_name": "Raj",
      "last_name": "Prajapati",
      "age": 17,
      "phone": "9269611500",
      "address": "Bhavnagar",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 79,
      "first_name": "Yash",
      "last_name": "Roy",
      "age": 17,
      "phone": "9313000614",
      "address": "Junagadh",
      "class": "10th",
      "division": "A"
    },
    {
      "roll_no": 80,
      "first_name": "Bhavna",
      "last_name": "Solanki",
      "age": 19,
      "phone": "9093445029",
      "address": "Jamnagar",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 81,
      "first_name": "Priya",
      "last_name": "Trivedi",
      "age": 20,
      "phone": "9620832409",
      "address": "Bhavnagar",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 82,
      "first_name": "Deep",
      "last_name": "Mishra",
      "age": 17,
      "phone": "9532529371",
      "address": "Bhavnagar",
      "class": "10th",
      "division": "D"
    },
    {
      "roll_no": 83,
      "first_name": "Tina",
      "last_name": "Banerjee",
      "age": 19,
      "phone": "9074514051",
      "address": "Ahmedabad",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 84,
      "first_name": "Rahul",
      "last_name": "Malhotra",
      "age": 19,
      "phone": "9430042725",
      "address": "Vadodara",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 85,
      "first_name": "Suresh",
      "last_name": "Prajapati",
      "age": 20,
      "phone": "9981305974",
      "address": "Bhavnagar",
      "class": "12th",
      "division": "B"
    },
    {
      "roll_no": 86,
      "first_name": "Neha",
      "last_name": "Patil",
      "age": 15,
      "phone": "9474615646",
      "address": "Junagadh",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 87,
      "first_name": "Kritika",
      "last_name": "Shukla",
      "age": 15,
      "phone": "9338365949",
      "address": "Vadodara",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 88,
      "first_name": "Isha",
      "last_name": "Gandhi",
      "age": 15,
      "phone": "9669087223",
      "address": "Jamnagar",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 89,
      "first_name": "Harsh",
      "last_name": "Bhatt",
      "age": 16,
      "phone": "9755483408",
      "address": "Gandhinagar",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 90,
      "first_name": "Meena",
      "last_name": "Banerjee",
      "age": 18,
      "phone": "9983736087",
      "address": "Junagadh",
      "class": "11th",
      "division": "B"
    },
    {
      "roll_no": 91,
      "first_name": "Rekha",
      "last_name": "Solanki",
      "age": 19,
      "phone": "9161800432",
      "address": "Navsari",
      "class": "12th",
      "division": "C"
    },
    {
      "roll_no": 92,
      "first_name": "Chirag",
      "last_name": "Rai",
      "age": 17,
      "phone": "9880860716",
      "address": "Surat",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 93,
      "first_name": "Chirag",
      "last_name": "Tyagi",
      "age": 18,
      "phone": "9065792308",
      "address": "Bhavnagar",
      "class": "10th",
      "division": "A"
    },
    {
      "roll_no": 94,
      "first_name": "Kavita",
      "last_name": "Bansal",
      "age": 20,
      "phone": "9268860485",
      "address": "Jamnagar",
      "class": "10th",
      "division": "A"
    },
    {
      "roll_no": 95,
      "first_name": "Tejas",
      "last_name": "Shukla",
      "age": 19,
      "phone": "9234436921",
      "address": "Rajkot",
      "class": "11th",
      "division": "C"
    },
    {
      "roll_no": 96,
      "first_name": "Amit",
      "last_name": "Naik",
      "age": 18,
      "phone": "9094648447",
      "address": "Bhavnagar",
      "class": "11th",
      "division": "D"
    },
    {
      "roll_no": 97,
      "first_name": "Komal",
      "last_name": "Rajput",
      "age": 15,
      "phone": "9230464095",
      "address": "Gandhinagar",
      "class": "11th",
      "division": "A"
    },
    {
      "roll_no": 98,
      "first_name": "Priya",
      "last_name": "Ghosh",
      "age": 19,
      "phone": "9996543614",
      "address": "Gandhinagar",
      "class": "10th",
      "division": "B"
    },
    {
      "roll_no": 99,
      "first_name": "Parth",
      "last_name": "Rathod",
      "age": 15,
      "phone": "9050195871",
      "address": "Surat",
      "class": "10th",
      "division": "C"
    },
    {
      "roll_no": 100,
      "first_name": "Suresh",
      "last_name": "Mishra",
      "age": 20,
      "phone": "9984974437",
      "address": "Vadodara",
      "class": "12th",
      "division": "A"
    }
  ])
  return (
    <>
      <h1>Stduents Table</h1>
      <center>
        <table border="1px" cellSpacing="0px">
          <thead>
            <tr>
              <th>No</th>
              <th>Roll No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Class</th>
              <th>Divison</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {AllStudent.map((stud, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{stud.roll_no}</td>
                <td>{stud.first_name}</td>
                <td>{stud.last_name}</td>
                <td>{stud.age}</td>
                <td>{stud.phone}</td>
                <td>{stud.address}</td>
                <td>{stud.class}</td>
                <td>{stud.division}</td>
                <td><button>Delete</button><button>update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  )
}

export default App;


