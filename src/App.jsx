import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CListGroup,
  CListGroupItem,
  CRow,
} from "@coreui/react";

const todosData = [
  {
    id: 1,
    text: "Bring a Coffee",
    priority: 1,
  },
  {
    id: 2,
    text: "Bring a Tea",
    priority: 2,
  },
  {
    id: 3,
    text: "Bring a milk bottle",
    priority: 3,
  },
  {
    id: 4,
    text: "Bring a banana",
    priority: 4,
  },
  {
    id: 5,
    text: "Bring a apple",
    priority: 5,
  },
];

function App() {
  const [todos, setTodo] = useState(todosData);
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState(0);

  const addTodo = () => {
    if (todoText === "" || priority <= 0) return;
    const newTodo = {
      id: todos.length + 1,
      text: todoText,
      priority: priority,
    };
    todos.push(newTodo);
    setTodo([...todos]);
    setTodoText("");
    setPriority((currentValue) => 0);
  };

  return (
    <>
      <CContainer fluid>
        <div className="row justify-content-md-center">
          <CCard style={{ maxWidth: "50%" }} className="mb-3">
            <CCardHeader
              style={{ borderRadius: "5px", padding: "10px" }}
              className="mb-3"
              component="h5"
            >
              TODO APP
            </CCardHeader>
            <CCardBody>
              <CCol md>
                <CFormFloating className="mb-3">
                  <CFormInput
                    invalid={todoText.length <= 0}
                    valid={todoText.length > 0}
                    type="text"
                    id="todoText"
                    placeholder="Buy some coffee"
                    onChange={(e) => setTodoText(e.target.value)}
                    value={todoText}
                  />
                  <CFormLabel htmlFor="todoText" style={{ marginLeft: "10px" }}>
                    Todo Details
                  </CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md>
                <CFormFloating>
                  <CFormInput
                    invalid={priority <= 0}
                    valid={priority !== 0}
                    type="number"
                    id="priority"
                    placeholder="Priority"
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                  />
                  <CFormLabel htmlFor="priority" style={{ marginLeft: "10px" }}>
                    Priority
                  </CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md>
                <div className="d-grid mt-3">
                  <CButton color="success" onClick={addTodo}>
                    ADD
                  </CButton>
                </div>
              </CCol>
            </CCardBody>
          </CCard>
        </div>
        <div className="row justify-content-md-center">
          <CCard style={{ maxWidth: "50%" }} className="mb-3">
            <CCardBody>
              <CCol
                md
                style={{
                  maxHeight: "300px",
                  scrollBehavior: "smooth",
                  overflowY: "scroll",
                }}
              >
                <CListGroup>
                  {todos.map((todo) => {
                    return (
                      <CListGroupItem
                        key={todo.id}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <CFormCheck label={todo.text} />
                        <CBadge color="primary" shape="rounded-pill">
                          {todo.priority}
                        </CBadge>
                      </CListGroupItem>
                    );
                  })}
                </CListGroup>
              </CCol>
            </CCardBody>
          </CCard>
        </div>
      </CContainer>
    </>
  );
}

export default App;
