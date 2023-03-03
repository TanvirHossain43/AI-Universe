const loadApiData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayApiData(data.data.tools))

}

const displayApiData = (tools) => {
    // console.log(data.tools[0].image)
    const dataContainer = document.getElementById('data-container')

    tools.forEach(tools => {

        const dataDiv = document.createElement('div')
        dataDiv.classList.add('col')
        dataDiv.innerHTML = `
            <div class="card h-100">
                <img src="${tools.image}" style ="height:200px" class="card-img-top img-fluid" alt="...">
                
                <div class="ps-3 pt-2">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">1.${tools.features[0]}</p>
                    <p class="card-text">2.${tools.features[1]}</p>
                    <p class="card-text">3.${tools.features[2]}</p>
                    
                    <hr class="mx-3">
                   
                </div>
               
                <div class="mt-0 px-3 d-flex align-items-center justify-content-between">
               <div> 
               <h4>${tools.name}</h4>
               <p>${tools.published_in}</P>
               </div>
               <div>
               <button onclick ="apiDetails(${tools.id})"  id="details-btn" class ="bg-warning-subtle text-danger fs-2 px-2 border-0 rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#apiDetailsModal">&#8594;</button>
               </div>
              </div>
            </div>

`
        dataContainer.appendChild(dataDiv)

    });
}

const apiDetails = apiId => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${apiId}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data.id))
}


loadApiData()

