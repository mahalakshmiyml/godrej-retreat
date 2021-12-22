import './App.scss';
import TopMenubar from './Components/TopMenuBar/TopMenubar';
import MainSlider from './Components/MainSlider/MainSlider';
import Foooter from './Components/Footer/Foooter';

function App() {
  return (
    <div className="App">
      <TopMenubar />
      <MainSlider />
      {/* <FirstSection />
      <SecondSection />
      <ThirdSection /> */}
      <Foooter />
    </div>
  );
}

export default App;
