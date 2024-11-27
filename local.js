const set =() =>{
    const age = localStorage.setItem('age', 12);
    

}
const get =() =>{
    const age = localStorage.getItem('age');
    console.log(age)
}

localStorage.length