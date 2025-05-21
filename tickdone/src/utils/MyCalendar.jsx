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
    function stringDay(date) {
        const dateKey = date.toISOString().split('T')[0];
        const sameday = Object.entries(dataByDate).find(([key]) => key === dateKey);

        if (sameday) {
            const [_, value] = sameday;
            return value.memo;
        } else {
            return `날짜 ${dateKey}에 해당하는 데이터가 없음`;
        }
    }

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
        },
        "2025-05-24": {
            todos: ["블로그 글 작성", "책 읽기", "산책"],
            memo: "아침부터 집중이 잘 됨",
            score: 9
        },
        "2025-05-25": {
            todos: ["정리 정돈", "주간 계획 세우기"],
            memo: "머리가 복잡했지만 어느 정도 정리됨",
            score: 6
        },
        "2025-05-26": {
            todos: ["코딩 테스트 준비", "스터디 참여"],
            memo: "몰입도 높은 하루였음",
            score: 8
        },
        "2025-05-27": {
            todos: ["운동", "가족과 외식", "이메일 정리"],
            memo: "오랜만에 편안한 하루",
            score: 7
        },
        "2025-05-28": {
            todos: ["디자인 피드백 반영", "프로젝트 정리"],
            memo: "일의 마무리가 만족스러웠음",
            score: 8
        }
    };

    return (
        <div>

            <div className="p-5">
                <Calendar
                    onChange={(date) => (setValue(date), stringDay(date), console.log('ddddddddd' + dateKey))}
                    value={value}
                />
            </div>
            <div>
                <p>{stringDay(value)}</p>
            </div>
        </div>

    );
}

export default MyCalendar;