import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { FileModal } from '../../modals/FileModal'
import { FileUploadContainer } from './FileUpload.Style'

interface FileUploadProps {
  mimeType: string[]
  label: string
  onChangeFile?: (fileObject: FileModal) => void
  file: FileModal
}

const FileUpload: React.FC<FileUploadProps> = ({
  mimeType,
  label,
  onChangeFile,
  file,
}) => {
  const [fileObject, setFileObject] =
    useState<FileModal>(file)

  const getBase64 = (file: any, result: any) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      result(reader.result)
    }
    reader.onerror = function (error) {
      console.log('Error: ', error)
    }
  }

  const handleFile = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      try {
        if (mimeType.includes(file.type)) {
          let fileName =
            file.name.split('.')[0] ?? ''
          if (file.size / 1024 / 1024 < 1) {
            getBase64(file, (result: any) => {
              console.log(result)
              // setFileName(fileName)
              setFileObject({
                fileName: fileName,
                fileSrc: result,
              })
              onChangeFile &&
                onChangeFile({
                  fileName,
                  fileSrc: result,
                })
            })
          } else {
            console.log('File size exceeds 1 MiB')
          }
        } else {
          console.log(
            'Please select image file type only'
          )
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      console.log('error in file ')
    }
  }

  return (
    <>
      <FileUploadContainer>
        {/* <b>{fileName ? fileName : 'No File'} </b> */}
        <Button
          variant="contained"
          color="primary"
          size="small"
          component="label"
        >
          Upload {label}
          <input
            type="file"
            hidden
            accept={mimeType.join(',')}
            onChange={handleFile}
          />
        </Button>
        &nbsp;
        <b>
          {fileObject.fileName
            ? fileObject.fileName
            : 'No File'}
        </b>
      </FileUploadContainer>
    </>
  )
}

export default FileUpload
