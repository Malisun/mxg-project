import { FlexBox } from 'ws-react-flex-layout';
import './mainPage.css';

function MainPage() {
  return (
    <FlexBox
      node={'div'}
      className={'mainPage'}
      row={'center center'}
    >
      Дороу, пиздец, я работаю! Тёма пидор!
    </FlexBox>
  );
}

export default MainPage;
