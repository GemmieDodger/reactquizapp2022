import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Home from "./views/Home";
import Quiz from "./views/Quiz";
import Admin from "./views/Admin";
import CreateQuiz from "./views/CreateQuiz";
import EditQuiz from "./views/EditQuiz";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { AuthProvider } from "./authProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <AuthProvider>
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/quiz/:id/:quizname" element={<Quiz />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/admin/create" element={<CreateQuiz />} />
              <Route exact path="/admin/edit/quiz/:id/:quizname" element={<EditQuiz />} />
            </Routes>
          </div>
          </AuthProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
