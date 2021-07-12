import { Button } from '@material-ui/core'
import React from 'react'
import { FileUploadContainer } from './FileUpload.Style'

interface FileUploadProps {
  label: string
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
}) => {
  const mimeType: string[] = [
    'image/png',
    'image/jpeg',
  ]
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
        if (!mimeType.includes(file.type)) {
          // let fileName =
          //   file.name.split('.')[0] ?? ''
          if (file.size / 1024 / 1024 < 1) {
            getBase64(file, (result: any) => {
              console.log(result)
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
        {/* <b> No File Selected: </b> */}
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
      </FileUploadContainer>
    </>
  )
}

export default FileUpload
