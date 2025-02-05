fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    if(!response.ok){
        throw new Error("Network Response Was Not OK"); 
    }
    return response.json();
})
.then((users)=>
{
    const tabsContainer = document.getElementById("tabs");
    const contentContainer = document.getElementById("content");

    users.forEach((user,index) => {
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.textContent = `User ${index + 1}`;
        tab.addEventListener("click" , ()=>{
            document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));

            tab.classList.add("active");

            contentContainer.textContent = `Username : ${user.username}`;
        });

        if(index==0)
        {
            tab.classList.add("active");
            contentContainer.textContent = `Username : ${user.username}`;
        }

        tabsContainer.appendChild(tab);
    });

})
.catch((error) =>{
    console.error("Error Fetching Users:",error);
    document.getElementById("content").textContent = "Failed to load Users. Please Try Again Later."; 
});