import { commonRequest } from "./commonRequest";
import { baseUrl } from "./baseurl"


//add video
export const addVideo=async(body)=>{
    
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}
//get all video
export const getAllVideos=async()=>{
    
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}
//delete single video
export const deleteVideo=async(id)=>{
    return await commonRequest(`DELETE`,`${baseUrl}/videos/${id}`,{})
}
//add ctegory
export const addCategory=async(body)=>{
    
    return await commonRequest('POST',`${baseUrl}/categories`,body)
}
//get all category
export const getAllCat=async()=>{
    
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}
//category delete
export const deleteCat=async(id)=>{
    return await commonRequest(`DELETE`,`${baseUrl}/categories/${id}`,{})
}
// add history
export const addHistory=async(body)=>{
    
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}
// get all histories
export const getAllHistory=async()=>{
    
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}
// delete history
export const deleteHistory=async(id)=>{
    return await commonRequest(`DELETE`,`${baseUrl}/histories/${id}`,{})
}
//drag and drop
// access single video
export const getVideo=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}
// Update category
export const updateCategory=async(id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}
// get single categories
export const singleCategory=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/categories/${id}`,{})
}
// delete video from category
// export const singleDelCat=async(catId)=>{
//     return await commonRequest('DELETE',`${baseUrl}/categories/${catId}`,{})
// }