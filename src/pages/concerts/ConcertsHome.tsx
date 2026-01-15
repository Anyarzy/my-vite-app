import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { ConcertNav } from '../../components/ConcertNav';

export default function ConcertsHome() {
  return (
    <div>
      <Header />
      <ConcertNav />
      <Content>Concert Home Page</Content>
      <Footer />
    </div>
  );
}
