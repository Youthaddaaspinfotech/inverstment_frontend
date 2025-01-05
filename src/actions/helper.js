import axios from "axios";
import { BASE_URL } from "./constant";
import { PORT } from "./constant";
var CancelToken = axios.CancelToken;
let wj_cancel;
let resp;
export const request = (path, data, method) => {
	try {
		// let url = `https://bikerentalapi.youthadda.co`;
		let url = "http://localhost:4000";

		var options = {
			method: method,
			// url: `${process.env.REACT_APP_API_URL}/${path}`,
			url: url + "/" + path,
			headers: {
				"Content-Type": "application/json",
				'Content-Type': 'multipart/form-data',
				"Authorization": ""
			},
			dataType: 'json',
			cancelToken: new CancelToken(function executor(c) {
				wj_cancel = c;
			})
		};

		if (localStorage.getItem("jwtToken")) {
			options.headers["Authorization"] = localStorage.getItem("jwtToken");
		} else if (localStorage.getItem("authorization")) {
			options.headers["Authorization"] = localStorage.getItem("authorization");
		}

		if (method === "GET") {
			options["params"] = data;
		}
		else {
			options["data"] = data;
		}

		let responce = axios(options);
		responce.then(res1 => {
			resp = res1;
			if (res1.data.code === 402) {
				localStorage.clear();
			}

			if (res1.data.code === 501) {
				window.location.href = "/login";
			}
		}).catch(function (error) {
			//alert(error)
			//window.location.href = "/login";

			// if (error.response) {
			//   console.log('123',error);
			//   console.log(error.response.status);
			//   console.log(error.response.headers);
			// }
		});
		return responce;

	} catch (error) {
		console.log(error);
	}
}

export const postRequest = (path, data) => request(path, data, "POST")
export const putRequest = (path, data) => request(path, data, "PUT")
export const getRequest = (path, data) => request(path, data, "GET")