function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  } 
  const tmb=[]
  const ul =document.querySelector('ul')
for (let i = 0; i < 10; i++) {
    const obj={
        isBooked:getRandomInt(2),
        pseudo:'user'+i,
        isSponsored:getRandomInt(2),
        avatarURL:'https://picsum.photos/100',
        imageURL:'https://picsum.photos/500',
        isLiked:getRandomInt(2),
        like:getRandomInt(1000)
    }
    tmb.push(obj)
    console.log(obj.isBooked==true)
    const li=document.createElement('li')
    li.className='post'
    const ul2=document.createElement('ul')
    li.appendChild(ul2)
    const li1=document.createElement('li')
    const li2=document.createElement('li')
    const li3=document.createElement('li')
    ul2.appendChild(li1)
    ul2.appendChild(li2)
    ul2.appendChild(li3)
    const img=document.createElement('img')
    img.src=obj.imageURL
    img.alt=obj.imageURL
    li2.appendChild(img)
    li1.className='infoU'
    const li4=document.createElement('li')
    const li5=document.createElement('li')
    const imgU=document.createElement('img')
    imgU.className='imgU'
    imgU.src=obj.avatarURL
    imgU.alt=obj.avatarURL
    li1.appendChild(imgU)
    ul.appendChild(li)
    console.log(li)
}