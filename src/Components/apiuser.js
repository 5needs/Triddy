import axios from "axios";

var appUrl = "http://ec2-34-203-184-51.compute-1.amazonaws.com:8080";

var client = axios.create({
	baseURL: appUrl + "/api",
	timeout: 1000,
	headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
});



export default async function getNotifications(callback){
	var notifList = [];
	let path = "users/" + localStorage.getItem("user") + "/notifications"
	await client.get(path)
	.then(response => response.data)
	.then(data => {
		data.forEach(function (notif) {
			notifList.push(
				notif
			)  
		});
	})
	.catch(function (error) {
		console.log(error);
	});
	callback(notifList);
}