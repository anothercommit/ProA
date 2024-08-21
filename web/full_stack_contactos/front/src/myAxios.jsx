"use strict";
import axios from "axios";

export const myAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' }
});

