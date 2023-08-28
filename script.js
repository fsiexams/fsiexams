// 在这里可以添加一些交互效果
document.addEventListener('DOMContentLoaded', function() {
  // 例如，当用户点击链接时改变内容
  const content = document.getElementById('content');
  const mathLink = document.querySelector('nav li:nth-child(2) a');
  const scienceLink = document.querySelector('nav li:nth-child(3) a');
  const historyLink = document.querySelector('nav li:nth-child(4) a');
  
  mathLink.addEventListener('click', function() {
      content.innerHTML = '<h2>数学学习资料</h2><p>这里是关于数学的学习资料。</p>';
  });
  
  scienceLink.addEventListener('click', function() {
      content.innerHTML = '<h2>语文学习资料</h2><p>这里是关于语文的学习资料。</p>';
  });
  
  historyLink.addEventListener('click', function() {
      content.innerHTML = '<h2>英语学习资料</h2><p>这里是关于英语的学习资料。</p>';
  });
});
