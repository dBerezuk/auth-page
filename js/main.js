const authTypeBoxButtons = document.querySelector('.auth__top');
const authTypeButtons = document.querySelectorAll('.auth__top-button');
const authFieldGroups = document.querySelectorAll('.auth__field-group');

authTypeBoxButtons.addEventListener('click', onAuthTypeButtons);

function onAuthTypeButtons(e) {
  const button = e.target.closest('.auth__top-button');
  if (button) {
    authFieldGroups.forEach(group => {
      if (button.dataset.type === group.dataset.type) {
        authFieldGroupsHides(authTypeButtons);
        button.classList.add('is-active');

        authFieldGroupsHides(authFieldGroups, true);

        group.disabled = false;
        return group.classList.add('is-active');
      }
    });
  }
}

function authFieldGroupsHides(collection, disabled) {
  collection.forEach(elem => {
    if (disabled) elem.disabled = true;

    elem.classList.remove('is-active');
  });
}
