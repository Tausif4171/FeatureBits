import React from 'react';
import logo from './logo.svg';
import './App.css';
import DragAndDropFileUpload from './features/DrapAndDropFileUpload'
import ImageInputBox from './features/ImageInputBox';
import StepperPopup from './features/Stepper';
import RightDetailsPanel from './features/RightDetailsPanel';
import MobileAndDesktopView from './features/MobileAndDesktopView';
import DragAndDropCards from './features/DragAndDropCards';

function App() {
  return (
    <div className=' bg-[#eee]'>

      {/* <DragAndDropFileUpload /> */}
      {/* <ImageInputBox /> */}
      {/* <StepperPopup /> */}
      {/* <RightDetailsPanel /> */}
      {/* <MobileAndDesktopView /> */}
      <DragAndDropCards />

    </div>
  );
}

export default App;
