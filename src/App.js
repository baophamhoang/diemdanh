import logo from "./logo.svg";
import "./App.css";
import WidgetContent from "./components/widget/WidgetContent";

function App() {
  return (
    <div className="App">
      <div className="row d-flex justify-content-center container mr-auto ml-auto">
        <div className="col-md-6 col-sm-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i className="fa fa-tasks"></i>&nbsp;Thông báo
              </div>
            </div>
            <div className="ps-content">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="todo-indicator bg-focus"></div>
                  <WidgetContent heading></WidgetContent>
                </li>
                <li className="list-group-item">
                  <div className="todo-indicator bg-warning"></div>
                  <WidgetContent name='bao'></WidgetContent>
                </li>
                <li className="list-group-item">
                  <div className="todo-indicator bg-warning"></div>
                  <WidgetContent name='bao'></WidgetContent>
                </li>
                <li className="list-group-item">
                  <div className="todo-indicator bg-warning"></div>
                  <WidgetContent name='bao'></WidgetContent>
                </li>
                <li className="list-group-item">
                  <div className="todo-indicator bg-warning"></div>
                  <WidgetContent name='bao'></WidgetContent>
                </li>
              </ul>
            </div>
            {/* <div className="d-block text-right card-footer">
              <button className="mr-2 btn btn-link btn-sm">Cancel</button>
              <button className="btn btn-primary">Add Task</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
