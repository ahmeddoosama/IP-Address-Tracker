BASE_URL = "https://geo.ipify.org/api/v1?apiKey=at_ZamL8QPHuXy13Kj5SJiSdREZ7R8yY&ipAddress=8.8.8.8";

async function checkResponse(res) {
    if(res.ok)
        return res.json();

    // Throw the error
    const err = await res.json();
    throw new Error(err.message);
};

async function fetchData(queryType, queryValue) {
    const requestString = !queryType ? BASE_URL : `${BASE_URL}&${queryType}=${queryValue}`;

    return await
        fetch(requestString).then(checkResponse).then(data => data).catch(err => {
            console.error(err)
            alert('Something went wrong, Please check the console for more info.')
        })
}


export default fetchData;