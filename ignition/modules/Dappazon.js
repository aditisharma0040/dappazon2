const { ethers } = require("hardhat");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { items } = require("./items.json");

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), 18);
};

module.exports = buildModule("Dappazon", (m) => {
  const dappazon = m.contract("Dappazon");

  for (let i = 0; i < items.length; i++) {
    m.call(dappazon, "list", [
      items[i].id,
      items[i].name,
      items[i].category,
      items[i].image,
      tokens(items[i].price),
      items[i].rating,
      items[i].stock,
    ],{ id: `DappazonListCall${i}` });
  }

  return { dappazon };
});