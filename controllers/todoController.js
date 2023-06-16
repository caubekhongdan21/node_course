const express = require("express");
const Todo = require("../models/Todo.js");
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const createTodo = async (req, res) => {
    const { content } = req.body;
    // console.log(req.headers.authorization);
    const newTodo = new Todo({
        content,
    });
    await newTodo.save();

    res.status(201).json({
        succes: true,
        user: req.user,
    });
};

const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json({
        succes: true,
        data: todos,
    });
};

const deleteTodoById = async (req, res) => {
    const { id } = req.params;

    await Todo.findByIdAndRemove(id);
    res.json({
        success: true,
    });
};

module.exports = {
    createTodo,
    getTodos,
    deleteTodoById,
};
