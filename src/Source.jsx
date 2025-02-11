import { MdCastForEducation } from "react-icons/md";
import { FaBattleNet, FaPhoneAlt } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

export const servicesData = [
    {
      icon: <MdCastForEducation/>,
      iconColor: " #FFFFFF",
      title: "BE COURSES",
      description: "Explore a vast collection of Lectures, Handwritten Notes, and PYQs designed to enhance your learning experience. Gain access to well-organized study materials that simplify complex topics and support your academic success.",
      link: "#",
    },
    {
      icon: <FaBattleNet />,
      iconColor: " #FFD700",
      title: "TECH COURSES",
      description: "Master the tech world with our Web Development, App Development, AI & ML, DSA, and more courses. Our structured guidance helps you build skills, stay updated with industry trends, and excel in your tech domain.",
      link: "#",
    },
    {
      icon: <VscAccount />,
      iconColor: " #00D084 ",
      title: "OTHERS",
      description: "Discover more resources beyond academics, including career guidance, skill development, industry insights, personal growth, workshops, and more to help you grow and stay ahead in your journey.",
      link: "#",
    },
  ];

  export const contactOptions = [
    {
      title:"Email",
      value:"neerajuiet2023@gmail.com",
      icon:<SiGmail />,
      iconColor:"#D14836",
    },
    {
      title:"Phone Number",
      value:"+91 8173970847",
      icon:<FaPhoneAlt/>,
      iconColor:"#34A853",
    },
    {
      title:"Address",
      value:"UIET,PU, Chandigarh,Sector:25",
      icon:<SlLocationPin/>,
      iconColor:"#F57C00",
    },
  ]