import {create} from "react-test-renderer";
import Status from "./Status";


describe("Status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<Status status="blblstatus"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("blblstatus");


    });
});


/*
  <Status status={props.profileStatus}
              me={(props.me === p.userId)}
              setMyStatus={props.setMyStatus}
      />
  */