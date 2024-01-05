import React from 'react';
import logo from './logo.svg';
import './App.css';
import DragAndDropFileUpload from './features/DrapAndDropFileUpload'
import ImageInputBox from './features/ImageInputBox';
import StepperPopup from './features/Stepper';
import RightDetailsPanel from './features/RightDetailsPanel';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      {/* <DragAndDropFileUpload /> */}
      {/* <ImageInputBox /> */}
      {/* <StepperPopup /> */}
      <RightDetailsPanel />
    </div>
  );
}

export default App;
