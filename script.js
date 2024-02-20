document.addEventListener('DOMContentLoaded', function() {
            const bForm = document.getElementById('blogForm');

            bForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
            
                const title= document.getElementById('title').value;
                const body= document.getElementById('content').value;
                const author= document.getElementById('author').value;
              
                const myDiv = document.createElement('div');
                const title_h2 = document.createElement('h2');
                const author_p = document.createElement('p');
                const body_p = document.createElement('p');
                const curr_time = new Date().toISOString().slice(0, 10);

                // Append the h2 and p elements to the div
          
              
                title_h2.textContent=title;
              
                author_p.innerHTML = `Posted on <time datetime="${curr_time}">${curr_time}</time> by ${author}`;
              
                body_p.textContent=body;
                
              
                myDiv.appendChild(title_h2);
                myDiv.appendChild(body_p);
                myDiv.appendChild(author_p);
              
                document.getElementById("blogPosts").appendChild(myDiv);
              
                blogForm.reset();
});
  
});
