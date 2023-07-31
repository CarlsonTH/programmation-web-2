function showArticle() {
    let articleSection = document.querySelector('article');
  
    let articleTitle = '<h2>Du nouveau en javascript</h2>';
  
    let articleContent = '<p>Lorem ipsum, <strong>dolor</strong> sit amet consectetur adipiscing elit</p>';
    let articleContent2 = '<p>Lorem ipsum, <strong>dolor</strong> sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
  
    let articleHTML = articleTitle + articleContent + articleContent2;
  
    articleSection.innerHTML = articleHTML;
  }
  