
const api_url = () => {
  return "http://localhost/laravel/ndcake/public/api/categories";
};
function getId() {
  return new URLSearchParams(window.location.search).get("id");
}
const getData = async () => {
  const response = await axios.get(api_url());
  showData(response.data.data);
};
const showData = (data) => {
  document.querySelector("tbody").innerHTML = data
    .map(function (item, index) {
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${item.name_category}</td>
          <td><a class="btn btn-primary" href="edit.html?id=${
            item.id
          }">Edit</a></td>
          <td><button onclick="remove(${
            item.id
          })" class="btn btn-danger">Del</button></td>
        </tr>
      `;
    })
    .join(" ");
};
const remove = async (id) => {
  if (confirm("Do you want to remove item ?") == true) {
    await axios.delete(api_url() + "/" + id);
    getData();
  }
};
const create = async (name) => {
  axios;
  await axios.post(api_url(), {
    name_category: name,
  });
  window.location.href = "index.html";
};
const detail = async () => {
  const response = await axios.get(api_url() + "/" + getId());
  document.getElementById("name_category").value =
    response.data.data.name_category;
};
const update = async () => {
  await axios.put(api_url() + "/" + getId(), {
    name_category: document.getElementById("name_category").value,
  });
  window.location.href = "index.html";
};
