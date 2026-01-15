import { useSearchParams } from 'react-router';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Content } from '../components/Content';

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  return (
    <div>
      <Header />
      <Content>
        Product Detail Page
        <p>Product ID: {id}</p>
      </Content>
      <Footer />
    </div>
  );
}
