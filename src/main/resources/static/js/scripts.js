document.addEventListener("DOMContentLoaded", function() {
   let dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
   M.Dropdown.init(dropdownTriggers, {'coverTrigger': false});

   let tabs = document.querySelectorAll(".tabs");
   M.Tabs.init(tabs);
});