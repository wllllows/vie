import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import FunctionalPage from './FunctionalPages';
const Popup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div>
        <button  title='点击查看更多' className='mybutton' onClick={handleOpen}>
          客服
        </button>
      {isOpen && ReactDOM.createPortal(
       <div className="popup">
       <FunctionalPage />
     </div>,
     document.body
      )}
    </div>
  );
};
export default Popup;