let notes = [];

// by this function we are recieving values from 
// input and textarea  and creating an object named 
// note and pushing or adding to array 

const createNote =()=>{
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    const note = {
        title:title.value,
        description:description.value,
        date:new Date()
    }

    notes.push(note);
    // console.log(notes);
    RenderNotes();
}
// create a function which will display all the notes 
// on the screen, javascript will create an li 
// element as  document.createElement('li')
// append that element to ul with id createdNotes

const RenderNotes = () => {
    const noteList = document.getElementById("createdNotes");
    noteList.innerHTML='';
    notes.forEach((note, index)=>{
        const li = document.createElement('li');
        li.textContent = note.title;
        const div=document.createElement("div");
        div.innerHTML=note.description;
        div.className="discrip"
        li.appendChild(div)
        const btn = document.createElement('button');

        btn.innerHTML = 'delete';
        btn.onclick=()=>{
            deletenote(index);
        }
        li.appendChild(btn)
        noteList.append(li);
    })
}

const deletenote =(index)=>{
    notes.splice(index,1);
    RenderNotes();
}

RenderNotes();