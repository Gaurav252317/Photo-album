import React, { useState,useEffect } from 'react';
import ProgressBar from './ProgressBar';
import useStorage from '../hooks/useStorage';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [fileDataUrl,setfileDataUrl]=useState(null);
  const [save,setSave]=useState(false);

  const types = ['image/png', 'image/jpeg','image/jpg'];

  const handleChange = (e) => {
  
    let selected = e.target.files[0];
    

    if (selected && types.includes(selected.type)) {
      setFile(selected);

      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setfileDataUrl(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);


 

  

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
        {/* <input type */}
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        {file && <ProgressBar file={file} setFile={setFile} /> }
        
      </div>
      {fileDataUrl ?
        <div className="img-preview-wrapper">
          <img src={fileDataUrl} alt="preview" width={100} />
          {/* <button onClick={HandleSave}>Save</button> */}
          

        </div> : null}
        
    </form>
  );
}

export default UploadForm;