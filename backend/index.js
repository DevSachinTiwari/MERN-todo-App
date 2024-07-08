const express = require('express')
const {createTodo, updateTodo} = require("./types");
const cors = require("cors");
const app = express()

app.use(express.json());
app.use(cors({
	origin: "http://localhost:5173"
}));

app.post("/todo", async function(req, res){
	const createPayload = req.body;
	const parsedPayload = createTodo.safeParse(createPayload);
	if (!parsedPayload.success) {
		res.status(411).json({
			msg: "You send the wrong inputs",
		})
		return;
	}
	await todo.create({
		titile: createPayload.title,
		description: createPayload.description,
		completed: false
	})

	res.json({
		msg: "Todo Created"
	})
})

app.get("/todos", async function(req, res){
	const todos = await todo.find({});
	res.json({
		todos
	})
})

app.put("/completed", async function(req, res){
	const updatePayload = reg.body;
	const parsedPayload = updateTodo.safeParse(updatePayload);
	if(!parsedPayload.success){
		res.status(411).json({
			msg: "You sent the wrong inputs",
		})
		return;
	}
	await todo.update({
		_id: req.body.id
	}, {
		completed: true
	})
	res.json({
		msg: "Todo marked as completed"
	})
})