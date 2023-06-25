import React, { useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from '../Photos/comps/Modal';
import '../Photos/header.scss';
import HamburgerNav from '../NavBar/HamburgerNav';


const Header = () => {
    const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="HeaderApp">
      <HamburgerNav/>
      <Title/>
      
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default Header;