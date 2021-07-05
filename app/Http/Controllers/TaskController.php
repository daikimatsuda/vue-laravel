<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function show(Task $task)
    {
        return $task;
    }

    public function store(Request $request)
    {
        return Task::create($request->all());
    }

    public function update(Request $request, Task $task)
    {
        $task->update($request->all());
        return $task;
    }

    public function destory($id)
    {
        $status = 200;
        $message = null;
        $result = 1;
        $task = Task::find($id);
        if($task) {
            $result = $task->delete();
        }
        return response()->json(['result' => $result, 'status' => $status, 'message' => $message]);
    }
}
