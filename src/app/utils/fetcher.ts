export default async function getData<T>(url):Promise<T> {
    const res = await fetch(url,{
        "cache": "no-cache"
    });
    return res.json();
}