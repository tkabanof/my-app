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
    test("example1", () => {
        let component;
        act(() => {
            component = create(<Status status="blblstatus"/>);
        });
        expect(component.toJSON()).toMatchSnapshot();
    });
    test("status from props should be in the state", () => {
        let component;
        act(() => {
            component = create(<Status status="blblstatus"/>);
        });
        const root = component.root;
        const status = root.findByType(Status);
        expect(status.props.status).toBe("blblstatus");
    });
    test("status should have a span", () => {
        let component;
        act(() => {
            component = create(<Status status="blblstatus"/>);
        });
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });


    test("status should have a span with correct status text", () => {
        let component;
        act(() => {
            component = create(<Status status="blblstatus"/>);
        });
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("blblstatus");
    });
    test("status should not have a input when started", () => {
        let component;
        act(() => {
            component = create(<Status status="blblstatus"/>);
        });
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });
    test("input should be swithed to edit mode when duble click", () => {
        let component;
        act(() => {
            component = create(<Status status={"blblstatus"} me={true}/>)
        });
        const root = component.root;
        let span = root.findByType("span");
        act(() => span.props.onDoubleClick());
        let input;
        input = root.findByType("input");
        expect(input.props.value).toBe("blblstatus");
    });

});