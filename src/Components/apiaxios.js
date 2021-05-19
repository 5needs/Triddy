import axios from "axios";

const generateClient = (appUrl) => {
	var client = axios.create({
		baseURL: appUrl,
		timeout: 1000,
		headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
	});
	return client;
}

export const get = (url,path) => {
	var client = generateClient(url);
    return new Promise((resolve, reject) => {
        client.get(path)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const post = (url,path, data) => {
	var client = generateClient(url);
    return new Promise((resolve, reject) => {
        client.post(path, data)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const put = (url,path, data) => {
	var client = generateClient(url);
    return new Promise((resolve, reject) => {
        console.log(data);
        client.put(path, data)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const deleteRequest = (url,path, data) => {
	var client = generateClient(url);
    return new Promise((resolve, reject) => {
        client.delete(path, data)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}