


document.addEventListener('keydown',(e)=>{
    document.querySelector('tbody').innerHTML+=`<tr>
        <td>${e.key===' '?'Space':e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>`; 
})