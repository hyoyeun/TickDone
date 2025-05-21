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
import Header from './pages/Header';
import Footer from './pages/Footer';


function App() {

  return (
    <div class="flex flex-col min-h-screen">
      <Header  />
      <main class="flex-1">
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
      </main>
      <Footer />

    </div >
  )
}

export default App
