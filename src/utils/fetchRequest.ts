

const getRequest = async (url: string) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'X-API-KEY': '93GJgWpGAsGRI1zjzRNoCrvszwowqooi',
            accept: 'application/json'
        }
    });
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error('server error');
    }
}

export default getRequest