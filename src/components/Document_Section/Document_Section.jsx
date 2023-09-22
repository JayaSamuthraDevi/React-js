import React from "react";
import './Document_Section.css';
import Icons from "./../../assets/icons/Icons";
import DisplayFiles from "./Display_Doc";

function Document_Section() {
  return (
    <>
      <div className="container col-6">
        <div className="doc-header">
        <h1>PDFChatBot</h1>
        <p>
          PDFChatBot is a software tool or service that enables conversational
          interactions with PDF documents, simplifying the extraction of
          information through natural language conversations.
        </p>
        </div>
       

        <div className="upload-box ">
          <div class=" upload-area">
            <img src={Icons.upload_cloud_icon} alt="upload-file-icon" />
            <div className="upload-file-rigt-part">
              <div class=" upload-file-placeholderText">
                <h6>Select a file or drag and drop here</h6>
                <p>PDF, TXT or DOCX file, size no more than 10MB</p>
              </div>
              <input
                type="file"
                id="file"
                name="file"
                accept=".doc,.docx,.pdf"
                multiple
                onChange={(e) => {
                 if(e.target.files.length!==0){
                    DisplayFiles(
                      e.target.files[0]["name"],
                      e.target.files[0]["size"]
                    );}
                  
                }}
              />
              <label htmlFor="file">
                <h5>SELECT FILE</h5>
              </label>
            </div>
          </div>

         
          <div id="upload-file"></div>
        </div>
      </div>
    </>
  );
}

export default Document_Section;
