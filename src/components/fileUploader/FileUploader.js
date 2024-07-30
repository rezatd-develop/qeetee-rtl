import Image from 'next/image';
import fileUploaderIcon from '../../files/images/icons/file-uploader.png';


export default function FileUploader() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column file-uploader rounded">
            <div className='mt-1 mb-2'>
                <Image className='mx-2' width={17} src={fileUploaderIcon} />
            </div>
            <p className='font-size-750 info-color mb-3'>
                Upload Image/File
            </p>
        </div>
    )
}
