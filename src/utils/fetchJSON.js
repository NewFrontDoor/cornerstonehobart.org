import fetch from "isomorphic-fetch";
import config from "react-global-configuration";

//Example suffix: all_sermons_api?filters[preacher]=keith&filters[title]=reality

//API uses Services and Services views on the drupal 7 instance

export function getFromDrupalAPI(url, callback) {
	if (url.includes("?")) {
		url += "&display_id=services_1";
	} else {
		url += "?display_id=services_1";
	}
	fetch(config.get("DRUPAL_BASE_API_URL") + url)
		.then((resp) => resp.json())
		.then(function (data) {
			callback(data);
		})
		.catch(function (error) {
			console.error(error);
		});
}

export function searchDrupalSermons(query, type, callback) {
	const DRUPAL_SEARCH_SERMONS = config.get("DRUPAL_BASE_API_URL") + "all_sermons_api?display_id=services_1&filters";
	fetch(DRUPAL_SEARCH_SERMONS + "[" + type + "]=" + query)
		.then((resp) => resp.json())
		.then(function (data) {
			callback(data);
		})
		.catch(function (error) {
			console.error(error);
		});
}
