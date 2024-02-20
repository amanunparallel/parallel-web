document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.work-tab-content-card-wrapper').forEach(trigger => {
  trigger.addEventListener('mouseover', function(){ 
    this.querySelectorAll('.work-card-img').forEach(target => target.classList.add('zoom')); 
  });
 }); 
 
 document.querySelectorAll('.work-tab-content-card-wrapper').forEach(trigger => {
  trigger.addEventListener('mouseout', function(){ 
    this.querySelectorAll('.work-card-img').forEach(target => target.classList.remove('zoom')); 
  });
 }); 
});
