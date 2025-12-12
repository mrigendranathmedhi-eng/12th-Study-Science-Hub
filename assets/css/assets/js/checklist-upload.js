// checklist-upload.js
document.addEventListener('DOMContentLoaded', function(){
  const photoInput = document.getElementById('photoInput');
  const preview = document.getElementById('preview');
  const form = document.getElementById('practiceForm');
  const status = document.getElementById('status');
  const saveLocal = document.getElementById('saveLocal');

  // Preview selected image
  if(photoInput){
    photoInput.addEventListener('change', function(){
      preview.innerHTML = '';
      const f = this.files[0];
      if(!f) return;
      const img = document.createElement('img');
      img.style.maxWidth = '100%';
      img.style.borderRadius = '8px';
      preview.appendChild(img);

      const reader = new FileReader();
      reader.onload = e => img.src = e.target.result;
      reader.readAsDataURL(f);
    });
  }

  // Local save checklist progress
  if(saveLocal){
    saveLocal.addEventListener('click', function(){
      const data = {};
      form.querySelectorAll('input[type="checkbox"]').forEach(cb => data[cb.name] = cb.checked);
      localStorage.setItem('practice_progress', JSON.stringify(data));
      status.textContent = 'Progress saved.';
      setTimeout(()=> status.textContent = '', 3000);
    });

    try{
      const saved = JSON.parse(localStorage.getItem('practice_progress'));
      if(saved){
        form.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = !!saved[cb.name]);
      }
    }catch(e){}
  }

  // Submit message
  if(form){
    form.addEventListener('submit', function(){
      status.textContent = 'Submitting...';
    });
  }
});
