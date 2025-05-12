const country_URL = "https://studious-dollop-7vw6q5vw69693r5g6-6006.app.github.dev/country";

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch country Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#Countrytable tbody");

    data.forEach(country=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${country.country_id}</td>
        <td>${country.country_name}</td>
        <td>${country.region_id}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});