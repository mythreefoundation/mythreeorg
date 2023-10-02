import { storage, db } from '../firestore'
import { getStorage, ref, getDownloadURL, listAll, uploadBytes, deleteObject } from 'firebase/storage'
import { collection, getDocs } from "firebase/firestore";

export const getTokenFromUrl = (url: string) => {
    const params = new URLSearchParams(new URL(url).search)
    return params.get('token') ?? ''
}

export const fetchImageURL = async (fileName: string) => {
    return await getDownloadURL(ref(storage, fileName))
}

export const fetchFileNames = async (folderName: string): Promise<string[]> => {
    const res = await listAll(ref(storage, folderName))
    let fileNames = Object.values(res.items)
        .filter((value) => value.name)
        .map((value) => value.name)
    return fileNames
}

export const fetchImagesURL = async (folderName: string): Promise<string[]> => {
    let allUrls: string[] = []
    try {
        // use await to get the result of listAll
        const res = await listAll(ref(storage, folderName))

        // Loop through the items array on the result object
        for (const itemRef of res.items) {
            // Get the download URL for each image
            try {
                const imgUrl = await getDownloadURL(itemRef)
                // Do something with the image URL, such as displaying it
                allUrls.push(imgUrl)
            } catch (error) {
                // Handle any errors
                console.error(error)
            }
        }
        return allUrls
    } catch (error) {
        console.error('Error fetching image URL:', error)
        return allUrls
    }
}

export const groupBy =
    (key: string) =>
        (array: any[]): Record<string, any[]> =>
            array.reduce((objectsByKeyValue, obj) => {
                const value = obj[key]
                objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
                return objectsByKeyValue
            }, {})

export const uploadFile = async (bucket: string, fileName: any) => {
    const storage = getStorage()
    const storageRef = ref(storage, bucket + "/" + fileName.name)

    return await uploadBytes(storageRef, fileName)
        .then((snapshot) => {
            console.log('Uploaded!')
            return true;
        })
        .catch((err) => {
            console.log('Error', err)
            return false;
        })
}

export const deleteFile = async (bucket: string, fileName: any) => {
    const storage = getStorage()
    const fileRef = ref(storage, bucket + "/" + fileName.name)

    // try {
    return await deleteObject(fileRef)
    // } catch (error) {
    //     console.error('Error deleting file:', error);
    // }
}

export const getFullUrlPath = (folderName: string, fileName: string, token: string) => {
    let xmlFileName = encodeURIComponent(fileName);
    return "https://firebasestorage.googleapis.com/v0/b/mythree-org.appspot.com/o/" + folderName + "%2F" + xmlFileName + "?alt=media&token=" + token;
}

export const readCollection = async function (collectionName: string) {
    // Get a reference to the events collection
    const eventsRef = collection(db, collectionName);

    // Get all documents in the events collection
    const querySnapshot = await getDocs(eventsRef);

    // Map each document to an object of MyObject type
    let collectionData = querySnapshot.docs.map((doc) => {
        // Get the document data
        const data = doc.data();
        // Return an object that matches your interface
        return {
            id: doc.id,
            data: data,
        };
    });

    return collectionData;
}

export const sortByDateAscending = (list: any[]): any[] => {
    return list.sort((a, b) => {
        if (a.publishedDate === undefined && b.publishedDate === undefined) {
            return 0;
        } else if (a.publishedDate === undefined) {
            return -1;
        } else if (b.publishedDate === undefined) {
            return 1;
        } else {
            const dateA = new Date(a.publishedDate).getTime();
            const dateB = new Date(b.publishedDate).getTime();
            return dateA - dateB;
        }
    });
}

export const sortByDateDescending = (list: any[]): any[] => {
    return list.sort((a, b) => {
        if (a.publishedDate === undefined && b.publishedDate === undefined) {
            return 0;
        } else if (a.publishedDate === undefined) {
            return -1;
        } else if (b.publishedDate === undefined) {
            return 1;
        } else {
            const dateA = new Date(a.publishedDate).getTime();
            const dateB = new Date(b.publishedDate).getTime();
            return dateB - dateA;
        }
    });
}