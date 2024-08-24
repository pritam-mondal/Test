const crypto = require("crypto");

const products = [
  {
    id: "2845b3f6-8b13-4de9-b120-9996fe62f214",
    name: "Laptop",
    price: 500,
    quantity: 4,
    active: true,
  },
  {
    id: "2845b3f6-8b13-4de9-b120-9996fe62f215",
    name: "Keyboard",
    price: 49.99,
    quantity: 10,
    active: true,
  },
  {
    id: "2845b3f6-8b13-4de9-b120-9996fe62f216",
    name: "Monitor 36in",
    price: 299.99,
    quantity: 8,
    active: true,
  },
];

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

exports.createProduct = (req, res) => {
  const { name, price, quantity, active } = req.body;

  if (!name) {
    return res.status(422).json({ message: "Name is requied" });
  }

  const id = crypto.randomUUID();

  products.push({ id, name, price, quantity, active });

  res.status(201).json({ message: "Product Created Successfully", id });
};

exports.getProductById = (req, res) => {
  const product = products.find((product) => product.id == req.params.id);

  if (!product) {
    //return res.status(204).send();
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

exports.updateProduct = (req, res) => {
  const product = products.find((product) => product.id == req.params.id);
  if (!product) {
    //return res.status(204).send();
    return res.status(404).json({ message: "Product not found" });
  }
  const { name, price, quantity, active } = req.body;

  if (name) {
    product.name = name;
  }
  if (price) {
    product.price = price;
  }
  if (quantity) {
    product.quantity = quantity;
  }
  if ("active" in req.body) {
    product.active = active;
  }
  res.status(200).json({ message: "Product Updated Successfully" });
};

exports.deleteProduct = (req, res) => {
  const product = products.find((product) => product.id == req.params.id);
  if (!product) {
    //return res.status(204).send();
    return res.status(404).json({ message: "Product not found" });
  }
  const productIndex = products.findIndex(
    (product) => product.id == req.params.id
  );

  products.splice(productIndex, 1);

  res.status(200).json({ mesaage: "Product Deleted Successfully" });
};
