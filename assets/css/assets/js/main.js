// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Block common save/inspect shortcuts
document.addEventListener('keydown', function(e){
  if (e.ctrlKey && ['s','S','u','U','p','P'].includes(e.key)) {
    e.preventDefault();
  }
});

// Placeholder for future site search
function siteSearch(q){
  window.location.href = '/?q=' + encodeURIComponent(q);
}
