function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const tmb=[];
  const ul =document.querySelector('ul');
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
    tmb.push(obj);
    const li=document.createElement('li');
    li.className='post';
    const ul2=document.createElement('ul');
    li.appendChild(ul2);
    const li1=document.createElement('li');
    const li2=document.createElement('li');
    const li3=document.createElement('li');

    ul2.appendChild(li1);
    ul2.appendChild(li2);
    ul2.appendChild(li3);
    const img=document.createElement('img');
    img.src=obj.imageURL;
    img.alt=obj.imageURL;
    li2.appendChild(img);
    const ul3 = document.createElement('ul')
    li1.appendChild(ul3)
    ul3.className='infoU';
    const li4=document.createElement('li');
    li4.className='avatar'
    const li5=document.createElement('li');
    const imgU=document.createElement('img');
    imgU.className='imgU';
    imgU.src=obj.avatarURL;
    imgU.alt=obj.avatarURL;
    const pseudo=document.createElement('h4');
    pseudo.textContent=obj.pseudo;
    li4.appendChild(imgU);
    li5.appendChild(pseudo);
    if(obj.isSponsored==true){
        const sponsored=document.createElement('p');
        sponsored.className='sponsored';
        sponsored.textContent='sponsored';
        li5.appendChild(sponsored);
    }
    li5.className='li5';
    ul3.appendChild(li4);
    ul3.appendChild(li5);
    const li6 =document.createElement('li');
    const li7 =document.createElement('li');
    const coeur= document.createElement('i');
    if(obj.isLiked==true){
        coeur.className="fa-solid fa-heart";
    }
    else{
        coeur.className="fa-regular fa-heart";
    }
    const comment= document.createElement('i');
    comment.className="fa-solid fa-comment";
    const partager= document.createElement('i');
    partager.className="fa-solid fa-paper-plane";
    const like =document.createElement('p');
    like.className='like';
    like.textContent=obj.like+' like';
    const booke=document.createElement('i');
    if(obj.isBooked==true){
        booke.className="fa-solid fa-bookmark";
    }
    else{
        booke.className="fa-regular fa-bookmark";
    }
    const ul4=document.createElement('ul')
    ul4.className='ul4';
    li3.appendChild(ul4)
    li6.appendChild(coeur);
    li6.appendChild(comment);
    li6.appendChild(partager);
    li6.appendChild(like);
    li7.appendChild(booke);
    ul4.appendChild(li6);
    ul4.appendChild(li7);
    ul.appendChild(li);
}