/**
 * https://javascript.plainenglish.io/the-ultimate-javascript-fetch-api-cheatsheet-e60b98c8cdbe
 */

export const API_HOST = "http://localhost:3210";

async function request(
  url,
  params,
  method = "GET",
  resType = "json",
) {
  // get token logic here
  const UserData = JSON.parse(localStorage.getItem("user"));
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: UserData ? UserData.token : null,
    },
    //  credentials: "include",
  };

  function objectToQueryString(obj) {
    return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  }

  if (params) {
    if (method === "GET") {
      // eslint-disable-next-line no-param-reassign
      url += `?${objectToQueryString(params)}`;
    } else {
      options.body = JSON.stringify(params);
    }
  }

  function generateErrorResponse(message, code) {
    const response = {
      status: "error",
      message,
    };
    return code ? { ...response, code } : response;
  }

  try {
    let newUrl = API_HOST + url;
    const response = await fetch(newUrl, options);
    const result = resType === "json" ? await response.json() : response;

    if (response.status >= 400) {
      const msg =
        typeof result === "string"
          ? result
          : "The server responded with an unexpected status.";
      return generateErrorResponse(msg, response);
    }

    // handle errors that return with a 200 status
    if (result.message_type === "error") {
      const msg =
        response.reason ||
        result.reason ||
        "An error occurred fetching resources.";
      const { code } = result;

      return generateErrorResponse(msg, code);
    }

    return result;
  } catch (e) {
    return generateErrorResponse("An error occurred fetching resources.");
  }
}

function get(url, params) {
  return request(url, params);
}

function post(url, params) {
  return request(url, params, "POST");
}

function update(url, params) {
  return request(url, params, "PUT");
}

function remove(url, params) {
  return request(url, params, "DELETE");
}

async function login(url, data) {
  const { username, password } = data;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };
  const response = await fetch(API_HOST + url, requestOptions);
  const result = await response.json();
  request(
    "/v2/log",
    {
      url: response.url,
      description: "Successfully logged in : " + username,
      messageType: "info",
    },
    "POST"
  );
  return result;
}

const Fetch = {
  get,
  post,
  update,
  remove,
  login,
};

export default Fetch;
