document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-form');
  const input = document.getElementById('regex-input');
  const list = document.getElementById('whitelist-list');
  const incognitoSwitch = document.getElementById('incognito-switch');

  function renderList(regexes) {
    list.innerHTML = '';
    regexes.forEach((regex, idx) => {
      const li = document.createElement('li');
      li.textContent = regex;
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.className = 'delete-btn';
      delBtn.onclick = () => deleteRegex(idx);
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  }

  function loadList() {
    chrome.storage.sync.get({ whitelist: [] }, (data) => {
      renderList(data.whitelist);
    });
  }

  function addRegex(e) {
    e.preventDefault();
    const regex = input.value.trim();
    if (!regex) return;
    chrome.storage.sync.get({ whitelist: [] }, (data) => {
      const whitelist = data.whitelist;
      whitelist.push(regex);
      chrome.storage.sync.set({ whitelist }, loadList);
      input.value = '';
    });
  }

  function deleteRegex(idx) {
    chrome.storage.sync.get({ whitelist: [] }, (data) => {
      const whitelist = data.whitelist;
      whitelist.splice(idx, 1);
      chrome.storage.sync.set({ whitelist }, loadList);
    });
  }

  function loadIncognitoSwitch() {
    chrome.storage.sync.get({ applyIncognito: false }, (data) => {
      incognitoSwitch.checked = !!data.applyIncognito;
    });
  }

  function saveIncognitoSwitch() {
    chrome.storage.sync.set({ applyIncognito: incognitoSwitch.checked });
    chrome.runtime.sendMessage({
      type: 'UPDATE_INCOGNITO',
      value: incognitoSwitch.checked,
    });
  }

  form.addEventListener('submit', addRegex);
  incognitoSwitch.addEventListener('change', saveIncognitoSwitch);
  loadList();
  loadIncognitoSwitch();
});
