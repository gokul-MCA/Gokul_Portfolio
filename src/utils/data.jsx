import ft from '../assets/frontend.png';
import tl from '../assets/icons8-tools-50.png';
import bk from '../assets/icons8-database-50.png';
import pt from '../assets/WebDesigner.png';


export const  SKILLS =[
    {
        title:'Frontend',
        icon:ft,
        skills:[
            { skill:"HTML5",percentage:"80%"},
            { skill:"CSS3",percentage:"80%"},
            { skill:"JavaScript",percentage:"70%"},
            { skill:"React.js",percentage:"70%"},
        ]
    },
    {
        title:'Tools',
        icon:tl,
        skills:[
            { skill:"Git & GitHub",percentage:"81%"},
            { skill:"Visual Studio Code",percentage:"70%"},
            { skill:"Responsive Design",percentage:"80%"},
        ]
    },
    {
        title:'Database',
        icon:bk,
        skills:[
            { skill:"MySQL",percentage:"60%"},
            { skill:"MongoDB",percentage:"40%"},
        ]
    }
]

export const timelines = [
    {
      id: 1,
      position: 'left',
      title: 'GURU NANAK COLLEGE (2022-24)',
      subtitle: 'MCA - 85%',
      description: 'I learned new things in my life as a PG student, identify my weakness and trying to overcome.'
    },
    {
      id: 2,
      position: 'right',
      title: 'SRI SANKARA ARTS & SCIENCE COLLEGE (2019-22)',
      subtitle: 'BCA - 85%',
      description: 'I learned programming languages(such as Python, JS, Java) with eagerness.'
    },
    {
      id: 3,
      position: 'left',
      title: 'NEWS PAPER READING, CRICKET',
      subtitle: 'Hobby',
      description: 'News Paper Reading helped me alot to understand verdicts, polity, and new words. Cricket is changed me as a persistent and consistent person.'
    }
  ];


export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 480 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

export const productData=[
    {
        id:1,
        imageUrl:pt,
        name:"Portfolio",
        description:"React.js, HTML, CSS",
        link:"https://github.com/gokul-MCA"
    },
    {
        id:2,
        imageUrl:pt,
        name:"Podcast",
        description:"Next.js, React.js, Tailwind.css",
        link:"https://github.com/gokul-MCA"
    },
    {
        id:3,
        imageUrl:pt,
        name:"Project",
        description:"Coming soon...",
        link:"https://github.com/gokul-MCA"
    },
    {
        id:4,
        imageUrl:pt,
        name:"Project",
        description:"Coming soon...",
        link:"https://github.com/gokul-MCA"
    },
    
]
