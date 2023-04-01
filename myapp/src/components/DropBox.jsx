import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadFile from "@mui/icons-material/UploadFile";



function DropBox() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);

    // Create an S3 object with the access key, secret access key, and region of your S3 bucket
 


    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "video/mp4": [] },
    onDrop,
  });

  return (
    <section className="grid justify-center ">
      {/* Preview */}
      <div className="m-auto mb-6">
        <ul className="flex  ">
          {files.map((file) => (
            <li key={file.name}>
              <video width="80%" height="100" controls className="m-auto mb-6">
                <source src={file.preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ width: "100%" }}
        className="box border-2 rounded-lg bg-teal-500 py-10 px-24 font-bold text-xl flex justify-center text-white hover:bg-teal-600"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop files here</p>
        ) : (
          <button className="">
            <UploadFile /> Upload Here
          </button>
        )}
      </div>
    </section>
  );
}

export default DropBox;
