const modal = document.getElementById("myModal");

modal.onbort("shown.bs.modal" , () => modal.trigger("focus"));