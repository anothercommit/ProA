"use strict";
import axios from "axios";

export default axios.create({
    baseURL: "https://fakestoreapi.com/products/category/",
    headers: { "Content-Type": "application/json" },
});
