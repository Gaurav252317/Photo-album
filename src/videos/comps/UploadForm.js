import React, { useState } from 'react';
import ProgressBar from '../../videos/comps/ProgressBar';

const VideoUploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['video/mp4'];

  const handleChange = (e) => {
  
    let selected = e.target.files[0];
    

    if (selected && types.includes(selected.type)) {
      setFile(selected);

      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (mp4)');
    }
  };

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
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default VideoUploadForm;