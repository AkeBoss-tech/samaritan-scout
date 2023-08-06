import React from "react";
import Section from "../components/Section";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <Section
        title="Our Mission"
        children={[
          "Samaritan Scout utilizes a program developed with natural language processing, crawling and scraping functionality, and database management, which serves as the basis for the search engine.",
          "To identify the websites of nonprofit organizations that seek volunteers, we are leveraging both technologies – using a diverse range of libraries and repositories – and human expertise. We are automating searches to help build our library, while also finding new websites and organizations from volunteer researchers and partners.",
        ]}
        cols={6}
        primary={false}
        separator={true}
      />
      <Section
        title="We Envision"
        children={[
          "a brighter tomorrow",
        ]}
        cols={12}
        primary={true}
        separator={false}
      />
      <Section
        title="Our Plan"
        children={[
          "Samaritan Scout [a 501(c)3] is developing a back-end Search Engine and front-end Community Platform to help people easily discover experiences where they can have an impact, apply skills, build community, and find joy.",
          "The underlying web crawler and criterion-specific search experience (developed by Rene Ravenal, Will Rosenthal, and a team of volunteers) will let you specify location and dates, causes, and activities. The front-end platform will support account creation, ‘favorite-ing’ of search results, and posting/sharing your activities.",
          "The team is currently building the proof of concept in the New York/New Jersey area and will select additional regions for future expansion.",
        ]}
        cols={4}
        primary={false}
        separator={true}
      />
      <Footer />
    </>
  );
}

export default About;
