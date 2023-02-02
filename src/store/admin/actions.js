import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getActiveAuthors = createAsyncThunk("getAuthor", async (token) => {
  try {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      `http://localhost:8000/api/authors?active=`,
      headers
    );
    return {
      response: { authors: response.data },
      message: "authors obtained",
    };
  } catch (error) {
    return {
      response: { authors: error.response.data },
      message: "Error obtained authors",
    };
  }
});

const getActiveCompanies = createAsyncThunk("getCompanies", async (token) => {
  try {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      `http://localhost:8000/api/companies?active=`,
      headers
    );
    return {
      response: { companies: response.data },
      message: "companies obtained",
    };
  } catch (error) {
    return {
      response: { companies: error.response.data },
      message: "Error obtained companies",
    };
  }
});

const UpdateUserToAuthor = createAsyncThunk(
  "updateRoleAuthor",
  async (id, token) => {
   const data = {}
    try {
      let url = `http://localhost:8000/api/auth/role/author/${id}`;
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.put(url,data, headers);
      return {
        succes: true,
        response: { data: response.data },
      };
    } catch (error) {
      return {
        success: false,
        response: error.response.data.response,
      };
    }
  }
);
const UpdateUserToCompany = createAsyncThunk(
  "updateRoleCompany",
  async (id, token) => {
    try {
      let url = `http://localhost:8000/api/auth/role/company/${id}`;
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.put(url,{}, headers);
      return {
        succes: true,
        response: { data: response.data },
      };
    } catch (error) {
      return {
        success: false,
        response: error.response.data.response,
      };
    }
  }
);

const adminActions = {
  getActiveAuthors,
  getActiveCompanies,
  UpdateUserToCompany,
  UpdateUserToAuthor,
};

export default adminActions;
