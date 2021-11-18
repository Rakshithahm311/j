const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');
let limit = 5;
let page = 1;
async function getPosts() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )

    const data = await res.json()
    return data
}

async function showposts() {
    const posts = await getPosts()
    

    posts.forEach(post => {
        const postel = document.createElement('div')
        postel.classList.add('post')
        postel.innerHTML =
            `<div class="number">${post.id}</div>
        <div class="post-info">
        <div class="post-title">${post.title}</div>
        <div class="post-body">${post.body}</div></div>`
        postsContainer.appendChild(postel)

    });
}

showposts()

function showloading(){
    loading.classList.add('show')

    setTimeout(()=>{
        loading.classList.remove('show')
        setTimeout(()=>{
            page++
            showposts()
        },300)
    },700)
}
// filtering elemnts

function filterelem(e){
    const term = e.target.value.toUpperCase()
    const posts = document.querySelectorAll('.post')

    posts.forEach(post =>{
        const title = post.querySelector('.post-title').innerText.toUpperCase()
        const body = post.querySelector('.post-body').innerText.toUpperCase()
        if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
            post.style.display = 'flex'
        }else{
            post.style.display = 'none'
        }
    })


}

// event listeners

window.addEventListener('scroll' , ()=>{
    const { scrollTop , scrollHeight , clientHeight}  = document.documentElement
    console.log(document.documentElement.scrollHeight)
    if(scrollTop+clientHeight >= scrollHeight){
        showloading()
    }
})

filter.addEventListener('input' , filterelem)
