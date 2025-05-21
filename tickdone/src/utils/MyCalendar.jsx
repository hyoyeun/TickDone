import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

const sampleTodos = {
    '2025-05-22': ['React 공부', '운동하기'],
    '2025-05-23': ['팀 미팅', '목표 정리'],
};

function MyCalendar() {
    const [value, setValue] = useState(new Date());

    const dateKey = value.toISOString().split('T')[0]; // 'YYYY-MM-DD' 형태
    const todos = sampleTodos[dateKey] || [];
    const dataByDate = {
        "2025-05-22": {
            todos: ["React 공부", "운동하기"],
            memo: "피곤했지만 잘 버텼다",
            score: 7
        },
        "2025-05-23": {
            todos: ["회의", "코드 리뷰"],
            memo: "좀 더 집중했어야 했음",
            score: 5
        }
    };

    return (
        <div className="p-5">
            <Calendar
                onChange={setValue}
                value={value}
                tileContent={({ date, view }) => {
                    const key = format(date, 'yyyy-MM-dd');
                    const data = dataByDate[key];

                    if (view === 'month' && data) {
                        return (
                            <div className="text-xs text-blue-600 mt-1">
                                📝 {data.todos.length}개 / 점수: {data.score}
                            </div>
                        );
                    }
                    return null;
                }}
            />
        </div>

    );
}

export default MyCalendar;