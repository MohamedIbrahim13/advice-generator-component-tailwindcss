const adviceKey = document.querySelector("#number");
const adviceDesc = document.querySelector("#description");
const roleDice = document.querySelector("#role");

const render = async () => {
  const { data } = await axios.get("https://api.adviceslip.com/advice");
  adviceKey.textContent = `ADVICE #${data.slip.id}`;
  adviceDesc.textContent = `"${data.slip.advice}"`;
  //console.log(data);
};

render();
roleDice.addEventListener("mouseover", async e => {
  e.preventDefault();
  render();
});
