export default async function getData<T>(url):T {
    const res = await fetch<T>(url,{
        "cache": "no-cache"
    });
    return res.json();
}