import { useParams } from 'react-router';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { ConcertNav } from '../../components/ConcertNav';

export default function City() {
  const params = useParams();
  return (
    <div>
      <Header />
      <ConcertNav />
      <Content>City Page 공연 도시: {params.city}</Content>
      <Footer />
    </div>
  );
}
