import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { ConcertNav } from '../../components/ConcertNav';

export default function Trending() {
  return (
    <div>
      <Header />
      <ConcertNav />
      <Content>Trending Page</Content>
      <Footer />
    </div>
  );
}
