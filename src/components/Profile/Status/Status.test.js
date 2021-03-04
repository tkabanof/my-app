import {create, act} from "react-test-renderer";
import Status from "./Status";
import {unmountComponentAtNode} from "react-dom";


let container = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Status component", () => {
    test("status from props should be in the state", () => {
        let component;
        act(() => {
            component = create(<Status status="blblstatus"/>);
        });
        expect(component.toJSON()).toMatchSnapshot();
    });
});


/*
  <Status status={props.profileStatus}
              me={(props.me === p.userId)}
              setMyStatus={props.setMyStatus}
      />
  */