const tbody = document.querySelector('tbody');

fetch("http://localhost:3000/categories")
  .then((response) => response.json())
  .then((response) => {
    showCategory(response);

    const btnUpdate = document.querySelectorAll(".btn-update");
    for (let btn of btnUpdate) {
      btn.addEventListener("click", () => {
        return updateCategory(btn.dataset.id);
      });
    }

    const btnRemove = document.querySelectorAll(".btn-remove");
    for (let btn of btnRemove) {
      btn.addEventListener("click", () => {
        return removeCategory(btn.dataset.id);
      });
    }
    
  });

const showCategory = (data) => {
  tbody.innerHTML = data.map((element, index) => {
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${element.name}</td>
        <td><button class="btn-update" data-id="${element.id}">Sửa</button></td>
        <td><button class="btn-remove" data-id="${element.id}">Xoá</button></td>
      </tr>
    `;
  }).join(" ");
}

const removeCategory = (id) => {
  fetch(`http://localhost:3000/categories/${id}`, {
    method: "DELETE",
  });
};

const addCategory = () => {
  document.querySelector("body").innerHTML = `
    <form>
      <input type="text" id="name" />
      <button type="submit" id="btn-submit">Thêm</button>
    </form>
  `;
  document.querySelector("#btn-submit").addEventListener("click", () => {
    const name = {
      name: document.querySelector("#name").value,
    };
    fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name),
    });
  });
};

document.querySelector('#btn-create').addEventListener('click', () => {
  addCategory();
})

const updateCategory = (id) => { 
  fetch(`http://localhost:3000/categories/${id}`)
    .then((response) => response.json())
    .then((response) => {
      document.querySelector("body").innerHTML = `
        <form>
          <input type="text" id="name" value="${response.name}"/>
          <button type="submit" id="btn-submit">Sửa</button>
        </form>
      `;
      document.querySelector("#btn-submit").addEventListener("click", () => {
        const name = {
          name: document.querySelector("#name").value,
        };
        fetch(`http://localhost:3000/categories/${response.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(name),
        });
      });
    });
}