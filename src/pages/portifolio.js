/* Change this file to get your personal Porfolio */

// favicon : to change into your personal icon subtitute the /public/favicon.ico for your icon. You must keep the same name!


//Language selector: to change the laguages of the site change the selectors in the array and in the objects that use this selectors!
const LanguageOptions = ["en","pt"];
const ThemeOptions = ["dark","light"];
    

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
    //***** Don't change English names! they are used in the route of pages!***** /
    en:["Home","About","Experience","Portifolio", "Contact"],
    pt:["Início","Sobre","Experiência","Portifólio", "Contato"],
};

// Page About
const about = {
    title:{
        en: ["Every great History has a ","beginning!"],
        pt: ["Cada grande história, sempre tem"," um começo!"]
    },
    content:{
        en:"I'm starting my journey in the world of programming. Despite being just at the beginning of this journey, I already find myself in love with the path! With every step I take, I encounter new obstacles with countless possibilities to overcome them! Since I was little, I've been passionate about challenges and puzzles, these obstacles, which range from solving bugs in codes under development to finding a new solution to implement a project, are like fuel driving me to discover simple and creative ways to be successful in my work! Using the knowledge acquired and always seeking to learn more, I am sure that this will be another great success story!",
        pt:"Estou iniciando a minha jornada no mundo da programação, e apesar de estar apenas no começo desta jornada já me encontro apaixonada pelo caminho! A cada passo que dou, encontro novos obstáculos com inúmeras possibilidades para superá-los! Apaixonada desde de pequena por desafios e quebra-cabeças, esses obstáculos, que vão desde solucionar bugs de códigos em desenvolvimento até achar uma solução nova para implementar um projeto, são como combustível me impulsionando a descobrir formas simples e criativas de obter êxito no meu trabalho! Usando o conhecimento adquirido e buscando sempre aprender mais tenho certeza que essa será mais uma grande história de sucesso! "

    }
}

//Page Contact
const contact = {
    title:{
        en: ["Let's work together!"],
        pt: ["Vamos trabalhar juntos!"]
    },
    content:{
        en:"If my work it is of your interest and you believe I have something to contribute to your project/company, please contact me. You can do this through social networks, email and/or WhatsApp found in the side menu or using the form below. I will try to get in touch as soon as possible!",
        pt:"Se meu trabalho te interessou e você acredita que tenho algo para contribuir para seu projeto/empresa entre em contato comigo. Você pode fazer isso através das redes sociais, e-mail e/ou WhatsApp que se encontram no menu lateral ou pelo formulário abaixo. Tentarei entrar em contato o mais breve possível!"

    },
    placeholders:{
        en:{
            name: "Full Name",
            phone: "Phone: +CC (NCD) XXX-XXXX",
            email: "E-mail",
            subject:"subject",
            message:"Your message!",
        },
        pt:{
            name: "Nome Completo",
            phone: "telefone: +DDD (DDI) XXXX-XXXX",
            email: "E-mail",
            subject:"Assunto",
            message: "Sua mensagem!",
        }
    }

}



export{
    socialMediaLinks,
    PersonalInfo,
    LanguageOptions,
    NavBarNames,
    about,
    contact,
    ThemeOptions
}