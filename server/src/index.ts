import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
        name: "Boilded Egg",
        price: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/egg.png",
        type: "breakfast",
    },
    {
        name: "RAMEN",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/ramen.png",
        type: "lunch",
    },
    {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/chicken.png",
        type: "dinner",
    },
    {
        name: "CAKE",
        price: 18,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/cake.png",
        type: "breakfast",
    },
    {
        name: "BURGER",
        price: 23,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/burger.png",
        type: "lunch",
    },
    {
        name: "PANCAKE",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "dinner",
    },
    {
        name: "CAKE1",
        price: 30,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "CAKE2",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "MICRO",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "IT",
    },
    {
        name: "OS",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "IT",
    },
    {
        name: "DISCRET",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "IT",
    },
    {
        name: "CN",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "IT",
    },
    {
        name: "ECO",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "IT",
    },
    {
        name: "CAKE4",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "MECH",
    },
    {
        name: "CAKE5",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "MECH",
    },
    {
        name: "CAKE6",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "ECE",
    },
    {
        name: "CAKE7",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "ECE",
    },
    {
        name: "CAKE8",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "EEE",
    },
    {
        name: "CAKE8",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "EEE",
    },
    {
        name: "CAKE9",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "BIO-TECH",
    },
    {
        name: "CAKE10",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "BIO-TECH",
    },
    {
        name: "CAKE11",
        price: 40,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "MECH",
    },
];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
