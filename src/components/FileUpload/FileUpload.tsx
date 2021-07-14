import { Box, Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { FileModal } from '../../modals/FileModal'
import { FileUploadContainer } from './FileUpload.Style'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

interface FileUploadProps {
  mimeType: string[]
  fileType: string
  fileSupportMsg: string
  label: string
  onChangeFile?: (fileObject: FileModal) => void
  file: FileModal
}

const FileUpload: React.FC<FileUploadProps> = ({
  mimeType,
  fileType,
  label,
  onChangeFile,
  file,
  fileSupportMsg,
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

  const openNewTab = () => {
    if (
      fileObject &&
      fileObject.fileName !== '' &&
      fileObject.fileSrc !== ''
    ) {
      if (fileType === 'image') {
        // preview code for image
        let image = new Image()
        image.src = fileObject.fileSrc
          ? fileObject.fileSrc
          : ''
        let w = window.open('')
        w!.document.write(image.outerHTML)
        w!.document.title = fileObject.fileName
      } else {
        // preview code for pdf
        let pdfWindow = window.open('')
        pdfWindow!.document.write(
          "<iframe width='100%' height='99%' src='data:application/pdf;base64, " +
            encodeURI(
              fileObject.fileSrc.split(',')[1]
            ) +
            "'></iframe>"
        )
        pdfWindow!.document.title =
          fileObject.fileName
      }
    } else {
      console.log('something went to wrong')
    }
  }

  return (
    <>
      <FileUploadContainer>
        <Box component="span" mr={5}>
          <b>
            {fileObject.fileName
              ? fileObject.fileName
              : 'No File Selected'}
          </b>
        </Box>
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
        {fileObject.fileName && (
          <Box component="span" ml={2}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={openNewTab}
              startIcon={<OpenInNewIcon />}
            >
              preview
            </Button>
          </Box>
        )}
        <p>{fileSupportMsg}</p>
      </FileUploadContainer>
    </>
  )
}

export default FileUpload
