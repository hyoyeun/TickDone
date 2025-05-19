import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Calendar from './pages/Calendar';
import Membership from './pages/Membership'
import GoalSetting from './pages/GoalSetting';
import GoalToday from './pages/GoalToday';
import MyInfoEdit from './pages/MyInfoEdit'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="myinfoedit" element={<MyInfoEdit />} />


        <Route path='/goaltoday' element={<GoalToday />}>
          <Route path='goalsetting' element={<GoalSetting />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
