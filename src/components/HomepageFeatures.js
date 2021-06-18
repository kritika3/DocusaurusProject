import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Creative',
    Svg: require('../../static/img/creative.svg').default,
    description: (
      <>
        I am inventive. I bring fresh perspective, I am experimental, I create new options and possibilities.
      </>
    ),
  },
  {
    title: 'Curious',
    Svg: require('../../static/img/curious.svg').default,
    description: (
      <>
        I am inquisitive, I ask questions to absorb, reflect and solve . I strive to learn & understand how my work is connected to others. I am flexible and open to ideas.
      </>
    ),
  },
  {
    title: 'Caring',
    Svg: require('../../static/img/caring.svg').default,
    description: (
      <>
        I am genuine & helpful, I support & empathise, I nurture and invest in relationships, I collaborate & co-create.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div style={{background: "whitesmoke", textAlign: "center"}}> 
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
