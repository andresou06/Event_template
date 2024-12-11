const svg_btn = document.querySelector('.svg_btn');

const nested_headers = document.querySelector('.nested_headers');

const close_headers = document.querySelector('.close_header');

svg_btn.addEventListener('click', () => {
    nested_headers.showModal();
})

close_headers.addEventListener('click', () => {
    nested_headers.close();
})