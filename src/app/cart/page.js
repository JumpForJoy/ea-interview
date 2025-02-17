import Section from '@/components/Section/Section'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'

const CartPage = async () => (
  <>
    <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { label: 'Cart' }]} />

    <Section>
      <h2>Cart</h2>
    </Section>
  </>
)

export const metadata = {
  title: 'Cart - EA Trading Academy'
}

export default CartPage
