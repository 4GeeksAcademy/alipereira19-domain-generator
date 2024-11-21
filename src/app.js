/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "his", "her", "their"];
  let adj = ["great", "big", "amazing", "unstoppable", "red", "blue"];
  let noun = ["jogger", "racoon", "dog", "merchant", "driver", "player", "god"];

  let allDomains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        allDomains.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }

  document.querySelector("#button").addEventListener("click", () => {
    let position = Math.floor(Math.random() * allDomains.length);
    document.getElementById("domain").innerHTML = allDomains[position];
  });
};
