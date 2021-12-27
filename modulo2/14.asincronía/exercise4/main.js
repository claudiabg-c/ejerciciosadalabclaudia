'use strict';

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modalcontent');
const expiredMessage = document.querySelector('.expired');
const popUpMessage = document.querySelector('.popupmessage');

const showMessage = () => {
    popUpMessage.innerHTML = `<div class="modal">
    <aside class="modalcontent">
        <p class="expired">Su sesión ha expirado</p>
    </aside>
</div>`;
};

setTimeout(showMessage, 15000);