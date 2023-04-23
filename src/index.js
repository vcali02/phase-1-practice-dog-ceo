//console.log('%c HI', 'color: firebrick')

//1. fetch /4 img when page loads
//2. parse response as json.
//3. add images to dom FOR EACH in the array

const dogDiv = document.querySelector("#dog-image-container")
const breedsUl = document.querySelector("#dog-breeds")

fetch(`https://dog.ceo/api/breeds/image/random/4`)
  .then((response) => response.json()) //turns json obj to js obj
  .then((dog) => {
    let singleDogArray = dog.message
    singleDogArray.map((dog) => {
      let dogImg = document.createElement("img")
      dogImg.src = dog
      dogDiv.append(dogImg)
    })
  })
//add dog BREEDS to the page in the UL
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((breeds) => {
    let manyDogsObj = breeds.message
    let manyDogsArray = Object.keys(manyDogsObj)
    manyDogsArray.map((breeds) => {
      breedsLi.addeventListener("click", (e) => {
         e.preventDefault()
      let breedsLi = document.createElement("li")
      //let dogKey = Object.keys(manyDogsObj)
      let breedBtn= document.createElement("button")
      breedsLi.textContent = breeds.split(",")
      breedsUl.append(breedsLi, breedBtn)

        breedsLi.style.color = "magenta"
      })
    })
})


//     if(breedsLi === "click"){
//       breedsLi.style.color = "magenta"
//     } else {
//       breedsLi.style.color = "black"
//     }
//  })
    // .join("")
    
    // if(manyDogsObj[element] === true){
    //   for(const element in manyDogsObj){
    //     let dogElement = manyDogsObj[element]
    //     let breedsLi = document.createElement("li")
    //     breedsLi.textContent = dogElement
    //     breedsUl.append(breedsLi)
    //   }
    // } else if(manyDogsObj[element] !== true){
    //   //let manyDogsObj = breeds.message
    //   //let breedsLi = document.createElement("li")
    //   let dogKey = Object.keys(manyDogsObj)
    //   breedsLi.textContent = dogKey
    //   breedsUl.append(breedsLi)
    // }
    // //manyDogsObj.map((breeds) => {
    //   // })
      
