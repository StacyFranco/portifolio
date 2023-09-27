/* Change this file to get your personal Porfolio */

// favicon : to change into your personal icon subtitute the /public/favicon.ico for your icon. You must keep the same name!


//Language selector: to change the laguages of the site change the selectors in the array and in the objects that use this selectors!
const LanguageOptions = ["en","pt"];
    

// Perfil Card
const PersonalInfo = {
    firstName: "Stacy",
    lastName: "B. Franco",
    age: "31",
    //Put the name of the image with the extension in the avatarPath and Save your image on the paste: /public/images/
    avatarPath: "linkdin_3.jpg" ,
    title: {
        en: ["Full Stack Programmer","Web Developer"],
        pt: ["Programador Full Stack","Desenvolvedor Web"],
    },
    resumeLink:"",
    resumeName:{
        en: "Resume",
        pt: "Currículo"
    },
    adress: "Piraquara, PR",
    country: {
        en: "Brazil",
        pt: "Brasil"
    },
    copyright: {
        en: "© 2023 Stacy Franco.  All Rights Reserved",
        pt: "© 2023 Stacy Franco.  Todos os direitos Reservados"
    }
};

//Medias to contact... if you do not have one of them just comment the line
const socialMediaLinks = {
/* Your Social Media Link */
github: "https://github.com/StacyFranco",
linkedin: "https://www.linkedin.com/in/stacyfranco/",
instagram: "https://www.instagram.com/stacyfranco167/",
whatsapp: "https://wa.me/5541988190927",
// change only your email... let the "mailto"+ ther...
email: "mailto:"+"stacyfranco@hotmail.com",

};

// Name of the pages
const NavBarNames = {
    // Ps. Just ajust names for language or little changes because icon and content will not change!
    en:["Home","About","Experience","Portifolio", "Contact"],
    pt:["Início","Sobre","Experiência","Portifólio", "Contato"],
};

export{
    socialMediaLinks,
    PersonalInfo,
    LanguageOptions,
    NavBarNames,
}