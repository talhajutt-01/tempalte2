const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');

const title = document.getElementById('title');

const h0 = document.getElementById('h0');

const c0 = document.getElementById('c0');

const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');

const clients = document.getElementById('clients');
const clients0 = document.getElementById('clients0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const c10 = document.getElementById('c10');
const c11 = document.getElementById('c11');

const paragraph1 = document.getElementById('paragraph1');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }
  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    fetch('t.txt')
        .then(response => response.json())
        .then(jsonData => {
            // Update content based on the current page
            updateContent(title, jsonData.title.title);
            updateContent(nav0, jsonData.nav.nav0);
            updateContent(nav1, jsonData.nav.nav1);
            updateContent(nav2, jsonData.nav.nav2);
            updateContent(nav3, jsonData.nav.nav3);
            updateContent(h0, jsonData.h.h0);
            updateContent(c0, jsonData.c.c0);
            updateContent(a0, jsonData.about.a0);
            updateContent(a1, jsonData.about.a1);
            updateContent(a2, jsonData.about.a2);
            updateContent(a3, jsonData.about.a3);
            updateContent(a4, jsonData.about.a4);
            updateContent(a5, jsonData.about.a5);

            updateContent(clients, jsonData.clients.clients);
            updateContent(clients0, jsonData.clients.clients0);
            updateContent(c1, jsonData.clients.c1);
            updateContent(c2, jsonData.clients.c2);
            updateContent(c3, jsonData.clients.c3);
            updateContent(c4, jsonData.clients.c4);
            updateContent(c5, jsonData.clients.c5);
            updateContent(c6, jsonData.clients.c6);
            updateContent(c7, jsonData.clients.c7);
            updateContent(c8, jsonData.clients.c8);
            updateContent(c9, jsonData.clients.c9);
            updateContent(c10, jsonData.clients.c10);
            updateContent(c11, jsonData.clients.c11);

            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
                updateContent(h0, jsonData.h.h0);
            } else if (fileName === 'contact.html') {
                updateContent(c0, jsonData.c.c0);
            } else if (fileName === 'about.html') {
                updateContent(a0, jsonData.about.a0);
                updateContent(a1, jsonData.about.a1);
                updateContent(a2, jsonData.about.a2);
                updateContent(a3, jsonData.about.a3);
                updateContent(a4, jsonData.about.a4);
                updateContent(a5, jsonData.about.a5);

                updateContent(clients, jsonData.clients.clients);
                updateContent(clients0, jsonData.clients.clients0);
                updateContent(c1, jsonData.clients.c1);
                updateContent(c2, jsonData.clients.c2);
                updateContent(c3, jsonData.clients.c3);
                updateContent(c4, jsonData.clients.c4);
                updateContent(c5, jsonData.clients.c5);
                updateContent(c6, jsonData.clients.c6);
                updateContent(c7, jsonData.clients.c7);
                updateContent(c8, jsonData.clients.c8);
                updateContent(c9, jsonData.clients.c9);
                updateContent(c10, jsonData.clients.c10);
                updateContent(c11, jsonData.clients.c11);
            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});
