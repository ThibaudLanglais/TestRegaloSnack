import * as ImagePick from 'expo-image-picker';
import * as FileSys from 'expo-file-system'

async function getFileInfo(fileURI){
    const fileInfo = await Filesys.getInfoAsync(fileURI)
    return fileInfo
 }

function isLessThanMb(fileSize, sizeLimit){
    return fileSize / 1024 / 1024 < sizeLimit;
}

export { ImagePick as ImagePicker, FileSys as FileSystem, getFileInfo, isLessThanMb };