import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummuyList = [
  {
    id: 1,
    author: "chae",
    content: "hi",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "a",
    content: "chu",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "b",
    content: "bye",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "c",
    content: "hello",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "d",
    content: "hungry",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummuyList} />
    </div>
  );
}

export default App;
