const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, 'public', 'skills');
const techDir = path.join(__dirname, 'public', 'projects', 'tech');

const requiredSkills = ["expressjs", "bootstrap", "react-bootstrap", "restapi", "jwt", "chrome", "promptengineering", "machinelearning", "openai", "nodejs", "react"];

const requiredTech = ["nodejs", "expressjs", "chrome", "openai", "react", "mongodb"];

function createSVG(text, bgColor = "#333") {
  const letter = text.substring(0, 1).toUpperCase();
  return `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="${bgColor}"/><text x="25" y="32" font-family="Arial" font-size="24" fill="white" text-anchor="middle" font-weight="bold">${letter}</text></svg>`;
}

const colors = {
  expressjs: "#000000",
  bootstrap: "#7952B3",
  "react-bootstrap": "#41E0FD",
  restapi: "#FF9900",
  jwt: "#000000",
  chrome: "#4285F4",
  promptengineering: "#FF6D00",
  machinelearning: "#4CAF50",
  openai: "#10A37F",
  nodejs: "#339933",
  react: "#61DAFB",
  mongodb: "#47A248"
};

requiredSkills.forEach(tool => {
  const p = path.join(skillsDir, `${tool}.svg`);
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, createSVG(tool, colors[tool] || "#333"));
    console.log(`Created ${p}`);
  }
});

requiredTech.forEach(tool => {
  const p = path.join(techDir, `${tool}.svg`);
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, createSVG(tool, colors[tool] || "#333"));
    console.log(`Created ${p}`);
  }
});
