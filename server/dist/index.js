"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [

        //IT BRANCH
        // SEM:01
        {
            name: "Applied Physics(IT)",
            price:"",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Algo.png",
            type: "IT",
        },
        {
            name: "Calculus(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/calculus.jpg",
            type: "IT",
        },
        {
            name: "Professional Communication(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/professional-communication.jpg",
            type: "IT",
        },
        {
            name: "Programming Fundamental(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/programmingC.jpg",
            type: "IT",
        },
        {
            name: "WorkShop(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/workshop.jpg",
            type: "IT",
        },

        //SEM:02
        {
            name: "Applied Chemistry(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chemistry.jpg",
            type: "IT",
        },
        {
            name: "Differential Equation and Transform(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/differential-equation.jpg",
            type: "IT",
        },
        {
            name: "Basic Electrical and Electronics Engineering(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/BEEE.jpg",
            type: "IT",
        },
        {
            name: "Engineering Graphics(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/EG.jpg",
            type: "IT",
        },
        {
            name: "Object Oriented Programming Using C++(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/oops.jpg",
            type: "IT",
        },

        //SEM:3
        {
            name: "Linear Algebra and Probability Theory(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/linearalgebra.jpg",
            type: "IT",
        },
        {
            name: "Data Structures(IT) ",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/DS.jpg",
            type: "IT",
        },
        {
            name: "Digital Electronics(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Digital-logic.jpg",
            type: "IT",
        },
        {
            name: "Computer Architecture and Organization(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/COA.jpg",
            type: "IT",
        },
        {
            name: "Database Management System(IT) ",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/DBMS.jpg",
            type: "IT",
        },

        // SEM:04
        {
            name: "MicroProcessor(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/MP.jpg",
            type: "IT",
        },
        {
            name: "Operating System(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/OS.jpg",
            type: "IT",
        },
        {
            name: "Discrete mathematics(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/discrete.jpg",
            type: "IT",
        },
        {
            name: "Computer Network(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cn.jpg",
            type: "IT",
        },
        {
            name: "Economices(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/eco.jpg",
            type: "IT",
        },


        // SEM:5
        
        {
            name: "Network Security and Cryptography(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/egg.png",
            type: "IT",
        },
        {
            name: "Artificial Intelligence(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ramen.png",
            type: "IT",
        },
        {
            name: "Cyber Laws & IPR(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chicken.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cake.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.png",
            type: "IT",
        },

        // SEM:06
        {
            name: "Theory of Computation(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/egg.png",
            type: "IT",
        },
        {
            name: "Machine Learning(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ramen.png",
            type: "IT",
        },
        {
            name: "Design and Analysis of Algorithms(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chicken.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cake.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.png",
            type: "IT",
        },


        // SEM:07
        {
            name: "Digital Signal Processing(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/egg.png",
            type: "IT",
        },
        {
            name: "Compiler Design(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ramen.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chicken.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cake.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.png",
            type: "IT",
        },

        // SEM:08
        {
            name: "Embedded System Design(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/egg.png",
            type: "IT",
        },
        {
            name: "Cloud Computing (IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ramen.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chicken.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cake.png",
            type: "IT",
        },
        {
            name: "Neeraj(IT)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.png",
            type: "IT",
        },

    
        //ECE BRANCH
        //SEM:1
        {
            name: "Applied Chemistry(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Calculus(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Basic Electrical and Electronics Engineering(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Engineering Graphics(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Programming fundamentals(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        //SEM:02
        {
            name: " Differential Equations and Transforms(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Professional Communication(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Digital Design(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Workshop(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        //SEM:03

        {
            name: "Linear Algebra & Complex Analysis (ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Signals and Systems(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Microprocessor and Microcontrollers(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Electronic Devices and Circuits(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Electronics Measurements & Instrumentation(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: " Economics(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },

        //SEM:04
        {
            name: "Communication Engineering(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: " Advanced Microcontrollers & Applications (ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Analog Electronic Circuits(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: " Probability and Random Processes(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Electromagnetic Theory (ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        
        {
            name: "Network Analysis(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },

        //SEM:05

        {
            name: " VLSI Design(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Digital Signal Processing(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Antennas & Wave Propagation (ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Computer Networks(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: " Digital System Design(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },

        //SEM:06

        {
            name: "Microwave & Radar Engineering (ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Fiber Optic Communication Systems(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Digital Communication(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Control Systems(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Power Electronics (ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },

        // SEM:07
        {
            name: " Wireless & Mobile Communication(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "Embedded System Design(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },

        // SEM:08
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },
        {
            name: "(ECE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "ECE",
        },

    //EEE BRANCH
        //SEM:01
        {
            name: "Applied Chemistry(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Calculus(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Basic Electrical and Electronics Engineering(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Engineering Graphics(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Programming fundamentals(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },

        //SEM:02
        {
            name: "Differential Equations and Transforms(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Professional Communication(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Workshop(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Fundamentals of Electrical Engineering(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Applied Physics(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },

        //SEM:03
        {
            name: "Networks Analysis and Synthesis(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Electrical Machine-I(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Analog Electronics(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Digital Electronics(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Maths-III(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },

        //SEM:04
        {
            name: "Electrical Machine-II(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Power System-I(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Control Engineering-I(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: " Microprocessor & Microcontroller(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Economics(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },

        //SEM:05
        {
            name: "Power System-II(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Control Engineering-II(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Electromagnetic Field Theory(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: " Professional Elective-I(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: " Computer Networks(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },

        //SEM:06
        {
            name: "CAPSA(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Power Electronics(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Professional Elective-II(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Signal and Systems(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },

        {
            name: " Professional Elective-III(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },

        //SEM:07
        {
            name: "Power Electronics & Drives(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Professional Elective-IV(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Professional Elective-V(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: " Open Elective-I(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },

        //SEM:08
        {
            name: "Professional Elective -VI(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Open elective-II(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Open Elective -III(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "Cyber Laws and IPR(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
        {
            name: "(EEE)",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "EEE",
        },
  

    //BRANCH:CSE
      //SEM:01
      {
        name: "Calculus(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Professional Communication(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Workshop(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Programming fundamentals(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Applied Physics(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    //SEM:02

    {
        name: " Applied Chemistry(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Differential Equations and Transforms (CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Basic Electrical and Electronics Engineering(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Engineering Graphics (CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Object Oriented Programming(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    //SEM:03

    {
        name: "Data Structures(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Database Systems(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Discrete Structures(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Web Technologies(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Software Engineering(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Latest Trends And technologies in Computer Science(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    //SEM:04

    {
        name: "Analysis and Design of Algorithms(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Linear Algebra and Probability Theory(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Operating Systems(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Computer Networks(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Computer Architecture and Organization(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    //SEM:05

    {
        name: "Natural Language Processing(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Computer Graphics(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Artificial Intelligence(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Theory of Computation(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Economics(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    //SEM:06

    {
        name: "1Data Mining and Machine Learning(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Cryptography and Network Security(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Digital Image Processing(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Compiler Design(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Elective-I(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    //SEM:07

    {
        name: "Software Testing and Quality Assurance(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Modelling And Simulation(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Mobile Application Development(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Data Acquisition and Interfacing(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Multimedia Computing(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Cloud Computing(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },


    //SEM"08

    {
        name: "Neural Networks and Deep Learning(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: " Cyber Laws and IPR(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Elective-II(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "Elective-III(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },
    {
        name: "(CSE)",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "CSE",
    },      
       
    ];

    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map