import './App.css';
 import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
  const App = () => {
   const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post',} }
   const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  const handleSubmit = (files,allFiles) => { 
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  
  }
 
  return (
    <>
    <div className="App">
      <h1>File_Uploaded</h1>
      <Dropzone
       getUploadParams={getUploadParams}
       maxFiles={5}
      //  maxSizeBytes={1024}
       onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      inputContent="Drop Files"
      accept="image/*,audio/*,video/*,"
    />
    </div>
    </>
  );
}

export default App;
