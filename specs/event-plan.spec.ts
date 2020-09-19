import EventPlan, { EventPlanModel } from "../src/event-plan";

describe("Event Plan", () => {
    let eventPlan: EventPlanModel;

    beforeEach(() => {
        eventPlan = new EventPlan(console);
    });

    describe("Run planner", () => {
        it("should run planner", () => {
            eventPlan.runPlanner();

            expect(true);
        });
    });
});
