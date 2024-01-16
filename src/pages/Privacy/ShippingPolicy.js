import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Container from '../../components/Container/Container';

const ShippingPolicy = () => {
  return (
    <>
      <Meta title="DGC | Shipping Policy" />
      <BreadCrumb title="Shipping Policy" />

      <Container class1='home-wrapper-2 py-5 policy-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <div className='policy'>

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShippingPolicy;