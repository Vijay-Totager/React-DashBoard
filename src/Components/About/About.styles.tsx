import Aboutusbg from "../../Assets/Images/About/Aboutus.webp";

export const FirstBox = {
    backgroundImage: `url(${Aboutusbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: { xs: "fit-content", md: "135vh" },
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    pb: { xs: 10, md: 0 },
    mt:-12,
};


export const AboutHeading = {

    color: "#2A53A2",
    fontSize: { xs: "20px", md: "30px" },
    fontFamily: "Montserrat",
    fontWeight: "bold",

}



export const AboutContent = {

    fontFamily: "Montserrat",
    color: "#1A2D4C",
    textAlign: "justify",
    fontSize: { xs: "14px", md: "16px" },
    lineHeight: "30px",

}