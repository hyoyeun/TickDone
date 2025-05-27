import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';



function MyCalendar() {
    const [value, setValue] = useState(new Date());
    const dateKey = value.toISOString().split('T')[0]; // 'YYYY-MM-DD' 형태
    function stringDay(date) {
        const dateKey = value.toISOString().split('T')[0];
        const sameday = Object.entries(dataByDate).find(([key]) => key === dateKey);

        if (sameday) {
            const [_, value] = sameday;
            return value.memo;
        } else {
            return `날짜 ${dateKey}에 해당하는 데이터가 없음`;
        }
    }

    function highGrade(date) {
        const dateKey = value.toISOString().split('T')[0];
        const someDay = Object.entries(dataByDate).find(([key]) => key === dateKey);

        console.log("구조분해 할당 전 " + someDay)
        if (someDay) {
            const [_, value] = someDay;
            console.log("구조분해 할당 후 " + value.score)
            if (value.score >= 7) {
                return `veryGood,  score : ${value.score}`;
            } else if (value.score >= 5) {
                return `Goood, score : ${value.score} `;
            } else {
                return `tryMore, score : ${value.score}`;
            }
        }
    }

    function todoListShow(data) {
        const dataKey = value.toISOString().split('T')[0];
        const someDay = Object.entries(dataByDate).find(([key]) => key === dataKey);

        if (someDay) {
            const [_, value] = someDay;

            return <div>
                {value.todos.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>

        } else {
            return '투두 리스트가 존재하지 않습니다.'
        }
    }


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
        },
        "2025-05-29": {
            memo: "집중안됨",
            score: 2
        }

    };

    return (
        <div>

            <div className="p-5">
                <Calendar
                    onChange={(date) => (setValue(date), stringDay(date), console.log('ddddddddd ' + dateKey), highGrade(date), todoListShow(data))}
                    value={value}
                />
            </div>
            <div>
                <p>memo => {stringDay(value)}</p>
                <p>score => {highGrade(value)}</p>
                <p>todoList {todoListShow(value)}</p>
            </div>
        </div>

    );
}

export default MyCalendar;