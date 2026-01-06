function generate() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+";

  let chars = "";
  if (upper.checked) chars += upper;
  if (lower.checked) chars += lower;
  if (number.checked) chars += number;
  if (symbol.checked) chars += symbol;

  const len = length.value;
  let pass = "";

  for (let i = 0; i < len; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }

  output.value = pass;
  setStrength(pass);
}

function copy() {
  output.select();
  document.execCommand("copy");
}

function setStrength(p) {
  let s = "Weak";
  if (p.length >= 12 && /[A-Z]/.test(p) && /[0-9]/.test(p)) s = "Strong";
  strength.innerText = "Strength: " + s;
}
