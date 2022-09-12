

const prev = `<a href="#" data-id="prev" class = "page">Prev</a>`;
const next = `<a href="#" data-id="next" class = "page">Next</a>`;

const pagination = document.getElementById('pagination');

pagination.addEventListener('click', (event) => {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => page.classList.remove('active'));

  const dataId = event.target.getAttribute('data-id');

  if (dataId === 'prev') {
    if (currentPage > 1) {
      const previousPage = document.querySelector(
        `[data-id="${currentPage - 1}"]`
      );
      previousPage.classList.add('active');
      currentPage -= 1;
    } else {
      const previousPage = document.querySelector(`[data-id="1"]`);
      previousPage.classList.add('active');
      currentPage = 1;
    }
  } else if (dataId === 'next') {
    const lastPage = Math.ceil(totalData / pageSize);
    if (currentPage < lastPage) {
      const nextPage = document.querySelector(
        `[data-id="${currentPage + 1}"]`
      );
      nextPage.classList.add('active');
      currentPage += 1;
    } else {
      const nextPage = document.querySelector(`[data-id="${lastPage}"]`);
      nextPage.classList.add('active');
      currentPage = lastPage;
    }
  } else {
    event.target.classList.add('active');
    currentPage = +dataId;
  }

  // Get Api Data Withe Current Page number ...
});

function addPaginationData(pageSize, totalData, currentPage) {
  const totalPage = Math.ceil(totalData / pageSize);
  let content = prev;

  for (let i = 1; i <= totalPage; i++) {
    const activeClass = i === currentPage ? 'active' : '';

    const ele = `<a href="#" data-id="${i}" class="page ${activeClass}">
    ${i}
    </a>`;

    content += ele;
  }
  content += next;
  pagination.innerHTML = content;
}

// Static Data
const pageSize = 10;
const totalData = 145;
let currentPage = 1;

addPaginationData(pageSize, totalData, currentPage);
