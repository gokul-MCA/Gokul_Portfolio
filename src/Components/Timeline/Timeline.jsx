import React from "react";
import { Chrono } from "react-chrono";
import "./Timeline.css";
import Head from '../ui/Head/Head'

const Timeline = () => {
  const items = [
    {
      title: "2022-24",
      cardTitle: "GURU NANAK COLLEGE",
      cardSubtitle: "MCA - 85%",
      cardDetailedText:<span className='my-card-detailedtext'style={{ fontSize: '16px'}}>
        I learned new things in my life as a PG student, identify my weakness and trying to overcome.</span>,
    },
    {
      title: "2019-22",
      cardTitle: "SRI SANKARA ARTS & SCIENCE COLLEGE",
      cardSubtitle: "BCA - 85%",
      cardDetailedText:<span className='my-card-detailedtext'style={{ fontSize: '16px'}}>
        I learned programming languages(such as Python, JS, Java) with eagerness.</span>
    },
    {
      title: "Hobby",
      cardTitle: "NEWS PAPER READING, CRICKET",
      cardSubtitle: "",
      cardDetailedText:<span className='my-card-detailedtext'style={{ fontSize: '16px'}}>
        News Paper Reading helped me alot to understand verdicts, polity, and new words.<br/><br/>
        Cricket is changed me as a persistent and consistent person.</span>
       
    },
  ];

  return (
    <section className="timeline">
      <Head>About me</Head>
      <div style={{ width: "75vw", height: "100vh", color: "green" }} className="time">
        <Chrono
          items={items}
          classNames={{
            card: "my-card",
            cardMedia: "my-card-media",
            cardText: "my-card-text",
            controls: "my-controls",
            title: "my-title",
            cardTitle: "my-card-title",
            cardSubTitle: "my-card-subtitle",
          }}
          mode="VERTICAL_ALTERNATING"
          disableToolbar="true"
          theme={{
            primary: "#06f40a",
            secondary: "green",
            cardBgColor: "#010e01",
            titleColor: "#06f40a",
            titleColorActive: "white",
          }}
          enableBreakPoint
          verticalBreakPoint={400}
          onThemeChange="true"
          enableDarkToggle="true"
          
        />
      </div>
    </section>
  );
};

export default Timeline;
