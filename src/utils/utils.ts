import { storage } from '../firestore';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

export const getTokenFromUrl = (url: string) => {
    const params = new URLSearchParams(new URL(url).search);
    return params.get("token") ?? "";
};

export const fetchImageURL = async (fileName: string) => {
    return await getDownloadURL(ref(storage, fileName));
}

export const fetchFileNames = async (folderName: string): Promise<string[]> => {
    const res = await listAll(ref(storage, folderName));
    let fileNames = Object.values(res.items).filter(value => value.name).map(value => value.name);
    return fileNames;
}

export const fetchImagesURL = async (folderName: string): Promise<string[]> => {
    let allUrls: string[] = [];
    try {

        // use await to get the result of listAll
        const res = await listAll(ref(storage, folderName));

        // Loop through the items array on the result object
        for (const itemRef of res.items) {
            // Get the download URL for each image
            try {
                const imgUrl = await getDownloadURL(itemRef);
                // Do something with the image URL, such as displaying it
                allUrls.push(imgUrl);
            } catch (error) {
                // Handle any errors
                console.error(error);
            }
        }
        return allUrls;

    } catch (error) {
        console.error('Error fetching image URL:', error);
        return allUrls;
    }
}

export const groupBy = (key: string) => (array: any[]): Record<string, any[]> =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});
