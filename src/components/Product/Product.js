import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faGlobe,
  faSignal
} from '@fortawesome/free-solid-svg-icons'

import {
  faHandPointRight,
  faUser,
  faFile,
  faIdCard
} from '@fortawesome/free-regular-svg-icons'

import Container from '../Container/Container'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Tabs from '../Tabs/Tabs'
import Rating from '../Rating/Rating'
import Section from '../Section/Section'
import CardAlt from '../Card/CardAlt'
import Label from '../Label/Label'
import Ad from '../Ad/Ad'

import styles from './Product.module.css'

const Product = ({
  title,
  image,
  tabs,
  priceOld,
  price,
  category,
  instructor
}) => (
  <div className={styles.product}>
    <Breadcrumbs
      crumbs={[{ href: '/', label: 'Home' }, { label: 'Technology' }]}
    />

    <header className={styles.product_header}>
      <Container>
        <div className={styles.product_intro}>
          <h2>{title}</h2>

          <p>
            <span>
              by{' '}
              <Link href="#">
                <strong>{instructor}</strong>
              </Link>
            </span>

            <span>
              <FontAwesomeIcon icon={faLocationDot} /> In-Person workshop,
              Edinburgh
            </span>
          </p>
        </div>
      </Container>
    </header>

    <Container className={styles.product_body}>
      <div className={styles.product_content}>
        <Section>
          <Tabs {...tabs} />
        </Section>

        <Section>
          <h3>Reviews</h3>

          <Rating />
        </Section>
      </div>

      <aside className={styles.product_aside}>
        <div className={styles.product_sticky}>
          <CardAlt
            className={styles.product_card}
            tag={category}
            image={image}
            price={price || priceOld}
            button={{ text: 'Buy Now' }}
            list={[
              { icon: faHandPointRight, text: '100% positive reviews' },
              { icon: faUser, text: 'Unlimited' },
              { icon: faFile, text: '10 lessons' },
              { icon: faGlobe, text: 'Language: English' },
              { icon: faIdCard, text: 'Private 1-1' },
              {
                icon: faSignal,
                text: (
                  <>
                    Skill level <Label color="blue">All levels</Label>
                  </>
                )
              }
            ]}
          />

          <Ad image="/ad1.jpg" href="#" text="Try For Free" />
        </div>
      </aside>
    </Container>
  </div>
)

export default Product
