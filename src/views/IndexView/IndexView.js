import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  GetStarted,
  Features,
  Reviews,
  QuickStart,
  Services,
  Hero,
  Solutions,
  Browsers,
  Places,
} from './components';

import {
  partners,
  features,
  browsers,
  advantages,
  webinars,
  platforms,
  places,
} from './data';

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
      {/* <Services /> */}

      <Section id="contact" narrow>
        <GetStarted />
      </Section>
      <Divider />

      <SectionAlternate>
        <Solutions data={features} />
      </SectionAlternate>
      <Section>
        <Browsers data={browsers} />
      </Section>

      <SectionAlternate>
        <Places data={places} />
      </SectionAlternate>
      {/* <SectionAlternate
        id="home"
        className={classes.sectionAlternateNoPaddingTop}
      >
        <QuickStart />
      </SectionAlternate> */}
      {/* <SectionAlternate id="token">
        <Features />
      </SectionAlternate>
      <Section id="roadmap">
        <Reviews />
      </Section>
      <Section id="team" className={classes.dividerSection}>
        <Divider />
      </Section> */}
      {/* <SectionAlternate id="contact" narrow>
        <QuickStart />
      </SectionAlternate> */}
      {/* <Section id="contact" narrow>
        <GetStarted />
      </Section> */}
    </div>
  );
};

export default IndexView;
