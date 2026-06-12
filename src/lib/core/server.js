const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    
    if (!res.ok) {
        console.error(`Fetch failed: ${path}`, res.status);
        return null;
    }
    
    return res.json(); // ✅ এটাও চলবে কারণ ok হলে body সবসময় থাকবে
};

export const serverMutation = async (path,data)=>{
    const res = await fetch(`${baseUrl}${path}`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
    });
    return res.json();
}