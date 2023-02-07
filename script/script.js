const key = "AIzaSyC-izinyO_ikmXd-cyRucWSOKvToateiCQ";
const api = "https://www.googleapis.com/blogger/v3/blogs";
const userId = "3993291107802437780";
const url = `${api}/${userId}/posts?key=${key}`;

// components
const blogpost = document.querySelector(".blogpost");

(async function main() {
  // You can use await inside this function block
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  const items = json.items;

  function sanitizeUrl(str) {
    var position = 4;
    var output = [str.slice(0, position), "s", str.slice(position)].join("");
    return output;
  }
  //   Ttile, Link, Gambar, Paragraph

  //   Card
  function card(i) {
    const p = document.querySelectorAll("p");
    function mainProcess(i) {
      const { title, url } = i;
      return {
        title,
        url: sanitizeUrl(url),
      };
    }
    const essential = mainProcess(i);
    console.log(mainProcess(i));
    return `
            <ul>
                <li>
                    <a href="${essential.url}" target="_blank">${essential.title}</a>
                </li>
            </ul>
    `;
  }
  let cards = "";

  //   Rendered
  items.forEach((item) => {
    cards += card(item);
  });
  blogpost.innerHTML = cards;
})();

const nav = document.querySelector("nav");
function sticked() {
  return nav.className == "sticky-top"
    ? (nav.style.backgroundColor = "#f0f0f0")
    : "";
}

sticked();

// "X-Auth-Token": "apikey",
